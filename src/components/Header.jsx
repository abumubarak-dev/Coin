import React, { useState, useEffect } from 'react';
import { Box, Text,Flex,Image,Heading,InputGroup,Divider,InputLeftElement,Input ,Icon, Stack} from '@chakra-ui/core';
import Autocomplete from 'react-autocomplete';

const Header =(props)=>{

   const {onSearchChange,autoCompleteValue}=props;
   const[search,setSearch]= useState("");
   const[suggestion,setSuggestion]=useState("")
   const[value,setValue]=useState("")

     

   autoCompleteValue&&autoCompleteValue.map(i=>{
      setSuggestion(i)
      //console.log(i)           

      
   })


   useEffect(
      ()=>{

      onSearchChange(search)

   },[search])

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

                <Stack width="59%" >
                
              

                <InputGroup>

               
            
               <InputLeftElement 

               children={<Icon name="search" color="black.300" />} />

               <Input

               w="100%"
               bg="#272D38"

               borderColor="#272D38"

               color="white"

               type="text"

               name="search"

               onChange={(e)=>setSearch(e.target.value)}

               size="md"

               placeholder="Search Currency  " />
 
             </InputGroup> 


 
              
                 <Box 
 mt={7}
 pos="fixed" bg="#272D38" height="90px" w="50%" zIndex={2}>
 
                
                </Box>  
                </Stack>
                

               

        </Box>

        
 
        </Box>
       )
}

export default Header;