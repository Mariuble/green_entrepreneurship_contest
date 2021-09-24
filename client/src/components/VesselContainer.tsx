import React, { useContext } from 'react';
import { ShipContext } from '../context/ShipContext';
import Vessel from './Vessel';

const VesselContainer = () => {
    const { ships } = useContext(ShipContext).state;
    if (!ships) return <div></div>;
    ships.sort((a, b) => a.co2 - b.co2 || a.cost - b.cost || a.time - b.time);

    const avgCost = ships.reduce<number>((sum, curr) => sum + curr.cost, 0) / 6;
    const avgTime = ships.reduce<number>((sum, curr) => sum + curr.time, 0) / 6;
    const avgCo2 = ships.reduce<number>((sum, curr) => sum + curr.co2, 0) / 6;

    return (
        <div id="vessel">
            {ships.map((ship, i) => (
                <Vessel
                    ship={ship}
                    recommended={i === 0 ? true : false}
                    avgCost={avgCost}
                    avgTime={avgTime}
                    avgCo2={avgCo2}
                />
            ))}
        </div>
    );
};

export default VesselContainer;
