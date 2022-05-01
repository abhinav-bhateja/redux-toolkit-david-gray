import React from 'react';
import Counter from './features/counter/Counter';
import { Flex } from '@chakra-ui/react';

const App = () => {
  return (
    <Flex justify="center" align="center" minH="100vh">
      <Counter />
    </Flex>
  )
}

export default App;