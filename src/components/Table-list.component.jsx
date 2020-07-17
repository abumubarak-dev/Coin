import React from 'react';
import { Box, Text,Divider } from '@chakra-ui/core';
import TableItemComponents from './Table.item.components';

const TableListComponent=(props)=>(

  <Box>
    
      {props.currency && props.currency.map(item=>{

        item.items.map(currency=> {
       console.log(currency.rank);
          return(
            <b></b>
            // <TableItemComponents currency={currency.id}/>
          )
        }

        )})
    }

  </Box>

)


export default TableListComponent;