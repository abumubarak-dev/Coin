import React from 'react';
import { Box, Flex,Image,Heading,InputGroup,Divider,InputLeftElement,Input ,Icon} from '@chakra-ui/core';

const Header =()=>{

    return(
        <Box>
           <Box d="flex"    justifyContent="space-between">

        <Flex width="35%" mt="3">
        <Image
        ml="80px"
        mt="10px"
        size="60px"
        src="coin_logo.svg"/>
               
               <Box ml="10px" color="white">
                <Heading fontSize="25px" mt="28px" >
                   Coin
               </Heading> 
               </Box>
               

                </Flex>

                <Flex   width="59%" mt="8">
                <InputGroup>
               <InputLeftElement 
               children={<Icon name="search" color="black.300" />} />
               <Input
               bg="#272D38"
               borderColor="#272D38"
               color="white"
               type="text"
               variant="filled"
               size="md"
               placeholder="Search Currency  " />

             </InputGroup> 


                </Flex>

        </Box>
 
        </Box>
       )
}

export default Header;