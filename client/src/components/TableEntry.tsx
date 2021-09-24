import react, { useContext } from 'react';
import { Td, Tr, Text, Box, Flex } from '@chakra-ui/react';
import { AiFillCheckCircle, AiFillWarning, AiOutlineExclamationCircle } from 'react-icons/ai';
import formatMoney from '../utils/formatMoney';
import { DispatchActions, ShipExtended } from '../types/shipContext';
import { ShipContext } from '../context/ShipContext';

type TableEntryType = {
    ship: ShipExtended;
    vesselName: string;
    recommended: boolean;
    co2: number;
    cost: number;
    time: number;
};

const TableEntry = ({ ship, vesselName, recommended, co2, cost, time }: TableEntryType) => {
    const dnvbluedark = '#002A3E';
    const dnvbluelight = '#8CD3EF';
    const dnvgreendark = 'rgb(63, 156, 53)';
    const dnvgreenlight = '#65B33A';
    const { dispatch } = useContext(ShipContext);
    return (
        <Tr
            onClick={() => dispatch({ type: DispatchActions.SELECT_SHIP, payload: ship })}
            _hover={{ cursor: 'pointer' }}
        >
            <Td>{`${vesselName} ${recommended ? '🌎' : ''}`}</Td>
            <Td>
                <Flex>
                    {`${co2.toFixed(2)} tonnes Co2`}
                    {co2 > 5000 ? (
                        <AiFillWarning color="red" />
                    ) : co2 > 4500 ? (
                        <AiOutlineExclamationCircle color="orange" />
                    ) : (
                        <AiFillCheckCircle color={dnvgreenlight} />
                    )}
                </Flex>
            </Td>
            <Td>
                <Flex>
                    {formatMoney(cost)}{' '}
                    {cost > 60000000 ? (
                        <AiFillWarning color="red" />
                    ) : cost > 58000000 ? (
                        <AiOutlineExclamationCircle color="orange" />
                    ) : (
                        <AiFillCheckCircle color={dnvgreenlight} />
                    )}
                </Flex>
            </Td>
            <Td>
                <Flex>
                    {`${time.toFixed(0)} hours`}{' '}
                    {time > 500 ? (
                        <AiFillWarning color="red" />
                    ) : time > 490 ? (
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
