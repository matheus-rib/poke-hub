import { Box } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

export default function DesktopMenu() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Header />
      <Box padding="5">
        <Outlet />
      </Box>
      <Footer />
    </div>
  )
}
