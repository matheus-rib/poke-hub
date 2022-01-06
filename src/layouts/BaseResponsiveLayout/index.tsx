import { useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import Desktop from './Desktop'
import Mobile from './Mobile'

export default function BaseResponsiveLayout() {
  const isDesktop = useBreakpointValue({ base: false, md: true })
  return isDesktop ? <Desktop /> : <Mobile />
}
