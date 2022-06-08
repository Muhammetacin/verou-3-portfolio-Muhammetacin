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
      imageAlt: "Image of weather app",
      types: ["javascript", "sass", "bootstrap"],
      title: "Weather App",
      description:
        "Using openweathermap API weather forecasts of cities all over the globe can be known. After selecting a city, it's temperatures, in a graph (ChartJS), and an image of the city are shown (Unsplash API).",
      link: "https://cins-weatherapp.netlify.app/",
    },
    {
      imageUrl: "./images/rock-paper-scissors-image.png",
      imageAlt: "Image of rock paper scissors game",
      types: ["javascript", "sass", "bootstrap"],
      title: "Rock Paper Scissors!",
      description:
        "The famous rock paper scissors game with some extra fun: lizard, spock, hourglass! You can also play with other elements like car-plane-bike. Pure JavaScript, Bootstrap and Sass.",
      link: "https://cins-rockpaperscissors.netlify.app/",
    },
    {
      imageUrl: "./images/react-todolist-image.png",
      imageAlt: "Image with example todo items",
      types: ["react", "tailwindcss"],
      title: "React App: Todo List",
      description:
        "A classic! A project everyone makes to learn the basics of a new framework/library. An introduction to React with a nice looking todo list. Fully functional and saves all items on the browser localstorage.",
      link: "https://cins-react-intro.netlify.app/",
    },
    {
      imageUrl: "./images/react-ecommerce-image.png",
      imageAlt: "Image with dummy ecommerce app",
      types: ["react", "tailwindcss", "chakra ui"],
      title: "React App: ecommerce",
      description:
        "Demo of how a webshop can be made using ReactJS with helper libraries like Chakra UI. Skeletons, cards, drawer, create products based on API data (dummy). All can be found here.",
      link: "https://cins-react-webshop.netlify.app/",
    },
    {
      imageUrl: "./images/laravel-demo.png",
      imageAlt: "Image of Laravel demo app",
      types: ["laravel", "tailwindcss", "mysql", "blade"],
      title: "Laravel 101: Introduction",
      description:
        "An introduction app with Laravel. My first experience with a PHP framework. Using Breeze for authentication and just getting to work with TailwindCSS and Laravel together.",
      link: "https://laravel-demo.muhammetcin.be/",
    },
    {
      imageUrl: "./images/laravel-blog2.png",
      imageAlt: "Image of Laravel blog app",
      types: ["laravel", "tailwindcss", "mysql", "blade"],
      title: "Laravel Blog: my personal experiences",
      description:
        "I always had an idea of having my own blog where I write my journey in programming and coding adventure. I believe this is the way of expressing myself. A good opportunity!",
      link: "https://laravel-blog.muhammetcin.be/",
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
        <div className="max-w-full">
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
          <div className="flex items-stretch flex-col flex-wrap lg:flex-row pt-20">
            {portfolioItems.map((item, index) => {
              return <PortfolioItem key={index} item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
