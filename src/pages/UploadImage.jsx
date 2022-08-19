import { Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaDropbox, FaGoogleDrive, FaUpload } from "react-icons/fa";
import ReviewBar from "../components/layout/ReviewBar";
import UploadModal from "../components/modal/UploadModal";

const UploadImage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [review, setReview] = useState(0);
  const [revise, setRevise] = useState(0);
  const [accepted, setAccepted] = useState(0);
  const [notAccept, setNotAccept] = useState(0);
  const [active, setActive] = useState(0);
  return (
    <Box height={"100%"}>
      <ReviewBar
        active={active}
        set={setActive}
        inReview={{ no: review }}
        revise={{ no: revise }}
        accepted={{ no: accepted }}
        notAccepted={{ no: notAccept }}
      />
      <Flex
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        height="100%"
        gap={8}
      >
        <Text
          align={"center"}
          lineHeight="6"
          width={"30ch"}
          fontSize={"large"}
          fontWeight={"500"}
          color={"gray"}
        >
          When you upload photos you'll see them here.
        </Text>
        <Button width={"64"} leftIcon={<FaUpload />} colorScheme={"blue"} size="lg" onClick={onOpen}>
          Upload
        </Button>
        <UploadModal isOpen={isOpen} onClose={onClose}/>
        <Box>
          {" "}
          <Text align={"center"} fontSize={"lg"} fontWeight={"500"}>
            You can also import from
          </Text>
          <Button
            leftIcon={<FaGoogleDrive />}
            colorScheme={"white"}
            color="black"
            size={"sm"}
          >
            Google drive
          </Button>{" "}
          or
          <Button
            leftIcon={<FaDropbox />}
            colorScheme={"white"}
            color="black"
            size={"sm"}
          >
            Dropbox
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default UploadImage;
