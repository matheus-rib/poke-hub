import { Text } from '@chakra-ui/react'
import PokeAPI from 'pokedex-promise-v2'
import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Error from '../../../components/Error'
import LoadingPage from '../../../components/Loading/LoadingPage'
import usePokemon from '../../../hooks/usePokemon'
import capitalize from '../../../utils/capitalize'
import effectivenessCalculator from '../../../utils/typeEffectiveness/effectivenessCalculator'
import { PokemonType } from '../../../utils/typeEffectiveness/types'
import NotFound from '../../NotFound'
import PokemonProfile from './PokemonProfile'

type PokemonLocationType = {
  state?: {
    pokemon?: PokeAPI.Pokemon
  }
}

export default function Pokemon() {
  const location = useLocation() as PokemonLocationType
  const { idOrName } = useParams()
  const { pokemon, errorCode, loading } = usePokemon(
    idOrName,
    location.state?.pokemon,
  )

  if (errorCode && errorCode !== 404) return <Error />

  if (!pokemon && !loading && errorCode === 404) {
    return (
      <NotFound title="Pokémon">
        {idOrName ? (
          <Text fontSize="xl">
            Resource: Pokemon - Value: {capitalize(idOrName)}
          </Text>
        ) : null}
      </NotFound>
    )
  }

  if (pokemon) {
    const pokemonTypes = pokemon.types.map(
      type => type.type.name,
    ) as Array<PokemonType>
    const calculatedTypes = effectivenessCalculator(pokemonTypes)

    return (
      <PokemonProfile
        pokemon={pokemon}
        pokemonEffectiveness={calculatedTypes}
      />
    )
  }

  return <LoadingPage size="xl" />
}
