import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

interface IMyAppProps extends AppProps {}

function MyApp(props: IMyAppProps) {
  const { Component, pageProps } = props;
  return (
    <>
      <Head>
        <title> derekdaquel.com </title>
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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
