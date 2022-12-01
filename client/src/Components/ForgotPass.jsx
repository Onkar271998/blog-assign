import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPass() {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const toast = useToast();
  const handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async () => {
    console.log(data);

    let logindata = await axios
      .post("http://localhost:8080/forgotPass", data)
      .then((res) => {
        localStorage.setItem("otp", res.data.otp);
        navigate("/otp");
      })
      .catch((err) =>  toast({
        title: "Error Occurred !",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      }));
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6} w="30%">
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Forgot password</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            you can enter email below or{" "}
            <Link color={"blue.400"}>Signup again</Link> ✌️
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

            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Terms and condition</Checkbox>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleSubmit}
              >
                Sent OTP
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
export default ForgotPass;
