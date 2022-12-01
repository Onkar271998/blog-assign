import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Login() {
  const [data, setData] = useState({});
  let navigate = useNavigate();
  const toast = useToast();
  const handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async () => {
    try {
      let logindata = await axios.post("http://localhost:8080/login", data);
      if (logindata) {
        navigate("/");
      
      }
    } catch (err) {
      console.log(err);
      toast({
        title: "Error Occurred !",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }

    // .then(
    //       (res) => localStorage.setItem("token", res.data.token)

    //       // navigate("/")
    //     );
    //     if (logindata) {
    //       navigate("/")
    //     }
    //     else{
    //       console.log("pass incorrect");
    //     }

    //     console.log(data);
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="email" onChange={handleChange} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" onChange={handleChange} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"} to="/forgotpass">
                  {" "}
                  <Text textDecoration="underline">Forgot password?</Text>
                </Link>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleSubmit}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default Login;
