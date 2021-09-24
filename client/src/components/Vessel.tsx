import React, { useContext } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Grid,
    GridItem,
    Stat,
    StatLabel,
    StatNumber,
    Flex,
} from '@chakra-ui/react';
import { AiFillCheckCircle, AiFillWarning, AiOutlineExclamationCircle } from 'react-icons/ai';
import { GiShipWheel } from 'react-icons/gi';
import formatMoney from '../utils/formatMoney';
import { DispatchActions, ShipExtended } from '../types/shipContext';
import { ShipContext } from '../context/ShipContext';
// import { CheckIcon } from '@chakra-ui/icons'

const dnvbluedark = '#002A3E';
const dnvbluelight = '#8CD3EF';
const dnvgreendark = 'rgb(63, 156, 53)';
const dnvgreenlight = '#65B33A';

interface Props {
    ship: ShipExtended;
    recommended: boolean;
}

const Vessel = ({ ship, recommended }: Props) => {
    const { vesselName, co2, cost, time } = ship;
    const { dispatch } = useContext(ShipContext);
    return (
        <Accordion allowToggle m={10}>
            <AccordionItem>
                <AccordionButton
                    h={'-webkit-fit-content'}
                    p={5}
                    borderRadius="10"
                    fontWeight="bold"
                    fontSize="large"
                    bg="white"
                    top={0}
                >
                    <Grid templateColumns="repeat(4, 1fr)" w="100%" justifyContent="space-around" color="#002A3E">
                        <Box>
                            <Grid>
                                <GridItem>{`${vesselName} ${recommended ? '🌎' : ''}`}</GridItem>
                                <GridItem display="flex" justifyContent="center" textAlign="center">
                                    <GiShipWheel size="2em" />
                                </GridItem>
                            </Grid>
                        </Box>
                        <Box>
                            <Grid>
                                <GridItem color={dnvgreendark} fontSize="small">
                                    Emission:
                                </GridItem>
                                <GridItem p={5}>{`${co2.toFixed(2)} tonnes Co2`}</GridItem>
                                <GridItem justifyContent="center" display="flex">
                                    {co2 > 5000 ? (
                                        <AiFillWarning color="red" />
                                    ) : co2 > 4500 ? (
                                        <AiOutlineExclamationCircle color="orange" />
                                    ) : (
                                        <AiFillCheckCircle color={dnvgreenlight} />
                                    )}
                                </GridItem>
                            </Grid>
                        </Box>
                        <Box>
                            <Grid>
                                <GridItem color={dnvgreendark} fontSize="small">
                                    Price:
                                </GridItem>
                                <GridItem p={5}>{formatMoney(cost)}</GridItem>
                                <GridItem justifyContent="center" display="flex">
                                    {cost > 60000000 ? (
                                        <AiFillWarning color="red" />
                                    ) : cost > 58000000 ? (
                                        <AiOutlineExclamationCircle color="orange" />
                                    ) : (
                                        <AiFillCheckCircle color={dnvgreenlight} />
                                    )}
                                </GridItem>
                            </Grid>
                        </Box>
                        <Box justifyContent="center">
                            <Grid>
                                <GridItem color={dnvgreendark} fontSize="small">
                                    Distance:
                                </GridItem>
                                <GridItem p={5}>{`${time.toFixed(0)} hours`}</GridItem>
                                <GridItem justifyContent="center" display="flex">
                                    {time > 1500 ? (
                                        <AiFillWarning color="red" />
                                    ) : time > 1350 ? (
                                        <AiOutlineExclamationCircle color="orange" />
                                    ) : (
                                        <AiFillCheckCircle color={dnvgreenlight} />
                                    )}
                                </GridItem>
                            </Grid>
                        </Box>
                    </Grid>
                    <AccordionIcon w={20} h={20} color={dnvbluedark} />
                </AccordionButton>

                <AccordionPanel
                    p={6}
                    mx={10}
                    color="#002A3E"
                    border="1px solid"
                    borderTop="0"
                    borderBottomRadius="10"
                    textAlign="left"
                    h={'-moz-min-content'}
                >
                    <Flex
                        templateRows="repeat(3, 1fr)"
                        templateColumns="repeat(2, 1fr)"
                        justifyContent="space-between"
                        px={40}
                        textAlign="center"
                        flexDirection="row"
                    >
                        <Flex flexDirection="column">
                            <Box p="6" rounded="md" bg="white" border="1px solid grey" m={0}>
                                <Stat>
                                    <StatLabel color={dnvgreendark} fontSize="small">
                                        {`${Vessel.name}`}
                                    </StatLabel>
                                    <StatNumber m={10}>{`${time.toFixed(0)} hours`}</StatNumber>
                                </Stat>
                            </Box>
                            <Box bg="white" border="1px solid grey">
                                <Stat>{`Kamsarmax`}</Stat>
                            </Box>
                            <Box bg="white" border="1px solid grey">
                                <Stat>{`Position`}</Stat>
                            </Box>
                        </Flex>
                        <GridItem rowSpan={3} w={500} bg={dnvgreenlight}>
                            Map
                        </GridItem>
                    </Flex>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
};

export default Vessel;
