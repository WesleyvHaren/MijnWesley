import Header from "./Header";
import Head from "next/head";

var bgColors = {
  Default: "#81b71a",
  Blue: "#00B1E1",
  Cyan: "#37BC9B",
  Green: "#8CC152",
  Red: "#E9573F",
  Yellow: "#F6BB42"
};

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD",
  "background-color": bgColors.Green
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
    </Head>
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
  </>
);

export default Layout;
