  import TableHeadComponent from './Table.head.component';
import TableDataComponent from './Table.data.components';
import { Box } from '@chakra-ui/core';
import React,{ useState, useEffect } from 'react';



const TableComponent=()=>{

    const [currency,setCurrency]=useState(0);
 

  useEffect(()=>{
//    https://api.udilia.com/coins/v1/cryptocurrencies?page=1&perPage=20
    fetch(`https://api.udilia.com/coins/v1/cryptocurrencies?page=1&perPage=20`)
    .then(res => res.json())
    .then(res => {
        console.log(res)
           setCurrency(
             [{
                 items:res.currencies
             }
      ])

  })
  console.log(currency);

},[currency])

    return(
        <Box>
        
         <TableHeadComponent/>
         <TableDataComponent currency={currency}/>
        </Box>
    )
}

export default TableComponent;