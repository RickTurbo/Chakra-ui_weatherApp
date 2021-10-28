import {
  Box,
  Center,
  Flex,
  Heading,
  Stack,
  Wrap,
  WrapItem,
} from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import Weather from "./components/Weather";

function App() {
  const [isNotSmallerScreen] = useMediaQuery(
    "(min-width:800px)");

  return (
    <Flex alignItems="center" justifyContent="center" wrap="flex-wrap" direction={isNotSmallerScreen ? "row" : "column"} mt={20}>
      <Box>
        <Weather city_name="Paris" />
      </Box>
      <Box>
        <Weather city_name="Los Angeles" />
      </Box>
    </Flex>
  );
}

export default App;
