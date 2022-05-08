import React from "react";
// import { Box, Image, Badge } from "@chakra-ui/react";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  // const weatherApp = {
  //   imageUrl: "./images/weather-app-image.png",
  //   imageAlt: "Main page of weather app",
  //   types: ["javascript", "sass", "bootstrap"],
  //   title: "Weather App",
  //   description:
  //     "Using openweathermap API weather forecasts of cities all over the globe can be known. After selecting a city, it's temperatures, in a graph (ChartJS), and an image of the city are shown (Unsplash API).",
  // };

  const portfolioItems = [
    {
      imageUrl: "./images/weather-app-image.png",
      imageAlt: "Main page of weather app",
      types: ["javascript", "sass", "bootstrap"],
      title: "Weather App",
      description:
        "Using openweathermap API weather forecasts of cities all over the globe can be known. After selecting a city, it's temperatures, in a graph (ChartJS), and an image of the city are shown (Unsplash API).",
    },
    {
      imageUrl: "./images/rock-paper-scissors-image.png",
      imageAlt: "Main page of rock paper scissors game",
      types: ["javascript", "sass", "bootstrap"],
      title: "Rock Paper Scissors!",
      description:
        "The famous rock paper scissors game with some extra fun! Pure JavaScript, Bootstrap and Sass.",
    },
    {
      imageUrl: "./images/react-todolist-image.png",
      imageAlt: "An image with example todo items",
      types: ["react", "tailwindcss"],
      title: "React App: Todo List",
      description:
        "A classic! A project everyone makes to learn the basics of a new framework/library. An introduction to React with a nice looking todo list. Fully functional and saves all items on the browser localstorage.",
    },
  ];

  return (
    <div
      className="hero min-h-screen bg-gray-900"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/7078292/pexels-photo-7078292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
      }}
    >
      <div className="hero-overlay bg-opacity-50 bg-black"></div>
      <div className="hero-content text-neutral-content">
        <div className="max-w-full flex items-stretch">
          {/* <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            bg="gray"
          >
            <Image src={weatherApp.imageUrl} alt={weatherApp.imageAlt} />

            <Box p="6">
              <Box display="flex" alignItems="baseline">
                {weatherApp.types.map((element, index) => {
                  return (
                    <Badge
                      key={index}
                      borderRadius="full"
                      px="2"
                      colorScheme="teal"
                      mr="1"
                    >
                      {element}
                    </Badge>
                  );
                })}
              </Box>

              <Box
                mt="1"
                fontWeight="semibold"
                fontSize="2xl"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {weatherApp.title}
              </Box>

              <Box>{weatherApp.description}</Box>
            </Box>
          </Box> */}
          {portfolioItems.map((item, index) => {
            return <PortfolioItem key={index} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
