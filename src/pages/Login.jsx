import React from "react";
import LoginForm from "../components/LoginForm";
import BackgroundImage from '../images/background.png'

const Login = ({ setIsLoggedIn }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${BackgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">Sign In</h2>
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
        <p className="text-sm text-gray-600 mt-6 text-center">
          Don't have an account?{" "}
          <a href="/signup" className="text-purple-700 font-semibold hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;

