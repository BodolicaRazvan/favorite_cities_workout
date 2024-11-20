// pages/search.js
import { Box, Text } from '@chakra-ui/react';

export default function Search() {
  return (
    <Box p={5} textAlign="center" mt={4}>
      <Text fontSize="3xl" fontWeight="bold" color="white">
        Find your next adventure 🗺️
      </Text>
      <Text mt={4} fontSize="lg" color="whiteAlpha.800">
        Search for cities and uncover their hidden gems.  
        Your journey starts with a single search!
      </Text>
    </Box>
  );
}
