import { Box } from '@chakra-ui/react'
import{ Link} from "react-router-dom"
import React from 'react'

function Navbar() {
  return (
    <Box display="flex" justifyContent="space-between" w="40%" margin="auto" mt="2%" fontWeight="600" fontSize="18px">
       <Link to="/"> <Box>Home</Box></Link>
       <Link to="/login"> <Box>Login</Box></Link>
       <Link to="/signup"> <Box>Signup</Box></Link>
       
    </Box>
  )
}

export default Navbar