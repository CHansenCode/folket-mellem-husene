import Head from "next/head";
import Navigation from "./Navigation/Navigation";

const Layout = ({ colors, children }) => {
  return (
    <>
      <Head>
        <title>Folket mellem husene</title>
        <meta name="description" content="Folket mellem husene" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation colors={colors} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
