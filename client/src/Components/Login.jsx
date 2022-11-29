import { Box, Button, Input } from "@chakra-ui/react";
import axios from"axios"
import React from "react";
import { useState } from "react";

function Login() {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async () => {
    let logindata = await axios.post("http://localhost:8080/login", data);
    console.log(data)
  };
  return (
    <Box
      w="30%"
      display="flex"
      flexDirection="column"
      margin="auto"
      mt="10%"
      lineHeight="3%"
    >
      <Input placeholder="email" name="email" onChange={handleChange}></Input>
      <Input
        name="password"
        type="password"
        placeholder="password"
        onChange={handleChange}
      ></Input>
      <Button bgColor="red" color="white" onClick={handleSubmit}>
        Login
      </Button>
    </Box>
  );
}

export default Login;
