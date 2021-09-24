import locations from '../data/locations.json';
import { Location, LocationRaw } from '../types/data';

const parser = (): Array<Location> => {
    const rawData = locations as Array<LocationRaw>;
    return rawData.map((data) => {
        return {
            ...data,
            longitude: parseFloat(data.longitude),
            latitude: parseFloat(data.latitude),
            hoursSinceLastPosition: parseInt(data.hoursSinceLastPosition),
            coordinates: [parseFloat(data.latitude), parseFloat(data.longitude)],
        } as Location;
    });
};

export default parser;
