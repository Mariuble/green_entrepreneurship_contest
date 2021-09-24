import React, { useContext } from 'react';
import { ShipContext } from '../context/ShipContext';
import Vessel from './Vessel';

const VesselContainer = () => {
    const { ships } = useContext(ShipContext).state;
    if (!ships) return <div></div>;

    return (
        <div id="vessel">
            {ships.map((ship) => (
                <Vessel ship={ship} />
            ))}
        </div>
    );
};

export default VesselContainer;
