import fetch from "isomorphic-unfetch";
import { Heading } from "@chakra-ui/core";

import Stats from "../components/stats";
import Countries from "../components/countries";
import Footer from "../components/footer";

Number.prototype.format = function(n, x) {
  var re = "\\d(?=(\\d{" + (x || 3) + "})+" + (n > 0 ? "\\." : "$") + ")";
  return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, "g"), "$&,");
};

const Home = props => {
  return (
    <>
      <Heading textAlign="center" my={8}>
        COVID-19 Stats 🦠
      </Heading>
      <Stats data={props.total.data} />
      <Countries data={props.current.data} />
      <Footer />
    </>
  );
};

Home.getInitialProps = async function() {
  console.log("Fetching data...");

  const query_current = await fetch(
    "https://covid2019-api.herokuapp.com/v2/current"
  );
  const current = await query_current.json();

  const query_total = await fetch(
    "https://covid2019-api.herokuapp.com/v2/total"
  );
  const total = await query_total.json();

  return {
    current: current,
    total: total
  };
};

export default Home;
