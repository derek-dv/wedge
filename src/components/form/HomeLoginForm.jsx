import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    Text,
  } from "@chakra-ui/react";
  
  import React, { useContext } from "react";
  import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/authContext"
  
  const Form = () => {
    const {setSignedIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const login = (e) =>{
      e.preventDefault();
      setSignedIn(true);
      navigate("/image/submit?new_user=true");
    }
    return (
      <form onSubmit={(e)=>login(e)}>
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            type="email"
            id="email"
          />
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input mb="3" type="password" id="password" />
          <Button type="submit" width={"100%"} colorScheme={"cyan"}>
            Sign in
          </Button>
          <Text my={3} align="center">or</Text>
          <Button leftIcon={<FaGoogle/>} width={"100%"} colorScheme={"whiteAlpha"} color="black" border={"2px"}>
            Sign in with Google
          </Button>
          <Text my={3} align="center">or</Text>
          <Button leftIcon={<FaFacebook/>} width={"100%"} colorScheme={"whiteAlpha"} color="black" border={"2px"}>
            Sign in with Facebook
          </Button>
        </FormControl>
      </form>
    );
  };
  
  export default Form;
  