import React from 'react';
import { Flex, Button, Center } from '@chakra-ui/react';

function SearchArea() {
  return (
    <Flex justify="center">
      <form className="search-box">
        <input 
          type="text"
          className="search-bar" 
          name="city" 
          id="city" 
          placeholder="Please enter the city here!" 
        />
        <br />
        <Button color="white" bg="blue.500">Search</Button>
      </form>
    </Flex>
  )
}

export default SearchArea;