import { createContext, Dispatch } from 'react';
import { DispatchAction, DispatchActions, ShipDataState } from '../types/shipContext';
import shipParser from '../parser/shipParser';
import estimateCO2PerDistance from '../utils/estimateCO2PerDistance';

const START = 'USMSY';
const DAILY_RATE = 47273;

const generateInitialState = (): ShipDataState => {
    const ships = shipParser();

    const distanceUsToChina = ships[9].totalDistance;
    const timeToChina = ships[9].hoursUnderway / 24;

    const toUs = ships
        .filter((ship) => ship.to === START)
        .map((ship) => {
            return { ...ship, co2: ship.totalCO2, time: ship.hoursUnderway };
        });
    const fromUs = ships
        .filter((ship) => ship.from === START)
        .map((ship) => {
            return { name: ship.vesselName, co2: estimateCO2PerDistance(ship) * distanceUsToChina, time: timeToChina };
        });

    const extendedShips = toUs.map((ship, i) => {
        return {
            ...ship,
            co2: ship.co2 + fromUs[i].co2,
            time: ship.time + fromUs[i].time,
            cost: DAILY_RATE * fromUs[i].time,
        };
    });

    return {
        ships: extendedShips,
        selectedShip: null,
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
            return {
                ...state,
                selectedShip: action.payload,
            };
        case DispatchActions.CLEAR_SHIP:
            return {
                ...state,
                selectedShip: null,
            };
    }
};
