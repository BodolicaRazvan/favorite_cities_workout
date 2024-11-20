import { Box, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box p={5} textAlign="center" mt={4}>
      <Text fontSize="3xl" fontWeight="bold" color="white">
        Welcome to favorite cities 🌟
      </Text>
      <Text mt={4} fontSize="lg" color="whiteAlpha.800">
        Discover, explore, and save the cities you love most.  
        Your next adventure begins here!
      </Text>
    </Box>
  );
}
