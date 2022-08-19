import { Box } from '@chakra-ui/react'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = (props) => {
  return (
    <Box height={"80vh"}>
        <Navbar />
        {props.children}
        <Footer />
    </Box>
  )
}

export default Layout
