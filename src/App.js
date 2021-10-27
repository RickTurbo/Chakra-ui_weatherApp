import { Box, Center, Flex, Heading, Stack } from "@chakra-ui/layout";
import Weather from "./components/Weather";

function App() {
  return (
    <Flex alignItems="center" justifyContent="center">
      <Box mt={40}>
        <Weather />
      </Box>
    </Flex>
  );
}

export default App;
