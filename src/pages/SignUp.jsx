// src/pages/SignUp.jsx
import React from "react";
import SignUpForm from "../components/SignUpForm";
import BackgroundImage from '../images/background.png';

const SignUp = ({ setIsLoggedIn }) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center gap-y-6">
        <h2 className="text-3xl font-bold text-center text-purple-900">Sign Up</h2>
        <SignUpForm setIsLoggedIn={setIsLoggedIn} />
      </div>
    </div>
  );
};

export default SignUp;
