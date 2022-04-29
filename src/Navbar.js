import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed inset-x-0 top-0 flex justify-between py-6 px-12 text-4xl z-10 text-white bg-transparent">
      <Link to="/">
        <h1>
          <span className="text-red-600">m</span>uhammet{" "}
          <span className="text-red-600">c</span>in
        </h1>
      </Link>
      <nav>
        <ul className="flex flex-row">
          <li className="pr-3">
            <Link to="about">
              <button className="hover:text-warning hover:underline">
                about
              </button>
            </Link>
          </li>
          <li className="px-3">
            <Link to="portfolio">
              <button className="hover:text-secondary hover:underline">
                portofolio
              </button>
            </Link>
          </li>
          <li className="pl-3">
            <button className="hover:text-accent hover:underline">
              contact
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
