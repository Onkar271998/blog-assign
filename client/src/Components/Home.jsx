import {
  Box,
  Button,
  GridItem,
  Heading,
  Input,
  SimpleGrid,
  Text,
  Textarea,
  useStatStyles,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState({});
  const [blog, setBlog] = useState([]);
  let navigate = useNavigate();

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
      let token = localStorage.getItem("token");
      console.log(token);
      const blogs = await axios.post("http://localhost:8080/blogpost1", {
        data: { token: token },
      });
      console.log(blogs);
      setBlog(blogs.data);
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };

  return (
    <>
      <Box display="flex" justifyContent="space-between" w="90%" mt="4%">
        <Box display="flex" flexDirection="column">
          <Input
            onChange={handleChange}
            placeholder="Heading for your blog"
            width="500px"
            mt="2%"
            name="heading"
            backgroundColor="#ebecf0"
            ml="5%"
          ></Input>
          <Textarea
            onChange={handleChange}
            height="300px"
            width="500px"
            mt="2%"
            ml="5%"
            name="text"
            backgroundColor="#ebecf0"
            placeholder="Start Writing"
          ></Textarea>
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
        </Box>
        <Box ml="5%">
          <Heading mb="3%">Your Blogs</Heading>
          <Button
            bg="red"
            color="white"
            onClick={() => window.location.reload(true)}
            mb="4%"
          >
            Refresh
          </Button>
          <SimpleGrid columns={2} spacingX="40px" spacingY="20px">
            {blog.map((e) => (
              <>
                {" "}
                <Box>
                  <Heading size="lg">{e.heading}</Heading>
                  <Text fontSize="22px">{e.text}</Text>
                </Box>
              </>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}

export default Home;
