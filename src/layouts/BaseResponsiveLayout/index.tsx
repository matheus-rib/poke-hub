import React from 'react'
import isDesktop from '../../utils/isDesktop'
import Desktop from './Desktop'
import Mobile from './Mobile'

export default function BaseResponsiveLayout() {
  return isDesktop() ? <Desktop /> : <Mobile />
}
