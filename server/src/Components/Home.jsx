import {
  Box,
  Button,
  Heading,
  Input,
  Text,
  useStatStyles,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState({});
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    getblogs();
  }, []);

  const handleChange = (e) => {
    let { name, value } = e.target;

    setData({ ...data, [name]: value });
  };

  const handleClick = async () => {
    let blogdata = await axios.post("http://localhost:8080/blogpost", data);
    console.log(data);
  };

  const getblogs = async () => {
    try {
      const blogs = await axios.get("http://localhost:8080/blogpost");
      console.log(blogs);
      setBlog(blogs.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Box display="flex" flexDirection="column">
        <Input
          onChange={handleChange}
          placeholder="heading"
          width="500px"
          mt="2%"
          name="heading"
          backgroundColor="#ebecf0"
          ml="5%"
        ></Input>
        <Input
          onChange={handleChange}
          height="300px"
          width="500px"
          mt="2%"
          ml="5%"
          name="text"
          backgroundColor="#ebecf0"
          placeholder="text"
        ></Input>
        <Button
          w="500px"
          mt="2%"
          ml="5%"
          backgroundColor="red"
          color="white"
          onClick={handleClick}
        >
          Upload
        </Button>

        {blog.map((e) => (
          <>
            <Heading>{e.heading}</Heading>
            <Text>{e.text}</Text>
          </>
        ))}
      </Box>
    </>
  );
}

export default Home;
