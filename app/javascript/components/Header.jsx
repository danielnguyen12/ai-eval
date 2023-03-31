import React from 'react';
import { Heading, Image, Text } from '@chakra-ui/react';
import logo from '../assets/light-bulb.svg';

function Header() {
  return (
    <>
      <Image src={logo} alt="logo" width={100} marginBottom="1rem" />
      <Heading color="white" marginBottom="1rem">
        Writing Evaluator
      </Heading>
      <Text fontSize={25} textAlign="center">
        This tool is intended to help teachers efficiently evaluate the quality
        of student writing. Paste in the prompt and student response below.
        We'll handle the rest for you.
      </Text>
    </>
  );
}

export default Header;
