import { Route } from '../types/shipContext';

const fixWrap = (route: Route): Array<Route> => {
    const output = [];
    let last = route[0];
    for (let i = 0; i < route.length; i++) {
        const el = route[i];
        if (Math.abs(last.longitude - el.longitude) > 100) {
            output.push(route.slice(0, i));
            output.push(route.slice(i));
            break;
        }
        last = el;
    }
    if (output.length === 0) return [route];
    return output;
};

const fixWorldWrap = (routes: Array<Route>): Array<Route> => routes.flatMap(fixWrap);

export default fixWorldWrap;
