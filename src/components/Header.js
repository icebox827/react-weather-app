import React from 'react';
import { Flex, Box, Heading, Center, Spacer, Menu, MenuItem } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
          <FontAwesomeIcon icon="github" />
        </MenuItem>
        <MenuItem
          className="social"
          color="white"
        >
          <FontAwesomeIcon icon="linkedin" />
        </MenuItem>
        <MenuItem
          className="social"
          color="white"
        >
         <FontAwesomeIcon icon="angellist" />
        </MenuItem>
        </Box>
      </Menu>
    </Flex>
  )
}

export default Header;