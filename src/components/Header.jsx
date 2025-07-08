import React, { useEffect } from "react";
import { NETFLIX_LOGO } from "../utils/constants";
import ProfileToggleButton from "./ProfileToggleButton";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../Redux/userSlice";
import { useNavigate } from "react-router";
import { auth } from "../utils/firebase";

const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex items-center justify-between">
      <img className="w-44" src={NETFLIX_LOGO} alt="logo" />
      {user && <ProfileToggleButton />}
    </div>
  );
};

export default Header;
