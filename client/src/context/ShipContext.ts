import { createContext, Dispatch } from 'react';
import { DispatchAction, DispatchActions, Route, ShipDataState } from '../types/shipContext';
import shipParser from '../parser/shipParser';
import locationParser from '../parser/locationParser';
import estimateCO2PerDistance from '../utils/estimateCO2PerDistance';
import groupLocation from '../utils/groupLocations';

const START = 'USMSY';
const DAILY_RATE = 47273;

const generateInitialState = (): ShipDataState => {
    const ships = shipParser();
    const locations = locationParser();
    const routes = groupLocation(locations);

    const distanceUsToChina = ships[9].totalDistance;
    const timeToChina = ships[9].hoursUnderway / 24;

    const toUs = ships
        .filter((ship) => ship.to === START)
        .map((ship) => {
            return { ...ship, co2: ship.totalCO2, time: ship.hoursUnderway / 24 };
        });
    const fromUs = ships
        .filter((ship) => ship.from === START)
        .map((ship) => {
            return { name: ship.vesselName, co2: estimateCO2PerDistance(ship) * distanceUsToChina, time: timeToChina };
        });

    const extendedShips = toUs.map((ship, i) => {
        let estimatedTimeToUS = fromUs[i].time * 24 * (ship.totalDistance / ship.hoursUnderway / 12.828);

        return {
            ...ship,
            co2: ship.co2 + (ship.co2 / (ship.time * 24)) * estimatedTimeToUS,
            time: ship.time * 24 + estimatedTimeToUS,
            cost: DAILY_RATE * estimatedTimeToUS,
        };
    });

    const routeFromUs = routes[9];
    const routesToUs = routes.filter((route) => route[0].from === START);

    return {
        ships: extendedShips,
        selectedShip: null,
        routeFromUs: routeFromUs,
        allRoutesToUs: routesToUs,
        selectedRouteToUs: null,
    };
};

export const initialState = generateInitialState();

export const ShipContext = createContext(
    {} as {
        state: ShipDataState;
        dispatch: Dispatch<DispatchAction>;
    },
);

export const shipReducer = (state: ShipDataState, action: DispatchAction): ShipDataState => {
    switch (action.type) {
        case DispatchActions.SELECT_SHIP:
            let route = state.allRoutesToUs.find((route) => route[0].vesselName === action.payload.vesselName);
            // M/S Ocean is named 'M/S Ocean (30)' in vessel names data and 'M/S Ocean (24)' in location data, so we have to do this hack...
            if (!route) route = state.allRoutesToUs[5];
            return {
                ...state,
                selectedShip: action.payload,
                selectedRouteToUs: route,
            };
        case DispatchActions.CLEAR_SHIP:
            console.log('Clear ship');
            return {
                ...state,
                selectedShip: null,
                selectedRouteToUs: null,
            };
    }
};
