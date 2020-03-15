import { Box, Text, Link } from "@chakra-ui/core";

const Footer = props => {
  return (
    <>
      <Box p={5} textAlign='right' lineHeight={1.8} fontSize='xs'>
        <Text>
          Made with{" "}
          <Text color="red.500" as="span">
            ♥
          </Text>{" "}
          in Germany 🇩🇪 by{" "}
          <Link href="//diego.earth" isExternal>
            Diego Peralta
          </Link>
        </Text>
        <Text>
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
        <Text>
          <Link
            href="https://covid2019-api.herokuapp.com/v2/current"
            color="blue.600"
            isExternal
          >
            API Data Source
          </Link>{" "}
          &mdash; Latest updated:{" "}
          <Text as="mark" px={2} py={1}>
            {props.latest_updated}
          </Text>
        </Text>
      </Box>
    </>
  );
};

export default Footer;
