import react, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Search from './Search';

const Landing = () => {
    const [animate, setAnimate] = useState({});

    const handleSearch = () => {
        document.getElementById('vessel')?.scrollIntoView();
    };

    return (
        <Box
            width="100%"
            height="100%"
            color="white"
            backgroundImage="/sexyShipping.jpg"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Search handleSearch={handleSearch} />
        </Box>
    );
};

export default Landing;
