import { Box } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

export default function DesktopMenu() {
  return (
    <Box
      style={{ position: 'relative', minHeight: '100vh', overflowY: 'hidden' }}
    >
      <Header />
      <Box padding="5">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  )
}
