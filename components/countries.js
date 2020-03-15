import { SimpleGrid, Box, Heading, Text } from "@chakra-ui/core";

const Countries = props => {
  return (
    <SimpleGrid columns={[2, 4, 6]} spacing={6} p={6} mt={4}>
      {props.data.map((item, index) => (
        <Box key={index}>
          <Heading size="md" mb={2}>
            <Text color="red.500" fontWeight="normal" as="span">
              {item.confirmed.format()}
            </Text>{" "}
            {item.location}
          </Heading>
          <Text color="gray.600">
            Deaths: <b>{item.deaths.format()}</b>
          </Text>
          <Text color="gray.600">
            Recovered: <b>{item.recovered.format()}</b>
          </Text>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default Countries;
