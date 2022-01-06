import { Button, Menu, MenuButton, MenuList } from '@chakra-ui/react'
import React from 'react'
import quickNavigationMenus from '../../../quickNavigationMenus'
import QuickNavigationOption from './QuickNavigationOption'

export default function QuickNavigation() {
  return (
    <Menu offset={[-30, 10]}>
      <MenuButton as={Button} _focus={{ boxShadow: 'none' }}>
        Quick Navigation
      </MenuButton>
      <MenuList>
        {quickNavigationMenus.map(element => {
          return (
            <QuickNavigationOption
              label={element.label}
              icon={element.icon}
              link={element.link}
              key={element.label}
            />
          )
        })}
      </MenuList>
    </Menu>
  )
}
