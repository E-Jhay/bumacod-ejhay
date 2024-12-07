import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Welcome to Seminar Reservation App.
            </p>
            <div className="flex gap-2 mx-auto justify-center">
                <Link to="/login" className="btn btn-primary uppercase">Sign In</Link>
                <Link to="/register" className="btn btn-primary uppercase">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
