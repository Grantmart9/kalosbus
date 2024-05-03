import React from "react";
import { BrowserRouter as Route, Link, Switch } from "react-router-dom";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Contacts } from "CompanyPages/Contact";
import { Products } from "CompanyPages/Products";
import { Login } from "UserPages/Login";
import { About } from "CompanyPages/About";
import { Sales } from "CompanyPages/Sales";
import { Orders } from "CompanyPages/Orders";
import { Register } from "UserPages/Register";
import Grow from "@mui/material/Grow";
import {
  buttonColor,
  layoutColor,
  fontType,
} from "components/DisplaySettings/feutures";
import { TopBar } from "components/DisplaySettings/TopBar";
import Cookies from "universal-cookie";
const cookies = new Cookies();

/*This needs to be */
const menuItems = [{ name: "Login", path: "/login" }];
const RegisteredMenuItems = [
  { name: "Products", path: "/productlist" },
  { name: "Orders", path: "/ordersbus" },
  { name: "About", path: "/aboutbus" },
  { name: "Contact", path: "/contactbus" },
  { name: "Sales", path: "/sales" },
  { name: "Logout", path: "/login" },
];

const SideNavInner = ({ handleClick, jwt }) => {
  var Menu;
  if (jwt) {
    Menu = RegisteredMenuItems;
  } else {
    Menu = menuItems;
  }
  return (
    <div className="grid grid-rows-4 gap-2 p-2 mt-5">
      {Menu.map((item) => (
        <Grow in={true} timeout={800}>
          <Link to={item.path}>
            <Button
              onClick={handleClick}
              size="large"
              sx={{
                color: buttonColor,
              }}
            >
              <div clasName="text-md font-bold">{item.name}</div>
            </Button>
          </Link>
        </Grow>
      ))}
    </div>
  );
};

const SideNavBig = ({ handleClick, jwt }) => {
  return (
    <>
      <div
        style={{ backgroundColor: layoutColor, minWidth: "300px" }}
        className="rounded shadow-md mt-1"
      >
        <div className="flex align-center justify-center">
          <SideNavInner handleClick={handleClick} jwt={jwt} />
        </div>
      </div>
    </>
  );
};

const ScreenLayoutInner = ({ setJWT }) => {
  return (
    <div
      style={{ backgroundColor: layoutColor, fontFamily: fontType }}
      className="rounded shadow-md h-fit w-screen p-2 mt-1 ml-1"
    >
      <Switch>
        <Route path="/productlist">
          <Products />
        </Route>
        <Route path="/ordersbus">
          <Orders />
        </Route>
        <Route path="/aboutbus">
          <About />
        </Route>
        <Route path="/contactbus">
          <Contacts />
        </Route>
        <Route path="/sales">
          <Sales />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login setJWT={setJWT} />
        </Route>
      </Switch>
    </div>
  );
};

export const BigScreenLayout = ({
  handleCart,
  handleLogin,
  handleBurger,
  handleClick,
  open,
}) => {
  var JWT_State = false;
  var jwt_avail = cookies.get("Token");
  if (jwt_avail != "") {
    JWT_State = true;
  } else {
    JWT_State = false;
  }
  const [jwt, setJWT] = useState(JWT_State);

  const handleLogout = () => {
    cookies.set("Token", "", { path: "/" });
    cookies.set("User_id", "", { path: "/" });
    BigScreenLayout();
  };

  return (
    <div>
      <TopBar
        handleCart={handleCart}
        handleLogin={handleLogin}
        handleBurger={handleBurger}
        handleLogout={handleLogout}
        jwt_avail={JWT_State}
        setJWT={setJWT}
      />
      <div className="flex min-h-screen" style={{ marginTop: "5rem" }}>
        {open ? <SideNavBig handleClick={handleClick} jwt={jwt} /> : null}
        <ScreenLayoutInner setJWT={setJWT} />
      </div>
    </div>
  );
};
