// components/Navbar.js
import { Box, Flex, Text, Link } from '@chakra-ui/react';

export default function Navbar() {
  return (
    <Box bg="blue.700" p={4}>
      <Flex justify="center" align="center">
        <Text color="gray.200" fontSize="xl" fontWeight="bold" mx={4}>
          Favorite Cities
        </Text>
        <Link
          href="/"
          color="gray.300"
          mx={4}
          _hover={{
            color: 'blue.300',
          }}
        >
          Home
        </Link>
        <Link
          href="/search"
          color="gray.300"
          mx={4}
          _hover={{
            color: 'blue.300',
          }}
        >
          Search for cities
        </Link>
        <Link
          href="/favorites"
          color="gray.300"
          mx={4}
          _hover={{
            color: 'blue.300',
          }}
        >
          Favorites cities
        </Link>
      </Flex>
    </Box>
  );
}
