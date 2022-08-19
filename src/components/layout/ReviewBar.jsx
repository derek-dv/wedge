import { Badge, Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

const ReviewBar = ({ active, set, inReview, revise, accepted, notAccepted }) => {
  return (
    <Box px="8" borderBottom={"1px"}>
      <Flex minWidth="max-content" alignItems="center" gap="1">
        <Button
          size={"sm"}
          onClick={()=>set(0)}
          py={5}
          color={active == 0 ? "blue.400" : "gray.00"}
          bg="white"
          colorScheme={"white"}
          rightIcon={
            <Badge
              variant="solid"
              colorScheme={active == 0 ? "blue" : "gray"}
            >
              {inReview.no}
            </Badge>
          }
        >
          In Review
        </Button>
        <Button
          size={"sm"}
          onClick={()=>set(1)}
          py={5}
          color={active == 1 ? "blue.400" : "gray.00"}
          bg="white"
          colorScheme={"white"}
          rightIcon={
            <Badge
              variant="solid"
              colorScheme={active == 1 ? "blue" : "gray"}
            >
              {revise.no}
            </Badge>
          }
        >
          Revise Required
        </Button>
        <Button
          size={"sm"}
          onClick={()=>set(2)}
          py={5}
          color={active == 2 ? "blue.400" : "gray.00"}
          bg="white"
          colorScheme={"white"}
          rightIcon={
            <Badge
              variant="solid"
              colorScheme={active == 2 ? "blue" : "gray"}
            >
              {notAccepted.no}
            </Badge>
          }
        >
          Not Accepted
        </Button>
        <Button
          size={"sm"}
          onClick={()=>set(3)}
          py={5}
          color={active == 3 ? "blue.400" : "gray.00"}
          bg="white"
          colorScheme={"white"}
          rightIcon={
            <Badge
              variant="solid"
              colorScheme={active == 3 ? "blue" : "gray"}
            >
              {accepted.no}
            </Badge>
          }
        >
          Accepted
        </Button>
      </Flex>
    </Box>
  );
};

export default ReviewBar;
