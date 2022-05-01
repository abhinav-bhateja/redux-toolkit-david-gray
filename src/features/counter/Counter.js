import React, { useState } from 'react';
import { Button, Heading, HStack, Input, VStack } from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, reset } from './counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(0)

  const addValue = Number(amount) || 0;

  const resetAll = () => {
    setAmount(0);
    dispatch(reset());
  }

  return (
    <VStack as="section" spacing={12} border="1px solid rgb(203, 213, 224)" p={16} borderRadius={16} boxShadow="lg">
      <Heading fontSize="6xl" as="h1">
        {count}
      </Heading>
      <HStack spacing={12}>
        <Button size="lg" onClick={() => dispatch(increment())}>+</Button>
        <Button size="lg" onClick={() => dispatch(decrement())}>-</Button>
      </HStack>
      <Button size="lg" onClick={resetAll}>Reset</Button>
      <Input textAlign="center" w="300px" value={amount} onChange={(e) => {
        const { value } = e.target;
        return setAmount(value);
      }} />
      <Button size="lg" onClick={() => dispatch(incrementByAmount(addValue))}>Add</Button>
    </VStack>
  )
}

export default Counter;