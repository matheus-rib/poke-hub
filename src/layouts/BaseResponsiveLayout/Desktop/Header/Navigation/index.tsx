import { ButtonGroup, Flex } from '@chakra-ui/react'
import React from 'react'
import menuLinks from '../../../menuLinks'
import ButtonLink from './ButtonLink'

export default function Navigation() {
  return (
    <ButtonGroup>
      {menuLinks.map(link => (
        <ButtonLink
          color={link.color}
          key={link.key}
          icon={link.icon}
          label={link.label}
          path={link.path}
        />
      ))}
    </ButtonGroup>
  )
}
