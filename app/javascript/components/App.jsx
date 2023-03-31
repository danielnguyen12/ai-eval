import React, { useState } from 'react';
import { Container, Box } from '@chakra-ui/react';
import Header from './Header';
import TextInput from './TextInput';
import Footer from './Footer';

function App() {
  const evaluateWriting = (prompt, writingSample) => {
    console.log(prompt, writingSample);
  };

  return (
    <Box bg="green.600" color="white" height="100vh" paddingTop={130}>
      <Container maxW="3xl" centerContent>
        <Header />
        <TextInput evaluateWriting={evaluateWriting} />
        <Footer />
      </Container>
    </Box>
  );
}

export default App;
