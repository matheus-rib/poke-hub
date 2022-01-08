import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import capitalize from '../../../../utils/capitalize'
import { PokemonData } from '../../hooks/usePokemons'

export default function Card({ id, name, sprite }: PokemonData) {
  return (
    <Box
      borderStyle="solid"
      borderColor="whiteAlpha.100"
      borderWidth="2px"
      borderRadius="lg"
      transition="all .2s ease-in-out"
      _hover={{ transform: 'scale(1.1)' }}
      height="100%"
    >
      <Flex direction="column" alignItems="center">
        {sprite ? (
          <Image
            src={sprite}
            boxSize="70px"
            fallbackSrc="assets/PokeballLoading.gif"
          />
        ) : (
          <Image boxSize="70px" src="assets/Pokeball70px.png" />
        )}
        <Text textAlign="center">
          {id} - {capitalize(name)}
        </Text>
      </Flex>
    </Box>
  )
}
