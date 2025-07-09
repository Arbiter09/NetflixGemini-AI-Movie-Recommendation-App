import React, { useEffect } from "react";
import { NETFLIX_LOGO } from "../utils/constants";
import ProfileToggleButton from "./ProfileToggleButton";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../Redux/userSlice";
import { useNavigate } from "react-router";
import { auth } from "../utils/firebase";
import GeminiButton from "../components/Gemini/GeminiButton";

const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        // navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      // Cleanup subscription on unmount
      unsubscribe();
    };
  }, []);
  return (
    <div className="fixed w-screen px-8 py-2 bg-gradient-to-b from-black z-30 flex items-center justify-between">
      <img
        className="w-44 cursor-pointer"
        src={NETFLIX_LOGO}
        alt="logo"
        onClick={() => {
          navigate("/browse");
        }}
      />
      {user && (
        <div className="flex gap-1">
          <GeminiButton />
          <ProfileToggleButton />
        </div>
      )}
    </div>
  );
};

export default Header;
