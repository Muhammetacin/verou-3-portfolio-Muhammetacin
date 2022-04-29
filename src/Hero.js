import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen bg-gray-900"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/2907879/pexels-photo-2907879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
        // backgroundImage:
        //   "url(https://c.tenor.com/aefRndsGWq0AAAAC/minions-happy.gif)",
      }}
    >
      <div className="hero-overlay bg-opacity-50 bg-black"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <div className="mb-5 text-4xl font-bold">
            <h1 className="mb-5 text-6xl font-bold">Hello World!</h1>
            <h2 className="mb-5 font-bold">My name is Muhammet Cin</h2>
            I work with
            <Typewriter
              options={{
                strings: [
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "Php",
                  "Laravel",
                  "Sass",
                  "MySQL",
                  "React",
                  "Git",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p className="mb-5">
            Welcome to my website where you can read and learn more about me,
            what I did in the past and find contact information to reach out to
            me. <br />I am a passionate developer who loves problem-solving and
            feel a strong satisfaction when I create/write working code/app.
          </p>
          <Link to="portfolio">
            <button className="btn btn-success">My Portfolio</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
