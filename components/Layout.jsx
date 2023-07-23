import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children }) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width,minimum-scale=1, initial-scale=1"
      />
      <title>Butuh Lor</title>
      <link rel="icon" type="image/x-icon" href="/public/favicon.ico" />
    </Head>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
