import {
  Box,
  Flex,
  IconButton,
  Heading,
  useColorMode
} from "@chakra-ui/core";

const Layout = ({children}) => {
  const {
    colorMode,
    toggleColorMode
  } = useColorMode();
  const bg = {
    light: "white",
    dark: "gray.800"
  };
  const color = {
    light: "black",
    dark: "white"
  };
  return (
    <Box bg={bg[colorMode]} color={color[colorMode]}>
      <Flex alignItems="center" justifyContent="space-between" px={8}>
        <Heading mx="auto" textAlign="center" my={8}>
          COVID-19 Stats 🦠
        </Heading>
        <IconButton
          aria-label={`Switch to ${
            colorMode === "light" ? "dark" : "light"
          } mode`}
          variant="ghost"
          color="current"
          ml="2"
          fontSize="20px"
          onClick={toggleColorMode}
          icon={colorMode === "light" ? "moon" : "sun"}
        />
      </Flex>
      {children}
    </Box>
  );
};

export default Layout;
