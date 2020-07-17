import React from 'react';
import { Box, Text,Divider } from '@chakra-ui/core';


const TableDataComponent=( props)=>{



   
    return(

    

      <Box cursor="pointer">
        <Box d="flex" 
        mt="5"
       p={2} 
       color="#fff" 
       justifyContent="space-between">
       <Text       
         ml="70px"
         width="15%"  >
       1 Bitcoin
       </Text> 
       <Text>
       $ 8,376.36
       </Text>
       <Text>
        {props.items}
       </Text>
       <Text mr="50px">
        -3.59%
       </Text>
       </Box>
       <Divider height="1px"mt="5" borderColor="#171923" bg="#171923" />
       </Box>

    )
}

export default TableDataComponent;