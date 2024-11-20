// pages/favorites.js
import { Box, Text } from '@chakra-ui/react';

export default function Favorites() {
  return (
    <Box p={5} textAlign="center" mt={4}>
      <Text fontSize="3xl" fontWeight="bold" color="white">
        Your dream destinations 🌍
      </Text>
      <Text mt={4} fontSize="lg" color="whiteAlpha.800">
        Explore the cities you’ve fallen in love with!  
        Your personalized list of favorites is just a click away. 
      </Text>
    </Box>
  );
}
