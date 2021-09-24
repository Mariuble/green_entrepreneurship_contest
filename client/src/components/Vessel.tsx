import React from 'react';
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
// import { CheckIcon } from '@chakra-ui/icons'

const dnvbluedark = '#002A3E';
const dnvbluelight = '#8CD3EF';
const dnvgreendark = 'rgb(63, 156, 53)';
const dnvgreenlight = '#65B33A';

interface Props {
    vesselName: string;
    co2: number;
    time: number;
    cost: number;
}

// const Vessel = ({ vessel = { name: 'Lers M/S', emission: 300, price: 54.6887, distance: 300 } }) => (
const Vessel = ({ vesselName, co2, time, cost }: Props) => (
    <div>
        <Accordion allowToggle m={10}>
            <AccordionItem>
                <AccordionButton h={110} p={4} borderRadius="10" fontWeight="bold" fontSize="large" bg="white" top={0}>
                    <Grid
                        templateColumns="repeat(4, 1fr)"
                        w="100%"
                        justifyContent="space-around"
                        color="#002A3E"
                        p={10}
                    >
                        <Box textAlign="left" verticalAlign="top" left={0}>{`${vesselName}`}</Box>
                        <Box>
                            <Stat>
                                <StatLabel color={dnvgreendark} fontSize="small">
                                    Emission:
                                </StatLabel>
                                <StatNumber m={10}>{`${co2.toFixed(2)} tonnes Co2`}</StatNumber>
                                <AiFillCheckCircle color={dnvgreenlight} />
                            </Stat>
                        </Box>
                        <Box>
                            <Stat>
                                <StatLabel color={dnvgreendark} fontSize="small">
                                    Price:
                                </StatLabel>
                                <StatNumber m={10}>{`$${cost.toFixed(0)}`}</StatNumber>
                                {cost > 55000 ? (
                                    <AiFillWarning color="#red" />
                                ) : cost > 45000 ? (
                                    <AiOutlineExclamationCircle color="orange" />
                                ) : (
                                    <AiFillCheckCircle color={dnvgreenlight} />
                                )}
                            </Stat>
                        </Box>
                        <Box justifyContent="center">
                            <Stat>
                                <StatLabel color={dnvgreendark} fontSize="small">
                                    Distance:
                                </StatLabel>
                                <StatNumber m={10}>{`${time.toFixed(0)} hours`}</StatNumber>
                                <AiFillCheckCircle color={dnvgreenlight} />
                            </Stat>
                        </Box>
                    </Grid>
                    <AccordionIcon w={40} h={40} color={dnvbluedark} />
                </AccordionButton>

                <AccordionPanel
                    p={4}
                    mx={10}
                    color="#002A3E"
                    border="1px solid"
                    borderTop="0"
                    borderBottomRadius="10"
                    textAlign="left"
                    h={200}
                    boxShadow="outline"
                    rounded="lg"
                    bg="white"
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
                            <Box boxShadow="xs" p="6" rounded="md" bg="white" border="1px solid grey" m={0}>
                                <Stat>
                                    <StatLabel color={dnvgreendark} fontSize="small">
                                        {`${Vessel.name}`}
                                    </StatLabel>
                                    <StatNumber m={10}>{`${time.toFixed(0)} hours`}</StatNumber>
                                </Stat>
                            </Box>
                            <Box>
                                <Stat>{`Kamsarmax`}</Stat>
                            </Box>
                            <Box>
                                <Stat>{`${Vessel.name}`}</Stat>
                            </Box>
                        </Flex>
                        <GridItem rowSpan={3} w={500} bg={dnvgreenlight}>
                            Map
                        </GridItem>
                    </Flex>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    </div>
);

export default Vessel;
