import React from 'react';
import { Box, Text,Divider } from '@chakra-ui/core';
import TableItemComponents from './Table.item.components';

const TableListComponent=(props)=>{


  return(


  <Box>
    
      {props.currency && props.currency.map(item=>{

        return(
          item.items.map((currencyVal,index)=> (
            
            <TableItemComponents key={index} currency={currencyVal}/>
            ///console.log(index)
            )

        )
       

        )})
    }
 
  </Box>


  )

  }


export default TableListComponent;