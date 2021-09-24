import { LatLngTuple } from 'leaflet';
import { Location } from '../types/data';

type LocationWithDistance = Location & { distance: number };
type RouteWithDistance = Array<LocationWithDistance>;
type Route = Array<Location>;
export type RouteWithMinDistance = { route: Route; minDistance: number; index: number };

const distance = (first: LatLngTuple, second: LatLngTuple): number =>
    Math.sqrt(Math.pow(first[0] - second[0], 2) + Math.pow(first[1] - second[1], 2));

const appendDistanceToDataPoints = (position: LatLngTuple, routes: Array<Route>): Array<RouteWithDistance> =>
    routes.map((route) =>
        route.map((dataPoint) => {
            return {
                ...dataPoint,
                distance: distance(position, dataPoint.coordinates),
            };
        }),
    );

const findMinDistance = (route: RouteWithDistance): RouteWithMinDistance => {
    let index = 0;
    let minDistance = 99999;
    for (let i = 0; i < route.length; i++) {
        const location = route[i];
        if (location.distance < minDistance) {
            index = i;
            minDistance = location.distance;
        }
    }
    return {
        route: route,
        minDistance: minDistance,
        index: index,
    };
};

const filterSameRoute = (route: RouteWithMinDistance): boolean => route.minDistance > 0;

const findClosestRoute = (routes: Array<RouteWithMinDistance>): RouteWithMinDistance =>
    routes.reduce((prev, curr) => (prev.minDistance < curr.minDistance ? prev : curr));

const closest = (position: LatLngTuple, routes: Array<Array<Location>>): RouteWithMinDistance => {
    const routesWithMinDistance = appendDistanceToDataPoints(position, routes)
        .map(findMinDistance)
        .filter(filterSameRoute);
    const bestRoute = findClosestRoute(routesWithMinDistance);
    console.log(bestRoute);
    const filtered = bestRoute.route.filter((_, i) => i >= bestRoute.index);
    bestRoute.route = filtered;
    // return findClosestRoute(routesWithMinDistance).map((c) => c.route.filter)
    console.log(bestRoute);
    return bestRoute;
};

export default closest;
