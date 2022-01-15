import { Box, Heading } from '@chakra-ui/react'
import PokeAPI from 'pokedex-promise-v2'
import React from 'react'
import Card from '../../../../components/Card'
import Container from '../../../../components/Container'
import { EffectivenessType } from '../../../../utils/typeEffectiveness/types'
import FurtherInfo from './FurtherInfo'
import GeneralInfo from './GeneralInfo'

type PokemonProfileParamsType = {
  pokemon: PokeAPI.Pokemon
  pokemonEffectiveness: EffectivenessType
}

export default function PokemonProfile({
  pokemon,
  pokemonEffectiveness,
}: PokemonProfileParamsType) {
  return (
    <Container>
      <Box textAlign="center" mb="5">
        <Heading>Pokémon</Heading>
      </Box>
      <Card padding="6">
        <GeneralInfo pokemon={pokemon} />
      </Card>
      <Card mt="5">
        <FurtherInfo
          pokemonEffectiveness={pokemonEffectiveness}
          moves={pokemon.moves}
        />
      </Card>
    </Container>
  )
}
