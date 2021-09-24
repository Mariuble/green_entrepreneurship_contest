import react from 'react';
import { Box, Text, Select, Button, useControllableState } from '@chakra-ui/react';

type SearchType = {
    handleSearch: () => void;
};

const Search = ({ handleSearch }: SearchType) => {
    const [from, setFrom] = useControllableState<string>({ defaultValue: '' });
    const [to, setTo] = useControllableState<string>({ defaultValue: '' });

    return (
        <Box
            display="flex"
            flexDir="column"
            textAlign="center"
            width="60%"
            height="40%"
            borderRadius="15px"
            justifyContent="space-around"
        >
            <Text fontSize="82px">Eco Shipbrokers AS</Text>
            <Text fontSize="32px">Where do you want to go?</Text>
            <Box display="flex" justifyContent="space-around">
                <Select
                    variant="outline"
                    placeholder="FROM"
                    width="40%"
                    bg="#8CD3EF"
                    color="black"
                    onChange={(e) => setFrom(e.target.value)}
                >
                    <option value="ITTAR">🇮🇹 ITTAR</option>
                    <option value="USMSY">🇺🇸 USMSY</option>
                    <option value="CNZOS">🇨🇳 CNZOS</option>
                    <option value="CNJIN">🇨🇳 CNJIN</option>
                    <option value="DEHAM">🇩🇪 DEHAM</option>
                    <option value="ITBDS">🇮🇹 ITBDS</option>
                    <option value="CNTSN">🇨🇳 CNTSN</option>
                    <option value="ITPTO">🇮🇹 ITPTO</option>
                    <option value="CNZHA">🇨🇳 CNZHA</option>
                    <option value="DEBKE">🇩🇪 DEBKE</option>
                </Select>
                <Select
                    variant="outline"
                    placeholder="TO"
                    width="40%"
                    bg="#8CD3EF"
                    color="black"
                    onChange={(e) => setTo(e.target.value)}
                >
                    <option value="ITTAR">🇮🇹 ITTAR</option>
                    <option value="USMSY">🇺🇸 USMSY</option>
                    <option value="CNZOS">🇨🇳 CNZOS</option>
                    <option value="CNJIN">🇨🇳 CNJIN</option>
                    <option value="DEHAM">🇩🇪 DEHAM</option>
                    <option value="ITBDS">🇮🇹 ITBDS</option>
                    <option value="CNTSN">🇨🇳 CNTSN</option>
                    <option value="ITPTO">🇮🇹 ITPTO</option>
                    <option value="CNZHA">🇨🇳 CNZHA</option>
                    <option value="DEBKE">🇩🇪 DEBKE</option>
                </Select>
            </Box>
            <Button colorScheme="blue" disabled={from === '' || to === ''} onClick={handleSearch}>
                Search
            </Button>
        </Box>
    );
};

export default Search;
