import { Box, Flex, Text, VStack, Heading, Image, Button } from '@chakra-ui/react';

const AboutUs = () => {
  return (
    <Box>
      <Flex as="nav" bg="gray.100" p={4} align="center">
        <Heading size="md" ml={5}>GPT Engineer</Heading>
        <Button mr={5} onClick={() => console.log('Navigate to features')}>Features</Button>
        <Button mr={5} onClick={() => console.log('Navigate to testimonials')}>Testimonials</Button>
        <Button mr={5} onClick={() => console.log('Navigate to contact')}>Contact Us</Button>
      </Flex>
      <VStack spacing={10} py={20}>
        <Heading as="h1" size="2xl" textAlign="center">About Us</Heading>
        <Text fontSize="xl" textAlign="center">Learn more about our company and team.</Text>
      </VStack>
      <Box p={10}>
        <Heading as="h2" size="lg">Our History</Heading>
        <Text mt={4}>GPT Engineer was founded in 2021 with the aim of integrating AI into everyday business processes.</Text>
      </Box>
      <Box p={10}>
        <Heading as="h2" size="lg">Our Mission</Heading>
        <Text mt={4}>To empower businesses by providing easy-to-use AI tools that enhance productivity and innovation.</Text>
      </Box>
      <Box p={10}>
        <Heading as="h2" size="lg">Our Team</Heading>
        <Flex justify="space-around" mt={4}>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Image src="/images/team-member-1.jpg" alt="Team Member 1" borderRadius="full" boxSize="150px" mb={4} />
            <Text fontWeight="bold">Jane Doe</Text>
            <Text>CEO</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Image src="/images/team-member-2.jpg" alt="Team Member 2" borderRadius="full" boxSize="150px" mb={4} />
            <Text fontWeight="bold">John Smith</Text>
            <Text>CTO</Text>
          </Box>
        </Flex>
      </Box>
      <Box p={10}>
        <Heading as="h2" size="lg">Awards & Recognitions</Heading>
        <Text mt={4}>Winner of the 2022 AI Innovation Award.</Text>
      </Box>
    </Box>
  );
};

export default AboutUs;