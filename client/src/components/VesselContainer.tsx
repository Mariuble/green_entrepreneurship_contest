import React, { useContext } from 'react';
import { ShipContext } from '../context/ShipContext';
import { Flex, Box, Spacer, Center } from '@chakra-ui/react';
import Vessel from './Vessel';
import LeafletMap from './LeafletMap';

const VesselContainer = () => {
    const { ships } = useContext(ShipContext).state;
    if (!ships) return <div></div>;
    ships.sort((a, b) => a.co2 - b.co2 || a.cost - b.cost || a.time - b.time);

    return (
        <Box h="100vh">
            <Flex direction="row">
                <Box w="50%" bg="green">
                    {ships.map((ship, i) => (
                        <Vessel ship={ship} recommended={i === 0 ? true : false} />
                    ))}
                </Box>
                <LeafletMap />
            </Flex>
        </Box>
    );
};

export default VesselContainer;
