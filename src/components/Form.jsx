import React, { useRef, useState } from "react";
import { validateCredentials } from "../utils/validateCredentials";
import ErrorMessage from "./ErrorMessage";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/userSlice";

export default function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessages, setErrorMessages] = useState(null);
  const [fireBaseErrors, setFireBaseErrors] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSubmit = () => {
    const validate = isSignInForm
      ? validateCredentials(email.current.value, password.current.value)
      : validateCredentials(
          email.current.value,
          password.current.value,
          name.current.value
        );

    setErrorMessages(validate);

    if (validate !== null) return;

    // Sign In / Sign Up Logic
    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              // Dispatch user data to Redux store or handle it as needed
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              navigate("/browse");
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          navigate("/browse");
          console.log("User signed up:", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setFireBaseErrors(errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
          console.log("User signed in:", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setFireBaseErrors(errorMessage);
        });
    }
  };

  return (
    <div className="my-30 mx-auto left-0 right-0 w-4/12 bg-black/80 absolute p-10">
      <h1 className="text-white text-3xl font-semibold mb-8">
        {isSignInForm ? "Sign In" : "Sign Up"}
      </h1>
      <div className="space-y-4">
        {/* Name Input */}
        {!isSignInForm && (
          <>
            <input
              id="name"
              type="text"
              ref={name}
              className="w-full px-4 py-4 bg-gray-700 border-0 rounded-md text-white  focus:outline-none focus:ring-0 focus:bg-gray-600 transition-colors"
              placeholder="Full Name"
            />
            {/** Name Error Message */}
            {errorMessages?.fullName && (
              <ErrorMessage error={errorMessages?.fullName} />
            )}
          </>
        )}

        {/* Email Input */}
        <input
          id="email"
          type="text"
          ref={email}
          className="w-full px-4 py-4 bg-gray-700 border-0 rounded-md text-white  focus:outline-none focus:ring-0 focus:bg-gray-600 transition-colors"
          placeholder="Email or mobile number"
        />
        {/** Email Error Message */}
        {errorMessages?.email && <ErrorMessage error={errorMessages.email} />}
        {/* Password Input */}
        <input
          id="password"
          type="password"
          ref={password}
          className="w-full px-4 py-4 bg-gray-700 border-0 rounded-md text-white focus:outline-none focus:ring-0 focus:bg-gray-600 transition-colors"
          placeholder="Password"
        />
        {/** Password Error Message */}
        {errorMessages?.password && (
          <ErrorMessage error={errorMessages.password} />
        )}

        {/* Sign In Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-4 px-4 rounded-md transition-colors duration-200 mt-6"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
      </div>

      {/* Additional Netflix-style elements */}
      <div className="mt-6 flex items-center justify-between text-sm text-gray-400">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="mr-2 w-4 h-4 text-red-600 bg-gray-700 border-gray-600 rounded focus:ring-red-500"
          />
          Remember me
        </label>
        <a href="#" className="hover:underline">
          Need help?
        </a>
      </div>

      <div className="mt-8 text-gray-400">
        <p className="text-sm mb-2">
          {isSignInForm ? "New to Netflix?" : "Already a member?"}
          <span
            className="text-white hover:underline ml-2 cursor-pointer"
            onClick={handleSignInForm}
          >
            {isSignInForm ? "Sign up now" : "Sign In Now"}
          </span>
          .
        </p>
        {fireBaseErrors && <ErrorMessage error={fireBaseErrors} />}
      </div>
    </div>
  );
}
