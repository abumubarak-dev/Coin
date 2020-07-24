  import TableHeadComponent from './Table.head.component';
import TableListComponent from './Table-list.component';
import { Box } from '@chakra-ui/core';
import React,{ useState, useEffect } from 'react';
import Header from './Header';



const TableComponent=()=>{

    const [currency,setCurrency]=useState([]);
    const[search,setSearch]= useState("");
    const[autoComplete,setAutoComplete]= useState("");

    useEffect(()=>{
      if(search){
        fetch(` https://api.udilia.com/coins/v1/autocomplete?searchQuery=${search}`)
      .then(res => res.json())
      .then(res => {
          setAutoComplete(res.slice(0,5))
  
    })
      }
      
      

    },[search])

  useEffect(()=>{
//    https://api.udilia.com/coins/v1/cryptocurrencies?page=1&perPage=20
    fetch(`https://api.udilia.com/coins/v1/cryptocurrencies?page=1&perPage=20`)
    .then(res => res.json())
    .then(res => {
 
            setCurrency(
             [{
                 items:res.currencies
             }
      ])

  })

},[])

    return(
        <Box>
              <Header
              autoCompleteValue={autoComplete} 
              onSearchChange={setSearch}/>

         
         <TableHeadComponent />
         <TableListComponent currency={currency}/>
        </Box>
    )
}

export default TableComponent;