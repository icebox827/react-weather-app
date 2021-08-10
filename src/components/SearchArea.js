import React from 'react';
import { Flex } from '@chakra-ui/react';

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
        <input 
          type="submit"
          color="white" 
          bg="blue.500"
          className="btn"
          value="Search"
        />
      </form>
    </Flex>
  )
}

export default SearchArea;