import React, { Children, useContext } from 'react';
import { Td, Tr, Thead, TableCaption, Table, Th, Tbody } from '@chakra-ui/react';
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

interface Props {}

const Vessel = (props: React.PropsWithChildren<Props>) => {
    const { dispatch } = useContext(ShipContext);
    return (
        <Table variant="simple">
            <Thead>
                <Tr>
                    <Th>Name</Th>
                    <Th>Emisson</Th>
                    <Th>Price</Th>
                    <Th>Total Time</Th>
                </Tr>
            </Thead>
            <Tbody>{props.children}</Tbody>
        </Table>
    );
};

export default Vessel;
