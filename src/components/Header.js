import React from 'react';
import { Container, Grid, GridItem, Box } from "@chakra-ui/react"

function Header() {
  return (
    <Container>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <Box w="100%" h="10" bg="blue.500" >
          
        </Box>
        <Box w="100%" h="10" bg="blue.500" ></Box>
      </Grid>
    </Container>
  )
}

export default Header;