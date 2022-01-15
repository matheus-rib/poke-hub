import { Flex, Heading, Image } from '@chakra-ui/react'
import PokeAPI from 'pokedex-promise-v2'
import React from 'react'
import capitalize from '../../../../../utils/capitalize'
import { PokemonType } from '../../../../../utils/typeEffectiveness/types'
import PokemonAbilities from './PokemonAbilities'
import PokemonHeightAndWeight from './PokemonHeightAndWeight'
import PokemonTypes from './PokemonTypes'
import PokeballLoading from '../../../../../assets/PokeballLoading.gif'

type PokemonGeneralInfoParamsType = {
  pokemon: PokeAPI.Pokemon
}

export default function GeneralInfo({ pokemon }: PokemonGeneralInfoParamsType) {
  const sprite =
    pokemon.sprites?.other['official-artwork']?.front_default ||
    '/assets/Pokeball300px.png'
  const pokemonTypes = pokemon.types.map(
    ({ type }) => type.name,
  ) as Array<PokemonType>

  return (
    <Flex direction="column">
      <Heading fontSize="3xl" textAlign="center">
        {pokemon.id} - {capitalize(pokemon.name)}
      </Heading>
      <Flex
        justifyContent="space-between"
        mt="5"
        direction={['column', 'column', 'column', 'row']}
      >
        <Image
          boxSize="200px"
          src={sprite}
          fallbackSrc={PokeballLoading}
          borderRadius="full"
          borderStyle="solid"
          borderWidth="medium"
          borderColor="whiteAlpha.300"
          bg="whiteAlpha.500"
          flexGrow={0}
          mx="auto"
        />
        <PokemonTypes pokemonTypes={pokemonTypes} />
        <PokemonAbilities abilities={pokemon.abilities} />
        <PokemonHeightAndWeight
          height={pokemon.height}
          weight={pokemon.weight}
        />
      </Flex>
    </Flex>
  )
}
