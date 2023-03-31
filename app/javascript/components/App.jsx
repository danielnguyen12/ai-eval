import React, { useState } from 'react';
import { Container, Box } from '@chakra-ui/react';
import Header from './Header';
import TextInput from './TextInput';
import Footer from './Footer';

function App() {
  return (
    <Box bg="green.600" color="white" height="100vh" paddingTop={130}>
      <Container maxW="3xl" centerContent>
        <Header />
        <TextInput />
        <Footer />
      </Container>
    </Box>
  );
}

export default App;
