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
      <div className="hero-overlay bg-opacity-50 bg-black"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <Center>
            <Wrap>
              <WrapItem>
                <Avatar size="xl" name='Muhammet Cin'>
                  <AvatarBadge
                    boxSize="1.25em"
                    bg="green.500"
                    borderColor="green.400"
                  />
                </Avatar>
              </WrapItem>
            </Wrap>
          </Center>
          <h2 className="my-3 text-xl font-semibold">Learn more about me.</h2>
        </div>
      </div>
    </div>
  );
};

export default About;
