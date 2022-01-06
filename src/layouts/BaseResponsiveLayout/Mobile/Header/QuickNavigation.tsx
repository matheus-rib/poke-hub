import { Divider, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { DrawerParams } from '..'
import quickNavigationMenus from '../../quickNavigationMenus'
import QuickNavigationButton from './QuickNavigationButton'

export default function QuickNavigation({ onClose }: DrawerParams) {
  return (
    <>
      <Divider mt="4" />
      <Text my="2" fontSize="sm" align="center">
        Quick Navigation
      </Text>
      <Flex direction="column">
        {quickNavigationMenus.map(element => {
          return (
            <QuickNavigationButton
              label={element.label}
              link={element.link}
              icon={element.icon}
              key={element.label}
              onClose={onClose}
            />
          )
        })}
      </Flex>
      <Divider mt="4" />
    </>
  )
}
