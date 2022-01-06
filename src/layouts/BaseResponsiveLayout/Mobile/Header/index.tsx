import { DrawerHeader } from '@chakra-ui/react'
import React from 'react'
import { DrawerParams } from '..'
import HomeLink from './HomeLink'
import QuickNavigation from './QuickNavigation'

export default function Header({ onClose }: DrawerParams) {
  return (
    <DrawerHeader>
      <HomeLink onClose={onClose} />
      <QuickNavigation onClose={onClose} />
    </DrawerHeader>
  )
}
