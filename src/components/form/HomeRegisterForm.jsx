import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Checkbox,
  Text,
} from "@chakra-ui/react";

import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const Form = () => {
  return (
    <form>
      <FormControl>
        <FormLabel htmlFor="name">Display name</FormLabel>
        <Input mb="3" type="text" id="name" />
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input
          type="email"
          id="email"
          aria-describedby="email-helper-text"
        />
        <FormHelperText id="email-helper-text">
          We'll never share your email.
        </FormHelperText>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input mb="3" type="password" id="password" />
        <FormLabel htmlFor="confirm">Confirm password</FormLabel>
        <Input mb="3" type="password" id="confirm" />
        <Checkbox mb="3" name="terms">I agree to Wedge terms and conditions</Checkbox>
        <Button type="submit" width={"100%"} colorScheme={"cyan"}>
          Register
        </Button>
        <Text my={3} align="center">or</Text>
        <Button leftIcon={<FaGoogle/>} width={"100%"} colorScheme={"whiteAlpha"} color="black" border={"2px"}>
          Sign up with Google
        </Button>
        <Text my={3} align="center">or</Text>
        <Button leftIcon={<FaFacebook/>} width={"100%"} colorScheme={"whiteAlpha"} color="black" border={"2px"}>
          Sign up with Facebook
        </Button>
      </FormControl>
    </form>
  );
};

export default Form;
