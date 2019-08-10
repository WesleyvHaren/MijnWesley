import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
/* import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu"; */

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <AppBar position="static" color="default">
      <Toolbar>
        {/*         <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h6" color="inherit">
          <Link href="/">
            <a style={linkStyle}>Home</a>
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link href="/about">
            <a style={linkStyle}>About</a>
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link href="/games">
            <a style={linkStyle}>Games</a>
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link href="/wiki">
            <a style={linkStyle}>Wiki</a>
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link href="/examples">
            <a style={linkStyle}>Examples</a>
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export default Header;
