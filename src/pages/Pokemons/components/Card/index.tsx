import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import capitalize from '../../../../utils/capitalize'
import { PokemonData } from '../../hooks/usePokemons'

export default function Card({ id, name, sprite }: PokemonData) {
  return (
    <Link to={`/pokemons/${name}`}>
      <Box
        borderStyle="solid"
        borderColor="whiteAlpha.100"
        borderWidth="2px"
        borderRadius="lg"
        transition="all .2s ease-in-out"
        _hover={{ transform: 'scale(1.1)' }}
        height="100%"
        paddingX="2"
        paddingY="3.5"
      >
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box pb="2.5">
            {sprite ? (
              <Image
                src={sprite}
                boxSize="70px"
                fallbackSrc="/assets/PokeballLoading.gif"
              />
            ) : (
              <Image boxSize="70px" src="/assets/Pokeball70px.png" />
            )}
          </Box>
          <Text textAlign="center">
            {id} - {capitalize(name)}
          </Text>
        </Flex>
      </Box>
    </Link>
  )
}
