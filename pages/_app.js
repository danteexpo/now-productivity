import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

/*
// ngss
export const getServerSideProps = async context => {
  return {
    props: {},
  };
};

// ngsp
export const getStaticProps = async context => {
  return {
    props: {},
  };
};

// ngspa
export const getStaticPaths = async () => {
  return {
    paths:[],
    fallback:false
  }
}

// ncdoc
import { Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
*/
