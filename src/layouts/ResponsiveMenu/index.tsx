import { useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'

export default function ResponsiveMenu() {
  const isDesktop = useBreakpointValue({ base: false, md: true })
  return isDesktop ? <DesktopMenu /> : <MobileMenu />
}
