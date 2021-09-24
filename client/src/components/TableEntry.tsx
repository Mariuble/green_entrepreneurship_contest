import react from 'react';
import { Td, Tr, Text, Box, Flex } from '@chakra-ui/react';
import { AiFillCheckCircle, AiFillWarning, AiOutlineExclamationCircle } from 'react-icons/ai';
import formatMoney from '../utils/formatMoney';

type TableEntryType = {
    vesselName: string;
    recommended: boolean;
    co2: number;
    cost: number;
    time: number;
    avgCost: number;
    avgTime: number;
    avgCo2: number;
};

const TableEntry = ({ vesselName, recommended, co2, cost, time, avgCost, avgTime, avgCo2 }: TableEntryType) => {
    const dnvbluedark = '#002A3E';
    const dnvbluelight = '#8CD3EF';
    const dnvgreendark = 'rgb(63, 156, 53)';
    const dnvgreenlight = '#65B33A';
    return (
        <Tr _hover={{ cursor: 'pointer' }}>
            <Td>{`${vesselName} ${recommended ? '🌎' : ''}`}</Td>
            <Td>
                <Flex>
                    {`${co2.toFixed(2)} tonnes Co2`}
                    {co2 > avgCo2 + 200 ? (
                        <AiFillWarning color="red" />
                    ) : co2 > avgCo2 ? (
                        <AiOutlineExclamationCircle color="orange" />
                    ) : (
                        <AiFillCheckCircle color={dnvgreenlight} />
                    )}
                </Flex>
            </Td>
            <Td>
                <Flex>
                    {formatMoney(cost)}{' '}
                    {cost > avgCost + 3500000 ? (
                        <AiFillWarning color="red" />
                    ) : cost > avgCost ? (
                        <AiOutlineExclamationCircle color="orange" />
                    ) : (
                        <AiFillCheckCircle color={dnvgreenlight} />
                    )}
                </Flex>
            </Td>
            <Td>
                <Flex>
                    {`${time.toFixed(0)} hours`}{' '}
                    {time > avgTime + 200 ? (
                        <AiFillWarning color="red" />
                    ) : time > avgTime ? (
                        <AiOutlineExclamationCircle color="orange" />
                    ) : (
                        <AiFillCheckCircle color={dnvgreenlight} />
                    )}
                </Flex>
            </Td>
        </Tr>
    );
};

export default TableEntry;
