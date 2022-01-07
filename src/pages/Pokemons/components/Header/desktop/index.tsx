import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import Search from '../Search'

export default function Desktop() {
  return (
    <Box position="relative" textAlign="center">
      <Heading>Pokémons</Heading>
      <Box position="absolute" right={2} top={0}>
        <Search />
      </Box>
    </Box>
  )
}
