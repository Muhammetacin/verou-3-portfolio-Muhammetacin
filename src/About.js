import {
  Wrap,
  WrapItem,
  Avatar,
  Center,
  AvatarBadge,
  // Stack,
} from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <div
      className="hero min-h-screen bg-gray-900"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/2929300/pexels-photo-2929300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
      }}
    >
      <div className="hero-overlay bg-opacity-60 bg-black"></div>
      <div className="hero-content text-neutral-content">
        <div className="max-w-2xl text-lg mx-8 mt-32 md:mt-0">
          <Center>
            <Wrap>
              <WrapItem>
                <Avatar
                  size="2xl"
                  name="Muhammet Cin"
                  src="./images/muhammetcinpic.png"
                >
                  <AvatarBadge
                    boxSize="0.9em"
                    bg="green.500"
                    borderColor="green.400"
                  />
                </Avatar>
              </WrapItem>
            </Wrap>
          </Center>
          <h2 className="my-3 text-3xl font-semibold">Learn more about me.</h2>
          <div className="font-semibold text-xl">
            <br />
            <p>
              <i>
                "Everything is fun unless you have no knowledge of it."
                <br />
                &#8212; Muhammet Cin
              </i>
            </p>
            <br />
            <p>
              When I was a young boy who played a lot of video games I sometimes
              got frustrated with the limitations. With that frustration I
              started to research how I could give myself the advantage in
              games. Because winning is always more fun than losing &#128516;
              <br />
              <br />I started to tweak the source files of the games I played.
              For example, Age of Empires 3. Briefly, in the game there are
              factions and unique buildings for each with different benefits.
              The Netherlands has Bank which generates money. The Ottomans have
              Factory building that can create The Great Bombard (most powerful
              cannon in game). But I wanted them both and have no limits on
              either so I went into the code and played around the get them all
              available. Since then I am excited to create and solve problems.
              Solving problems gives me satisfaction so I believe I have found
              the perfect job for the rest of my life: coding!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
