import { Box, Flex, Text, Button, VStack, Heading, Container, Spacer } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';

const Index = () => {
  return (
    <Box>
      <Flex as="nav" bg="gray.100" p={4} align="center">
        <Heading size="md" ml={5}>GPT Engineer</Heading>
        <Spacer />
        <Button mr={5} onClick={() => console.log('Navigate to features')}>Features</Button>
        <Button mr={5} onClick={() => console.log('Navigate to testimonials')}>Testimonials</Button>
        <Button mr={5} onClick={() => console.log('Navigate to contact')}>Contact Us</Button>
      </Flex>
      <Container maxW="container.xl" centerContent>
        <VStack spacing={10} py={20}>
          <Heading as="h1" size="2xl" textAlign="center">Revolutionize Your Workflow with GPT Engineer</Heading>
          <Text fontSize="xl" textAlign="center">Integrate cutting-edge AI solutions into your projects effortlessly.</Text>
          <Button rightIcon={<FaArrowRight />} colorScheme="blue" size="lg">Get Started</Button>
        </VStack>
      </Container>
      <Box bg="blue.100" p={10}>
        <VStack spacing={8}>
          <Heading as="h2" size="xl">Features</Heading>
          <Flex direction={{ base: 'column', md: 'row' }} justify="space-around" w="full">
            <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
              <Heading size="md">Feature 1</Heading>
              <Text mt={4}>Description of feature 1.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
              <Heading size="md">Feature 2</Heading>
              <Text mt={4}>Description of feature 2.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
              <Heading size="md">Feature 3</Heading>
              <Text mt={4}>Description of feature 3.</Text>
            </Box>
          </Flex>
        </VStack>
      </Box>
      <Box bg="gray.200" p={10}>
        <VStack spacing={8}>
          <Heading as="h2" size="xl">Testimonials</Heading>
          <Text fontSize="md">"Using GPT Engineer has transformed our development process!" - Company A</Text>
          <Text fontSize="md">"Absolutely essential for any tech company." - Company B</Text>
        </VStack>
      </Box>
      <Flex as="footer" bg="gray.300" p={4} justify="center">
        <Text>© 2023 GPT Engineer. All rights reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Index;