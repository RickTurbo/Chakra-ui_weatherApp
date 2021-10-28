import { Box, Flex, Text } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";

import React, { useState } from "react";

import { useEffect } from "react";
import dayjs from "dayjs";

function Weather({city_name, color_name, hover_name}) {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiUrl = process.env.REACT_APP_OW_API_URL;
  const apiKye = process.env.REACT_APP_OW_API_KEY;

  useEffect(() => {
    fetch(`${apiUrl}/weather/?q=${city_name}&APPID=${apiKye}&units=metric`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      }).finally(() => {
        setLoading(false);
      });
  }, [city_name]);

  if (loading) {
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );
  }

  return (
    <Box p="4">
      <Box
        w={96}
        h={56}
        
        borderRadius="lg"
        boxShadow="2xl"
        _hover={hover_name}
        
        bgGradient={color_name}
        color="white"
      >
        <Box w="full" px="8" pt="6">
          <Flex justifyContent="space-between">
            <Box>
              <Text fontWeight="light">City Name</Text>
              <Text fontSize="lg" fontWeight="medium">
                {data.name}
              </Text>
            </Box>
            <Box>
              {" "}
              <img
                src={`${process.env.REACT_APP_OW_ICON_URL}/${data.weather[0].icon}.png`}
                alt={data.weather[0].description}
              />
            </Box>
          </Flex>
          <Box pt="2">
            <Text fontWeight="light">Weather Condition</Text>
            <Text fontSize="lg" fontWeight="medium">
              {data.weather[0].main}
            </Text>
          </Box>
          <Box pt="6" pr="6">
            <Flex justifyContent="space-between">
              <Box>
                <Text fontWeight="light" fontSize="xs">
                  Date
                </Text>
                <Text fontWeight="bold" fontSize="sm">
                  {dayjs(data.ts).format("YYYY-MM-DD")}
                </Text>
              </Box>
              <Box>
                <Text fontWeight="light" fontSize="xs">
                  Temperature
                </Text>
                <Box fontWeight="bold" fontSize="sm">
                  {data.main.temp}°C
                </Box>
              </Box>
              <Box>
                <Text fontWeight="light" fontSize="xs">
                  Humidity
                </Text>
                <Text fontWeight="bold" fontSize="sm">
                  {data.main.humidity}%
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Weather;
