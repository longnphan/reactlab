import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  const headingTitle = "Featured Projects";
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <>
      <VStack
        spacing={4}
        align-items="flex-start"
        justifyContent="space-between"
      >
        <Box
          bg="white"
          borderRadius="lg"
          overflow="hidden"
          color="black"
          maxWidth="400px"
          minHeight="350px"
          margin="0 auto"
          paddingBottom="1rem"
        >
          <Image
            borderRadius="8px"
            height="300px"
            src={imageSrc}
            alt={description}
          />
          <Heading as="h6" size="xs" paddingLeft="8px" marginTop="1rem">
            {title}
          </Heading>
          <Text fontSize="xs" paddingLeft="8px" marginTop="1rem">
            {description}
          </Text>
          <Text as="b" fontSize="xs" paddingLeft="8px" marginTop="1rem">
            See More <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </Text>
        </Box>
      </VStack>
    </>
  );
};

export default Card;
