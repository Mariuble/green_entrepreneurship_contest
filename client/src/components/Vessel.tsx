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

const Vessel = ({ vessel = { name: 'Lers M/S', emission: 300, price: 54.6887, distance: 300 } }) => (
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
                        <Box textAlign="left" verticalAlign="top" left={0}>{`${vessel.name}`}</Box>
                        <Box>
                            <Stat>
                                <StatLabel color={dnvgreendark} fontSize="small">
                                    Emission:
                                </StatLabel>
                                <StatNumber m={10}>{`${vessel.emission} Co2`}</StatNumber>
                                <AiFillCheckCircle color={dnvgreenlight} />
                            </Stat>
                        </Box>
                        <Box>
                            <Stat>
                                <StatLabel color={dnvgreendark} fontSize="small">
                                    Price:
                                </StatLabel>
                                <StatNumber m={10}>{`$${vessel.price}`}</StatNumber>
                                {vessel.price > 55000 ? (
                                    <AiFillWarning color="#red" />
                                ) : vessel.price > 45000 ? (
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
                                <StatNumber m={10}>{`${vessel.distance}km`}</StatNumber>
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
                                    <StatNumber m={10}>{`${vessel.distance}km`}</StatNumber>
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
