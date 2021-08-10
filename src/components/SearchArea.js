import React from 'react';
import { Flex, Button } from '@chakra-ui/react';

function SearchArea() {
  return (
    <Flex>
      <main>
        <form className="search-box">
          <input 
            type="text"
            className="search-bar" 
            name="city" 
            id="city" 
            placeholder="Please enter the city here!" 
          />
          <Button>Search</Button>
        </form>
      </main>
    </Flex>
  )
}

export default SearchArea;