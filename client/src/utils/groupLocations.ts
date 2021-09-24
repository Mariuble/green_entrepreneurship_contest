import { Location } from '../types/data';

const groupLocation = (locations: Array<Location>): Array<Array<Location>> => {
    const bar: Array<Array<Location>> = [[locations[0]]];

    let j = 0;

    let last = locations[0];
    for (let i = 1; i < locations.length; i++) {
        const el = locations[i];
        if (el.vesselName !== last.vesselName || el.from !== last.from || el.to !== last.to) {
            j++;
            bar.push([el]);
        } else {
            bar[j].push(el);
        }
        last = el;
    }

    return bar;
};

export default groupLocation;
