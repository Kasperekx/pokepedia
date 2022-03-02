import React from "react";
import { Link } from "react-router-dom";
import { Logout } from "../../utils/AuthServices";

const NavBar = ({ setSearch }) => {
  return (
    <div className=" m-auto flex w-8/12 justify-between">
      <h1 className="text-3xl">Pokedex</h1>
      <input
        placeholder="pokemon"
        className="rounded pt-2 pb-2 pl-4 pr-4"
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className=" pt-2 pb-2 pr-8 pl-8 rounded bg-gray-400 text-white" onClick={Logout}>
        <Link to="/login">Logout</Link>
      </button>
    </div>
  );
};

export default NavBar;
