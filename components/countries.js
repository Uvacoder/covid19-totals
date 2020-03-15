import { SimpleGrid, Box, Heading, Text } from "@chakra-ui/core";
import Number from '../libs/format';

const Countries = props => {
  return (
    <SimpleGrid columns={[2, 4, 6]} spacing={8} p={6} mt={4}>
      {props.countries_list.map((item, index) => (
        <Box key={index}>
          <Heading size="md" mb={2}>
            <Text color="red.500" fontWeight="normal" as="span">
              {item.confirmed.format()}
            </Text>{" "}
            {item.location}
          </Heading>
          <Text fontSize='md' color="gray.500">
            Deaths: <b>{item.deaths.format()} {item.deaths < 1 ? '🎉' : ''}</b>
          </Text>
          <Text fontSize='md' color="gray.500">
            Recovered: <b>{item.recovered.format()}</b>
          </Text>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default Countries;
