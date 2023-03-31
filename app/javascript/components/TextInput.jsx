import React, { useState } from 'react';
import { Textarea, Button, useToast } from '@chakra-ui/react';

const TextInput = ({ evaluateWriting }) => {
  const [prompt, setPrompt] = useState('');
  const [studentResponse, setStudentResponse] = useState('');

  const toast = useToast();

  const submit = () => {
    if (prompt.length < 11 || studentResponse.length < 11) {
      toast({
        title: 'Prompt & Student Response',
        description: 'must be at least 10 characters',
        status: 'error',
        duration: 3000,
        isClosable: false,
      });
    } else {
      evaluateWriting(prompt, studentResponse);
    }
  };

  return (
    <>
      <Textarea
        bg="whiteAlpha.900"
        placeholder="Prompt"
        color="black"
        padding={4}
        marginTop={6}
        height={100}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <Textarea
        bg="whiteAlpha.900"
        placeholder="Student Response"
        color="black"
        padding={4}
        marginTop={1}
        height={200}
        value={studentResponse}
        onChange={(e) => setStudentResponse(e.target.value)}
      />

      <Button
        bg="green.500"
        color="white"
        marginTop={4}
        width="100%"
        _hover={{ bg: 'green.700' }}
        onClick={submit}
      >
        Evaluate
      </Button>
    </>
  );
};

export default TextInput;