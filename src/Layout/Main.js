import React from "react";
import { Link, Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <header className="max-w-[60%] mx-auto bg-slate-600 opacity-[0.7] py-10 rounded-lg mb-5 flex justify-around">
        <Link to="/">
          <button className="bg-blue-700 rounded-md opacity-[1] text-slate-50 py-5 px-3">
            Home
          </button>
        </Link>
        <Link to="/user">
          <button className="bg-blue-700 rounded-md opacity-[1] text-slate-50 py-5 px-3">
            User
          </button>
        </Link>
      </header>
      <Outlet />
    </div>
  );
};

export default Main;
