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

// type Gen = {
//   type: PokemonType
//   effectiveness: DamageMultiplier
// } | void
// function drawRow(col1: Gen, col2: Gen) {
//   console.log({ col1, col2 })
// }

export default function PokemonProfile({
  pokemon,
  pokemonEffectiveness,
}: PokemonProfileParamsType) {
  // const iteratorWeakTo = getNextType([
  //   { types: pokemonEffectiveness['2x'], effectiveness: '2x' },
  //   { types: pokemonEffectiveness['4x'], effectiveness: '4x' },
  // ])

  // const iteratorNormalTo = getNextType([
  //   { types: pokemonEffectiveness['1x'], effectiveness: '1x' },
  // ])

  // let stillHasWeakToTypes = true
  // let stillHasNormalToTypes = true
  // while (stillHasWeakToTypes || stillHasNormalToTypes) {
  //   const nextWeakToValue = iteratorWeakTo.next().value
  //   const nextNormalToValue = iteratorNormalTo.next().value

  //   if (!nextWeakToValue) stillHasWeakToTypes = false
  //   if (!nextNormalToValue) stillHasNormalToTypes = false

  //   if (stillHasWeakToTypes || stillHasNormalToTypes) {
  //     drawRow(nextWeakToValue, nextNormalToValue)
  //   }
  // }

  return (
    <Container>
      <Box textAlign="center" mb="5">
        <Heading>Pokémon</Heading>
      </Box>
      <Card padding="6">
        <GeneralInfo pokemon={pokemon} />
      </Card>
      <Card mt="5">
        <FurtherInfo pokemonEffectiveness={pokemonEffectiveness} />
      </Card>
    </Container>
  )
}
