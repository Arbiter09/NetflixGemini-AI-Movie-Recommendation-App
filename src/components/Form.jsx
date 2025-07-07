import React, { useRef, useState } from "react";
import { validateCredentials } from "../utils/validateCredentials";
import { AlertCircle } from "lucide-react";

export default function Form() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [name, setName] = useState("");
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessages, setErrorMessages] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSubmit = () => {
    const validate = name.current.value
      ? validateCredentials(email.current.value, password.current.value)
      : validateCredentials(
          email.current.value,
          password.current.value,
          name.current.value
        );

    // const validate = validateCredentials(
    //   email.current.value,
    //   password.current.value
    // );
    setErrorMessages(validate);
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
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-4 bg-gray-700 border-0 rounded-md text-white  focus:outline-none focus:ring-0 focus:bg-gray-600 transition-colors"
              placeholder="Full Name"
            />
            {/** Name Error Message */}
            {errorMessages?.fullName && (
              <div className="flex items-start gap-2 p-2 bg-red-50 border border-red-200 rounded-lg">
                <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-red-700 leading-relaxed">
                  {errorMessages.fullName}
                </p>
              </div>
            )}
          </>
        )}

        {/* Email Input */}
        <input
          id="email"
          type="text"
          ref={email}
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-4 bg-gray-700 border-0 rounded-md text-white  focus:outline-none focus:ring-0 focus:bg-gray-600 transition-colors"
          placeholder="Email or mobile number"
        />
        {/** Email Error Message */}
        {errorMessages?.email && (
          <div className="flex items-start gap-2 p-2 bg-red-50 border border-red-200 rounded-lg">
            <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-red-700 leading-relaxed">
              {errorMessages.email}
            </p>
          </div>
        )}
        {/* Password Input */}
        <input
          id="password"
          type="password"
          ref={password}
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-4 bg-gray-700 border-0 rounded-md text-white focus:outline-none focus:ring-0 focus:bg-gray-600 transition-colors"
          placeholder="Password"
        />
        {/** Password Error Message */}
        {errorMessages?.password && (
          <div className="flex items-start gap-2 p-2 bg-red-50 border border-red-200 rounded-lg">
            <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-red-700 leading-relaxed">
              {errorMessages.password}
            </p>
          </div>
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
        <p className="text-sm">
          {isSignInForm ? "New to Netflix?" : "Already a member?"}
          <span
            className="text-white hover:underline ml-2 cursor-pointer"
            onClick={handleSignInForm}
          >
            {isSignInForm ? "Sign up now" : "Sign In Now"}
          </span>
          .
        </p>
      </div>
    </div>
  );
}
