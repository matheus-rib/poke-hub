import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import Search from '../../../../../components/Search'

export default function Mobile() {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      mb="5"
    >
      <Heading fontSize="4xl" mb="2">
        Pokémons
      </Heading>
      <Search type="pokemon" />
    </Flex>
  )
}
