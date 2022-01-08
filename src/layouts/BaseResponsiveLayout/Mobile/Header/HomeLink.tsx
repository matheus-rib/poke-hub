import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { DrawerParams } from '..'

export default function HomeLink({ onClose }: DrawerParams) {
  return (
    <Link to="/" onClick={onClose}>
      <Flex>
        <Image boxSize="30px" src="logo192.png" />
        <Text fontSize="xl" marginLeft="2">
          PokéHub
        </Text>
      </Flex>
    </Link>
  )
}
