import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import FontAwesomeIcon from '../../../components/FontAwesomeIcon'
import Footer from './Footer'
import Header from './Header'
import MenuLinks from './MenuLinks'

export type DrawerParams = {
  onClose: () => void
}

export default function MobileMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen} _focus={{ boxShadows: 'none' }}>
        <FontAwesomeIcon className="fas fa-bars" />
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton _focus={{ boxShadows: 'none' }} size="lg" />
          <Header onClose={onClose} />
          <DrawerBody>
            <MenuLinks onClose={onClose} />
          </DrawerBody>
          <Footer />
        </DrawerContent>
      </Drawer>
      <Outlet />
    </>
  )
}
