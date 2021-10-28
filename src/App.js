import {
  Box,
  Center,
  Flex,
  Heading,
  Spacer,
  Stack,
  Wrap,
  WrapItem,
} from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { buildQueries } from "@testing-library/dom";
import Weather from "./components/Weather";

function App() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      wrap="flex-wrap"
      direction={isNotSmallerScreen ? "row" : "column"}
      mt={20}
    >
      <Box>
        <Weather city_name="Tokyo" color_name="linear(to-r,blue.500, blue.200 )" hover_name={{bg:'blue.400'}}/>
      </Box>
      <Box>
        <Weather city_name="Los Angeles" color_name="linear(to-r,red.500, red.200 )" hover_name={{bg:'red.400'}}/>
      </Box>
    </Flex>
  );
}

export default App;
