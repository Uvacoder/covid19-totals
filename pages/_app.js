import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider
} from "@chakra-ui/core";

import SEO from "../components/seo";


function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <SEO />
      <ColorModeProvider value="light">
        <CSSReset />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;