import { Box, Text, Link } from "@chakra-ui/core";

const Footer = () => {
  return (
    <>
      <Box p={5}>
        <Text textAlign="right">
          Made with{" "}
          <Text color="red.500" as="span">
            ♥
          </Text>{" "}
          in Germany 🇩🇪 by{" "}
          <Link href="//diego.earth" isExternal>
            Diego Peralta
          </Link>
        </Text>
        <Text textAlign="right">
          Hosted on{" "}
          <Link href="//zeit.co" isExternal>
            Zeit &#9650;
          </Link>{" "}
          and powered by{" "}
          <Link href="//nextjs.org" isExternal>
            Next.js
          </Link>{" "}
          &amp;{" "}
          <Link href="//chakra-ui.com" isExternal>
            Chakra UI
          </Link>
        </Text>
        <Text textAlign="right">
          <Link
            href="https://covid2019-api.herokuapp.com/v2/current"
            color="blue.600"
            isExternal
          >
            API Data Source
          </Link>
        </Text>
      </Box>
    </>
  );
};

export default Footer;
