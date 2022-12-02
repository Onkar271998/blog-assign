import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useToast
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import axios from "axios";
function ChangePass() {
  const [showPassword, setShowPassword] = useState(false);

  const [data, setData] = useState({});
  const toast = useToast();
  const handleChange = (e) => {
    let { name, value } = e.target;

    setData({ ...data, [name]: value });
  };
  const handleSubmit = async () => {
    console.log(data);
    try{
      let logindata = await axios.post("http://localhost:8080/changepass", data);
      toast({
        title: "password change !",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

    }catch(err){
      toast({
        title: "Error Occurred !",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6} w="90%">
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
        Change Password
          </Heading>
          
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
           

            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="email" onChange={handleChange} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel> New Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  onChange={handleChange}
                  name="password"
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={handleSubmit}
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Change password
              </Button>
            </Stack>
          
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default ChangePass;
