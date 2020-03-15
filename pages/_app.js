import {
  ThemeProvider,
  CSSReset
} from "@chakra-ui/core";

import SEO from "../components/seo";


function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <SEO />
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;