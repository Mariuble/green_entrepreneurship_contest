import locations from '../data/locations.json';
import { Location, LocationRaw } from '../types/data';

const foo = (): Array<Location> => {
    const rawData = locations as Array<LocationRaw>;
    return rawData.map((data) => {
        return {
            ...data,
            longitude: parseFloat(data.longitude),
            latitude: parseFloat(data.latitude),
            hoursSinceLastPosition: parseInt(data.hoursSinceLastPosition),
        } as Location;
    });
};

export default foo;
