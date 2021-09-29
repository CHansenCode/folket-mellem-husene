import { useState } from "react";

import Layout from "../Layout/Layout";

import "../styles/style.scss";

function MyApp({ Component, pageProps }) {
  const [colors, setColors] = useState({
    primary: "rgb(255,40,130)",
    primary_bg: "rgba(255,40,130,0.15)",
    interaction: "rgb(30,140,160)",
    interaction_bg: "rgba(30,140,160,0.15)",
  });
  return (
    <>
      <Layout setColors={setColors} colors={colors}>
        <Component colors={colors} {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
