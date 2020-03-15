import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider
} from "@chakra-ui/core";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ColorModeProvider value="light">
        <CSSReset />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;