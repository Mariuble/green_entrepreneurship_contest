import React, { useContext } from 'react';
import { ShipContext } from '../context/ShipContext';
import Vessel from './Vessel';

const VesselContainer = () => {
    const { ships } = useContext(ShipContext).state;
    if (!ships) return <div></div>;
    ships.sort((a, b) => a.co2 - b.co2 || a.cost - b.cost || a.time - b.time);

    return (
        <div id="vessel">
            {ships.map((ship, i) => (
                <Vessel ship={ship} recommended={i === 0 ? true : false} />
            ))}
        </div>
    );
};

export default VesselContainer;
