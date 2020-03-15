import Head from "next/head";

const SEO = props => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta
          name="description"
          content="Another website showing real-time worldwide stats about coronavirus."
        />
        <link rel="author" href="/humans.txt" />
        <meta property="og:title" content={props.title} />
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
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
    </>
  );
};

export default SEO;
