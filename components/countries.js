import { SimpleGrid, Box, Heading, Text } from "@chakra-ui/core";
import {
  AiOutlineFrown,
  AiOutlineSmile,
} from "react-icons/ai";
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
          <Text fontSize='md' color="gray.500" lineHeight={1.7}>
            <Box as={item.deaths == 0 ? AiOutlineSmile : AiOutlineFrown} size="18px" display="inline" mr={1} />
            {item.deaths == 1 ? '1 death' : `${item.deaths.format()} deaths`}{" "}
          </Text>
          <Text fontSize='md' color="gray.500" lineHeight={1.7}>
            <Box as={AiOutlineSmile} size="18px" display="inline" mr={1} />
            {item.recovered.format()} recovered 
          </Text>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default Countries;
