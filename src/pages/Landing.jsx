import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Link,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
// import {Link} from "react-router-dom";
import React, { useContext } from "react";
import RegisterForm from "../components/form/HomeRegisterForm";
import LoginForm from "../components/form/HomeLoginForm";
import img1 from "../assets/home-1.jpg";
import { AuthContext } from "../context/authContext";

const Landing = () => {
  const { signUp, toggleSignUp } = useContext(AuthContext);
  return (
    <Box className="nav_header" px={14} pt={"14"} pb="10">
      <Flex direction="row" wrap={true}>
        <Box width={"55%"}>
          <Text fontSize={"6xl"} fontWeight={"800"}>
            The best way to sell photos, vectors & videos online
          </Text>
          <Text fontSize={"large"} my={3} lineHeight={2} fontWeight={"normal"}>
            Upload and sell content online on the largest marketplaces. Submit
            your images, vectors and videos in seconds, no keywords or captions
            required.
          </Text>
          <Image width={"70%"} align="center" src={img1} />
        </Box>
        <Spacer />
        {signUp ? (
          <Box
            width={"40%"}
            shadow={"xl"}
            rounded={"md"}
            px="6"
            pb="9"
            height={"96%"}
          >
            <Text
              align={"center"}
              fontSize={"large"}
              fontWeight={"bold"}
              mt={"5"}
            >
              Start selling
            </Text>
            <Text align={"center"} fontSize={"medium"}>
              Create your free account
            </Text>
            <Text fontSize={"medium"} mt={"10"}>
              Already have an account?{" "}
              <Link color="blue" to="/" onClick={()=>toggleSignUp(!signUp)}>
                Sign in
              </Link>
            </Text>
            <RegisterForm />
          </Box>
        ) : (
          <Box
            width={"40%"}
            shadow={"xl"}
            rounded={"md"}
            px="6"
            pb="9"
            height={"96%"}
          >
            <Text
              align={"center"}
              fontSize={"large"}
              fontWeight={"bold"}
              mt={"5"}
            >
              Sign in
            </Text>
          
            <Text fontSize={"medium"} mt={"5"}>
              Don't have an account?{" "}
              <Link color="blue" to="/" onClick={()=>toggleSignUp(!signUp)}>
                Create an account
              </Link>
            </Text>
            <LoginForm />
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default Landing;
