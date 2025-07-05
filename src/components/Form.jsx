import React, { useState } from "react";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log("Sign in attempted with:", { email, password });
  };

  return (
    <div className="my-36 mx-auto left-0 right-0 w-4/12 bg-black/80 absolute p-10">
      <h1 className="text-white text-3xl font-semibold mb-8">
        {isSignInForm ? "Sign In" : "Sign Up"}
      </h1>
      <div className="space-y-4">
        {/* Name Input */}
        {!isSignInForm && (
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-4 bg-gray-700 border-0 rounded-md text-white  focus:outline-none focus:ring-0 focus:bg-gray-600 transition-colors"
            placeholder="Full Name"
          />
        )}

        {/* Email Input */}
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-4 bg-gray-700 border-0 rounded-md text-white  focus:outline-none focus:ring-0 focus:bg-gray-600 transition-colors"
          placeholder="Email or mobile number"
        />

        {/* Password Input */}
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-4 bg-gray-700 border-0 rounded-md text-white focus:outline-none focus:ring-0 focus:bg-gray-600 transition-colors"
          placeholder="Password"
        />

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
