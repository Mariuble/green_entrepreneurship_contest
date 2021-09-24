import { Ship } from './data';

export type ShipExtended = Ship & {
    co2: number;
    time: number;
    cost: number;
};

export type ShipDataState = {
    ships: Array<ShipExtended> | null | undefined;
    selectedShip: ShipExtended | null | undefined;
};

export enum DispatchActions {
    SELECT_SHIP = 'SELECT_SHIP',
    CLEAR_SHIP = 'CLEAR_SHIP',
}

export type SelectShipAction = {
    payload: ShipExtended;
    type: DispatchActions.SELECT_SHIP;
};

export type ClearShipAction = {
    type: DispatchActions.CLEAR_SHIP;
};

export type DispatchAction = SelectShipAction | ClearShipAction;
