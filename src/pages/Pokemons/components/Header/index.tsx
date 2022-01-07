import React from 'react'
import isDesktop from '../../../../utils/isDesktop'
import Desktop from './desktop'
import Mobile from './mobile'

export default function Header() {
  return isDesktop() ? <Desktop /> : <Mobile />
}
