import Head from "next/head";

const SEO = () => {
  return (
    <>
      <Head>
        <title>COVID-19 Stats 🦠</title>
        <meta
          name="description"
          content="Another website showing real-time worldwide stats about coronavirus."
        />
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
      </Head>
    </>
  );
};

export default SEO;
