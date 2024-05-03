import React from "react";
import { useState } from "react";
import { BigScreenLayout } from "components/DisplaySettings/BigScreenLayout";

export const Home = ({ handleLogout }) => {
  const [open, setOpen] = useState(true);

  const handleLogin = () => {
    setOpen(false);
  };
  const handleCart = () => {
    setOpen(false);
  };
  const handleBurger = () => {
    setOpen(!open);
  };
  const handleClickLarge = () => {
    setOpen(true);
  };

  return (
    <div>
      <BigScreenLayout
        handleCart={handleCart}
        handleLogin={handleLogin}
        handleBurger={handleBurger}
        handleClick={handleClickLarge}
        handleLogout={handleLogout}
        open={open}
      />
    </div>
  );
};
