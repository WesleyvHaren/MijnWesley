import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = props => (
    <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
   <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
  </>
);

export default Layout;