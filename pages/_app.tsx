import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../src/helpers/material-ui/createEmotionCache";
import { ThemeProvider } from "@mui/material/styles";
import theme from "src/helpers/material-ui/theme";

const clientSideEmotionCache = createEmotionCache();

interface IMyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: IMyAppProps) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;
  return (
    <>
      <CacheProvider value={emotionCache}>
        <Head>
          <title> Derek Daquel | Personal website </title>
          <meta
            name="description"
            content="Personal website of Derek Daquel. Contains an online portofolio of my job / work experience, personal brand and socials."
          />
          <meta name="author" content="Derek Daquel" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AnimatePresence>
            <Component {...pageProps} />
          </AnimatePresence>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default MyApp;
