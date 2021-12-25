import { Link, Text } from '@chakra-ui/react'
import React from 'react'

export default function AppFooter() {
  return (
    <Text fontSize="xs">
      <Link
        href="https://github.com/matheus-rib/pokedex-react"
        isExternal
        color="blue.400"
      >
        Pokedex Page
      </Link>
      <span>&nbsp;made by:&nbsp;</span>
      <Link
        href="https://www.linkedin.com/in/matheus-ribeiro-8b9b7615b/"
        isExternal
        color="blue.400"
      >
        Matheus Ribeiro
      </Link>
    </Text>
  )
}
