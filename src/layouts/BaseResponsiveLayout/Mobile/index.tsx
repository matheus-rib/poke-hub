import {
  Box,
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import FontAwesomeIcon from '../../../components/FontAwesomeIcon'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'

export type DrawerParams = {
  onClose: () => void
}

export default function MobileMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen} _focus={{ boxShadows: 'none' }} margin="2">
        <FontAwesomeIcon className="fas fa-bars" />
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton _focus={{ boxShadows: 'none' }} size="lg" />
          <Header onClose={onClose} />
          <Body onClose={onClose} />
          <Footer />
        </DrawerContent>
      </Drawer>
      <Box padding="5">
        <Outlet />
      </Box>
    </>
  )
}
