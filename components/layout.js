import {
  Box,
  Flex,
  IconButton,
  Heading,
  Link,
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
      <Flex alignItems="center" px={8}>
        <Heading mx='auto' my={8}>
           🦠 COVID-19 Stats
        </Heading>
        <Link href="https://stopcorona.org/" isExternal>
          <IconButton
            variant="ghost"
            color="gray.500"
            fontSize="18px"
            icon="question"
            mr="2"
            href="https://stopcorona.org/"
          />
        </Link>
        <IconButton
          aria-label={`Switch to ${
            colorMode === "light" ? "dark" : "light"
          } mode`}
          variant="ghost"
          color="gray.500"
          fontSize="18px"
          onClick={toggleColorMode}
          icon={colorMode === "light" ? "moon" : "sun"}
        />

      </Flex>
      {children}
    </Box>
  );
};

export default Layout;
