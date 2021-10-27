import { Box, Flex, Text } from "@chakra-ui/layout";

import React from "react";

function Weather() {
  return (
    <Box p="4">
      <Box
        w={96}
        h={56}
        bg="blue.500"
        borderRadius="lg"
        boxShadow="2xl"
        _hover={{ bg: "blue.400" }}
        bgGradient="linear(to-r,blue.500, blue.200 )"
        color="white"
      >
        <Box w="full" px="8" pt="6">
          <Flex justifyContent="space-between">
            <Box>
              <Text fontWeight="light">City Name</Text>
              <Text fontSize="lg" fontWeight="medium">
                Tokyo
              </Text>
            </Box>
            <Box>画像</Box>
          </Flex>
          <Box pt="2">
            <Text fontWeight="light">Weather Condition</Text>
            <Text fontSize="lg" fontWeight="medium">
              Cloudy
            </Text>
          </Box>
          <Box pt="6" pr="6">
            <Flex justifyContent="space-between">
              <Box>
                <Text fontWeight='light' fontSize='xs'>Date</Text>
                <Text fontWeight='bold' fontSize='sm'>2021-10-27</Text>
              </Box>
              <Box>
                <Text fontWeight='light' fontSize='xs'>Temperature</Text>
                <Box fontWeight='bold' fontSize='sm'>20℃</Box>
              </Box>
              <Box>
                <Text fontWeight='light' fontSize='xs'>Humidity</Text>
                <Text fontWeight='bold' fontSize='sm'>40%</Text>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Weather;