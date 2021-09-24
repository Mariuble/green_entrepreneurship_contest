import { Ship } from '../types/data';

export default (ship: Ship): number => ship.totalCO2 / ship.totalDistance;
