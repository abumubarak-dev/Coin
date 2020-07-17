import React from 'react';
 import { Box,Text,Divider } from '@chakra-ui/core';
import Header from './components/Header';
import TableComponent from './components/Table.component';

const App=()=> {
  return (
    <Box bg="#1A202C" width='100vm' minHeight={"100vh"}>
    <Header/>
    <TableComponent/>
  

    </Box>
  );
}

export default App;
