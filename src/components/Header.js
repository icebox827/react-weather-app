import React from 'react';
import { Flex, Box, Heading, Center, Spacer, Menu, MenuItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Flex >
      <Menu>
      <Box w="100%" h="50" bg="blue.500" >
        <Center>
          <Heading color="white">
            Captain Meteo
          </Heading>
        </Center>
      </Box>
      <Spacer />
      <Box w="100%" h="50" bg="blue.500" p="2">
        <MenuItem
          className="social"
          color="white"
        >
         
        </MenuItem>
        <MenuItem
          className="social"
          color="white"
        >
          
        </MenuItem>
        <MenuItem
          className="social"
          color="white"
        >
         
        </MenuItem>
        </Box>
      </Menu>
    </Flex>
  )
}

export default Header;