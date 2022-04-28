import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen bg-gray-900"
      style={{
        // backgroundImage: "url(https://api.lorem.space/image/car?w=1000&h=800)",
        backgroundImage:
          "url(https://c.tenor.com/aefRndsGWq0AAAAC/minions-happy.gif)",
      }}
    >
      <div className="hero-overlay bg-opacity-70 bg-black"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <div className="mb-5 text-4xl font-bold">
            <h1 className="mb-5 text-6xl font-bold">Hello World!</h1>
            <h2 className="mb-5 font-bold">My name is Muhammet Cin</h2>
            <p>
              I work with
              <Typewriter
                options={{
                  strings: [
                    "JavaScript",
                    "HTML",
                    "CSS",
                    "PHP",
                    "Laravel",
                    "SASS",
                    "MySQL",
                    "React",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
          </div>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
