import * as React from 'react';
import { Box, Stack, StackDivider, Image, Text, Grid, Flex, Link } from '@chakra-ui/react';
import { ButtonGroup, ButtonGroupProps, IconButton } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => (
    <Box as="footer" bg="#002A3E" mx="auto" py="12" px={{ base: '4', md: '8' }}>
        <Stack spacing="10" divider={<StackDivider />}>
            <Stack color="#8CD3EF" direction={{ base: 'column', lg: 'row' }} spacing={{ base: '10', lg: '28' }}>
                <Image src="/sharkcody.png" w={150} />
                <Text>&copy; Eco Shipbroker AS</Text>
            </Stack>

            <Stack direction={{ base: 'column-reverse', md: 'row' }} justifyContent="space-between" alignItems="center">
                <Flex w="100%" justifyContent="space-around">
                    <Box>
                        <IconButton
                            color="#8CD3EF"
                            bg="002A3E"
                            as="a"
                            href="#"
                            aria-label="LinkedIn"
                            icon={<FaLinkedin fontSize="20px" />}
                        />
                        <Link
                            display="inline"
                            color="#8CD3EF"
                            href="https://www.linkedin.com/in/andreas-winther-moen-a1a666a2/"
                        >
                            Andreas Winther Moen
                        </Link>
                    </Box>
                    <Box>
                        <IconButton
                            color="#8CD3EF"
                            bg="002A3E"
                            as="a"
                            href="#"
                            aria-label="LinkedIn"
                            icon={<FaLinkedin fontSize="20px" />}
                        />
                        <Link
                            display="inline"
                            color="#8CD3EF"
                            href="https://www.linkedin.com/in/haakon-gunnarsli-8b329a14a/"
                        >
                            Haakon Gunnarsli
                        </Link>
                    </Box>
                    <Box>
                        <IconButton
                            color="#8CD3EF"
                            bg="002A3E"
                            as="a"
                            href="#"
                            aria-label="LinkedIn"
                            icon={<FaLinkedin fontSize="20px" />}
                        />
                        <Link display="inline" color="#8CD3EF" href="https://www.linkedin.com/in/brooks-jonathan/">
                            Jonathan Brooks
                        </Link>
                    </Box>
                    <Box>
                        <IconButton
                            color="#8CD3EF"
                            bg="002A3E"
                            as="a"
                            href="#"
                            aria-label="LinkedIn"
                            icon={<FaLinkedin fontSize="20px" />}
                        />
                        <Link
                            display="inline"
                            color="#8CD3EF"
                            href="https://www.linkedin.com/in/mads-nekkøy-47a8a6196/"
                        >
                            Mads Olsen Nekkøy
                        </Link>
                    </Box>
                    <Box>
                        <IconButton
                            color="#8CD3EF"
                            bg="002A3E"
                            as="a"
                            href="#"
                            aria-label="LinkedIn"
                            icon={<FaLinkedin fontSize="20px" />}
                        />
                        <Link display="inline" color="#8CD3EF" href="https://www.linkedin.com/in/mariuslerstein/">
                            Marius Lerstein
                        </Link>
                    </Box>
                </Flex>
            </Stack>
        </Stack>
    </Box>
);

export default Footer;
