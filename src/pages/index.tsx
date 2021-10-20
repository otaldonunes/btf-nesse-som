import { Flex, Text } from '@chakra-ui/react';
// import { useSomething } from '@hooks/useSomething'; //React Query/Axios Hook Example

export default function Home() {
  // const { data, isLoading, isFetching, error } = useSomething();

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Text>Boilerplate (Next.js + ChakraUI + React Query + Axios)</Text>
    </Flex>
  );
}
