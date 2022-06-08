import React from "react";
import { Box, Image, Badge } from "@chakra-ui/react";

const PortfolioItem = ({ item }) => {
  return (
    <div className="m-4">
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bg="gray"
      >
        <Box>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <Image
              boxSize="250px"
              w="400px"
              objectFit="cover"
              src={item.imageUrl}
              alt={item.imageAlt}
            />
          </a>
        </Box>
        <Box p="6">
          <Box display="flex" alignItems="baseline">
            {item.types.map((element, index) => {
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
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </Box>

          <Box className="align-stretch">{item.description}</Box>
        </Box>
      </Box>
    </div>
  );
};

export default PortfolioItem;
