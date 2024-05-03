import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  buttonColor,
  layoutColor,
  pageHeading,
  fontType,
} from "components/DisplaySettings/feutures";

const LoggedOut = ({ handleBurger, handleLogin }) => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: layoutColor }}>
      <Toolbar>
        <Button
          size="small"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, color: buttonColor }}
          onClick={handleBurger}
        >
          <MenuIcon />
        </Button>
        <Typography
          variant="h6"
          component="div"
          sx={{ color: pageHeading, flexGrow: 1, fontFamily: fontType }}
        >
          <div className="flex text-md align-center justify-center">
            καλός bus
          </div>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

const LoggedIn = ({ handleBurger }) => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: layoutColor }}>
      <Toolbar>
        <Button
          size="small"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, color: buttonColor }}
          onClick={handleBurger}
        >
          <MenuIcon />
        </Button>
        <Typography
          variant="h6"
          component="div"
          sx={{ color: pageHeading, flexGrow: 1, fontFamily: fontType }}
        >
          <div className="flex text-md align-center justify-center">
            καλός bus
          </div>
        </Typography>
        <Button sx={{ mr: 1, color: buttonColor }}>
          <Link to={"/settings"}>
            <div
              style={{ fontFamily: fontType }}
              className="font-serif text-gray-500 "
            >
              <AccountCircleIcon />
            </div>
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export const TopBar = ({
  handleBurger,
  handleLogin,
  jwt_avail,
  handleLogout,
}) => {
  return (
    <>
      {jwt_avail ? (
        <LoggedIn
          handleBurger={handleBurger}
          handleLogin={handleLogin}
          handleLogout={handleLogout}
        />
      ) : (
        <LoggedOut handleBurger={handleBurger} handleLogin={handleLogin} />
      )}
    </>
  );
};
