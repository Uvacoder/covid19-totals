import fetch from "isomorphic-unfetch";

import Layout from "../components/layout";
import Stats from "../components/stats";
import Countries from "../components/countries";
import Footer from "../components/footer";

Number.prototype.format = function(n, x) {
  var re = "\\d(?=(\\d{" + (x || 3) + "})+" + (n > 0 ? "\\." : "$") + ")";
  return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, "g"), "$&,");
};

const Home = props => {
  return (
    <Layout>
      <Stats metrics={props.total.data} />
      <Countries countries_list={props.current.data} />
      <Footer latest_updated={props.current.dt} />
    </Layout>
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
