import { Box, Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from "axios"
function Signup() {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async () => {
    let logindata = await axios.post("http://localhost:8080/signup", data);
    console.log(data)
  };
  return (
    <Box w="30%" display="flex" flexDirection="column"  margin="auto" mt="10%" lineHeight="3%">
    <Input placeholder='name' onChange={handleChange}></Input>
    <Input placeholder='Email' onChange={handleChange}></Input>
    <Input type="password" placeholder='Create password' onChange={handleChange}></Input>
    <Input type="password" placeholder='Enter password again' onChange={handleChange}></Input>
    <Button bgColor="red" color="white" onChange={handleSubmit}>Signup</Button>
  </Box>
  )
}

export default Signup