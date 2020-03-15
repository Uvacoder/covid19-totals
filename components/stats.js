import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Box
} from "@chakra-ui/core";

import CountUp from "react-countup";

const Stats = props => {
  return (
    <Box
      mx="auto"
      textAlign="center"
      textTransform="uppercase"
      borderTop="1px"
      borderBottom="1px"
      borderColor="gray.200"
    >
      <StatGroup p={5}>
        <Stat>
          <StatNumber fontSize="4xl" fontWeight={800}>
            <CountUp separator="," end={props.data.confirmed} />
          </StatNumber>
          <StatLabel color="gray.500" fontSize="md">
            Confirmed 🤒
          </StatLabel>
        </Stat>
        <Stat>
          <StatNumber fontSize="4xl" fontWeight={800}>
            <CountUp separator="," end={props.data.deaths} />
          </StatNumber>
          <StatLabel color="gray.500" fontSize="md">
            Deaths 😵
          </StatLabel>
        </Stat>
        <Stat>
          <StatNumber fontSize="4xl" fontWeight={800}>
            <CountUp separator="," end={props.data.recovered} />
          </StatNumber>
          <StatLabel color="gray.500" fontSize="md">
            Recovered 🙂
          </StatLabel>
        </Stat>
      </StatGroup>
    </Box>
  );
};

export default Stats;
