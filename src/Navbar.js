import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between py-6 px-12 text-4xl">
      <h1><span className="text-blue-600">m</span>uhammet <span className="text-blue-600">c</span>in</h1>
      <nav>
        <ul className="flex flex-row">
          <li>about</li>
          <div class="divider divider-horizontal"></div>
          <li>portofolio</li>
          <div class="divider divider-horizontal"></div>
          <li>contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
