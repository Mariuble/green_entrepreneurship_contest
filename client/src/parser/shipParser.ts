import ships from '../data/ships.json';
import { Ship, ShipRaw } from '../types/data';

const foo = (): Array<Ship> => {
    const rawData = ships as Array<ShipRaw>;
    return rawData.map((data) => {
        return {
            ...data,
            hoursUnderway: parseFloat(data.hoursUnderway),
            totalDistance: parseFloat(data.totalDistance),
            cargoToDwtPct: parseInt(data.cargoToDwtPct),
            totalCO2: parseInt(data.totalCO2),
        } as Ship;
    });
};

export default foo;
