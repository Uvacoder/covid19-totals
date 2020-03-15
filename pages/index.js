import fetch from "isomorphic-unfetch";

import SEO from "../components/seo";
import Layout from "../components/layout";
import Stats from "../components/stats";
import Countries from "../components/countries";
import Footer from "../components/footer";

import Number from '../libs/format';

const Home = props => {
  return (
    <Layout>
      <SEO title={`${props.total.data.confirmed.format()} cases worldwide ― COVID-19 Stats 🦠`} />
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
