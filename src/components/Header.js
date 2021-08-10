import React from 'react';
import { Flex, Box, Heading, Center, Spacer, Menu, MenuItem, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
  return (
    <Flex >
      <Box w="100%" h="50" bg="blue.500" >
        <Center>
          <Heading color="white">
            Captain Meteo
          </Heading>
        </Center>
      </Box>
      <Spacer />
      <Box w="100%" h="50" bg="blue.500" p="2">
        <Text fontSize="lg" color="white" noOfLines={[1, 2, 3]} >
          { ` Today is ${(new Date())} `}
        </Text>
      </Box>
    </Flex>
  )
}

export default Header;