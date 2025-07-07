import React from "react";
import { NETFLIX_LOGO } from "../utils/constants";
import ProfileToggleButton from "./ProfileToggleButton";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex items-center justify-between">
      <img className="w-44" src={NETFLIX_LOGO} alt="logo" />
      {user && <ProfileToggleButton />}
    </div>
  );
};

export default Header;
