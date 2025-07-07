import React, { useState } from "react";
import { Settings, LogOut, HelpCircle, Laugh, ChevronDown } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../Redux/userSlice";
import { useNavigate } from "react-router";

export default function ProfileToggleButton() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const handleMenuClick = (action) => {
    console.log(`${action} clicked`);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div className="flex ">
        <div className="w-full flex items-center space-x-3 px-4 py-3 transition-colors text-left text-white">
          <Laugh className="w-5 h-5 text-white" />
          <span>Welcome {user.displayName}!</span>
        </div>
        <button
          onClick={toggleMenu}
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity focus:outline-none"
        >
          <img
            src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-lg"
          />
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer transition-transform duration-300 ease-in-out"
          >
            <ChevronDown
              className={`text-white transform transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-black/90 backdrop-blur-sm border border-gray-800 rounded-lg shadow-2xl overflow-hidden animate-in fade-in-0 zoom-in-95 duration-200">
          <div className="py-2">
            <button
              onClick={() => handleMenuClick("Account Settings")}
              className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-800/50 transition-colors text-left text-white"
            >
              <Settings className="w-5 h-5 text-gray-400" />
              <span>Account Settings</span>
            </button>

            <button
              onClick={() => handleMenuClick("Help Center")}
              className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-800/50 transition-colors text-left text-white"
            >
              <HelpCircle className="w-5 h-5 text-gray-400" />
              <span>Help Center</span>
            </button>

            <div className="border-t border-gray-800 my-2"></div>

            <button
              onClick={handleSignOut}
              className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-800/50 transition-colors text-left text-white"
            >
              <LogOut className="w-5 h-5 text-gray-400" />
              <span>Sign Out of Netflix</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
