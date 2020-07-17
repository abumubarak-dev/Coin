import React  from 'react';
import { Box,Text } from '@chakra-ui/core';

const TableHeadComponent= ()=>{

  
    return (

        
    <Box d="flex" 
    bg="#171923"
    height="39px"
    mt="5"
    p={2} 
    color="#fff" 
    justifyContent="space-between">
    <Text       
      ml="80px"
    width="15%">
    Cryptocurrency
    </Text>
    <Text>
    Price
    </Text>
    <Text>
    Market Cap
    </Text>
    <Text mr="50px">
    24H Change
    </Text>
    </Box>


    )
}

export default TableHeadComponent;