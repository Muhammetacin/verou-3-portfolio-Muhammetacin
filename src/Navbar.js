import React from "react";

const Navbar = () => {
  return (
    <div className="fixed inset-x-0 top-0 flex justify-between py-6 px-12 text-4xl z-10 text-white bg-transparent">
      <h1>
        <span className="text-red-600">m</span>uhammet{" "}
        <span className="text-red-600">c</span>in
      </h1>
      <nav>
        <ul className="flex flex-row">
          <li className="pr-3">
            <button className="hover:text-primary">about</button>
          </li>
          <li className="px-3">
            <button className="hover:text-secondary">portofolio</button>
          </li>
          <li className="pl-3">
            <button className="hover:text-accent">contact</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
