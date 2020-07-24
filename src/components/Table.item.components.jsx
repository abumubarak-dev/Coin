import React, { useEffect } from 'react';
import { Box, Text,Divider,StatHelpText,StatArrow } from '@chakra-ui/core';





export default function TableItemComponents(props){

  ///console.log(props);

  const {currency:{id,name,price,percentChange24h,marketCap}}=props
  
  return(

    <Box cursor="pointer">
    
        
    <Box d="flex" 
     height="39px"
    mt="5"
    p={2} 
    color="#fff" 
    justifyContent="space-between">
    <Text
    fontSize="lg"       
      ml="80px"
    width="15%">
    {name}
    </Text>
    <Text fontSize="lg">
    {`$ ${price}` }
    </Text>
    <Text fontSize="lg" mr={5}>{`$${marketCap}`}</Text>
    <Text textAlign="center">{percentChange24h}</Text>
    
     
    </Box>

 
       
     <Divider height="1px"mt="5" borderColor="#171923" bg="#171923" />
     
      
     </Box>
    
    )
}
