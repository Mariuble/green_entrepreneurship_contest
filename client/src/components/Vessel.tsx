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
                <AccordionButton h={150} p={4} borderRadius="10" fontWeight="bold" fontSize="large" bg="white" top={0}>
                    <Grid
                        // templateRows="repeat(2, 1fr)"
                        templateColumns="repeat(3, 1fr)"
                        w="100%"
                        justifyContent="space-around"
                        color="#002A3E"
                    >
                        <GridItem textAlign="left" verticalAlign="top" colSpan={3}>{`${vessel.name}`}</GridItem>
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
                    // border="solid #AAAAAA 1px"
                    borderTop="0"
                    rounded="lg"
                    bg="white"
                    borderBottomRadius="10"
                    textAlign="left"
                    h={200}
                >
                    {`Price`}
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    </div>
);

export default Vessel;
