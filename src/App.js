import React from 'react';
 import { Box,Text,Divider } from '@chakra-ui/core';
import Header from './components/Header';
import TableComponent from './components/Table.component';

const App=()=> {
  return (
    <Box  width='100vm' minHeight={"100vh"}>
    <TableComponent/>
  

    </Box>
  );
}

export default App;
