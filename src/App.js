import { Box, Center, Flex, Heading, Wrap, WrapItem } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { buildQueries } from "@testing-library/dom";

import Weather from "./components/Weather";

function App() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");

  return (
    <>
    <Heading size='3xl' textAlign='center' fontWeight="bold" mt={20}>Soccer Weather</Heading>
    <Flex
      alignItems="center"
      justifyContent="center"
      flexWrap='wrap'
      direction={isNotSmallerScreen ? "row" : "column"}
      mt={20}
    >
      
      <Box alignSelf="center">
        <Weather
          city_name="Tokyo"
          color_name="linear(to-r,blue.500, blue.200 )"
          hover_name={{ bg: "blue.400" }}
        />
      </Box>
      <Box>
        <Weather
          city_name="Roma"
          color_name="linear(to-r,yellow.500, yellow.200 )"
          hover_name={{ bg: "yellow.400" }}
        />
      </Box>
      <Box>
        <Weather
          city_name="Madrid"
          color_name="linear(to-r,red.500, red.200 )"
          hover_name={{ bg: "red.400" }}
        />
      </Box>
      <Box>
        <Weather
          city_name="London"
          color_name="linear(to-r,green.500, blue.200 )"
          hover_name={{ bg: "green.400" }}
        />
      </Box>
      <Box>
        <Weather
          city_name="Paris"
          color_name="linear(to-r,purple.500, red.200 )"
          hover_name={{ bg: "purple.400" }}
        />
      </Box>
      <Box>
        <Weather
          city_name="Berlin"
          color_name="linear(to-r,teal.500, teal.200 )"
          hover_name={{ bg: "teal.400" }}
        />
      </Box>
      
      
    </Flex>
  </>
  );
 
}

export default App;
