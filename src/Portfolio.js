import React from "react";

const Portfolio = () => {
  return (
    <div
      className="hero min-h-screen bg-gray-900"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/7078292/pexels-photo-7078292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
      }}
    >
      <div className="hero-overlay bg-opacity-50 bg-black"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <p>This is portfolio page. Learn more about my projects.</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
