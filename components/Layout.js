import Header from "./Header";
import Head from "next/head";
import { bgColors } from "../data/css-in-js-helpers";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD",
  backgroundColor: bgColors.Green,
  fontFamily: "Roboto, Helvetica, Arial, sans-serif"
};

const Layout = props => (
  <>
    <Head>
      <title>MijnWesley</title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
        type="text/css"
      />
    </Head>
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
  </>
);

export default Layout;
