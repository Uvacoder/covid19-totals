import Head from "next/head";

import Number from '../libs/format';

const SEO = props => {
  return (
    <>
      <Head>
        <title>{props.confirmed.format()} cases &mdash; COVID-19 Stats 🦠</title>
        <meta
          name="description"
          content="Another website showing real-time worldwide stats about coronavirus."
        />
        <link rel="author" href="/humans.txt" />
        <meta property="og:title" content="COVID-19 Stats 🦠" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://covid19.diego.earth" />
        <meta
          property="og:image"
          content="https://covid19.diego.earth/preview.png"
        />
        <meta
          property="og:description"
          content="Another website showing real-time worldwide stats about coronavirus."
        />
        https://covid19-stats.diego9.now.sh
        <link rel="manifest" href="/manifest.json" />
      </Head>
    </>
  );
};

export default SEO;
