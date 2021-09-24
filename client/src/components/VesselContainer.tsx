import React, { useContext } from 'react';
import { ShipContext } from '../context/ShipContext';
import { Flex, Box, Spacer, Center } from '@chakra-ui/react';
import Vessel from './Vessel';
import LeafletMap from './LeafletMap';
import TableEntry from './TableEntry';

const VesselContainer = () => {
    const { ships } = useContext(ShipContext).state;
    if (!ships) return <div></div>;
    ships.sort((a, b) => a.co2 - b.co2 || a.cost - b.cost || a.time - b.time);

    const avgCost = ships.reduce<number>((sum, curr) => sum + curr.cost, 0) / 6;
    const avgTime = ships.reduce<number>((sum, curr) => sum + curr.time, 0) / 6;
    const avgCo2 = ships.reduce<number>((sum, curr) => sum + curr.co2, 0) / 6;

    return (
        <Box h="100vh">
            <Flex direction="row">
                <Box w="80%">
                    <Vessel>
                        {ships.map((ship, i) => (
                            <TableEntry
                                vesselName={ship.vesselName}
                                recommended={i === 0 ? true : false}
                                co2={ship.co2}
                                cost={ship.cost}
                                time={ship.time}
                                avgCost={avgCost}
                                avgTime={avgTime}
                                avgCo2={avgCo2}
                            />
                        ))}
                    </Vessel>
                </Box>
                <LeafletMap />
            </Flex>
        </Box>
    );
};

export default VesselContainer;
