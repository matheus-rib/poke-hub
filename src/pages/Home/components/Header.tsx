import { Heading } from '@chakra-ui/react'
import React from 'react'

export default function Header() {
  return (
    <>
      <Heading textAlign="center">Welcome to PokéHub!</Heading>
      <Heading size="sm" textAlign="center">
        A hub with Pokémon information
      </Heading>
    </>
  )
}
