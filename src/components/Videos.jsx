import { Heading, Stack, VStack, Text } from '@chakra-ui/react';
import React from 'react';

const Videos = () => {
  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
        <video
          controls
          controlsList="nodownload"
          src=""
          style={{ width: '100%' }}
        ></video>
        <VStack>
            <Heading>Sample Video 1</Heading>
            <Text>This is sample video</Text>
        </VStack>
      </VStack>
      <VStack width={["full","xl"]}>
      
      </VStack>
    </Stack>
  );
};

export default Videos;
