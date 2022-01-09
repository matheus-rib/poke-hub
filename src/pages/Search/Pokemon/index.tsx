import { Text } from '@chakra-ui/react'
import React from 'react'
import { Navigate } from 'react-router-dom'
import Error from '../../../components/Error'
import LoadingPage from '../../../components/Loading/LoadingPage'
import usePokemon from '../../../hooks/usePokemon'
import capitalize from '../../../utils/capitalize'
import NotFound from '../../NotFound'

type PokemonSearchParams = {
  pokemonNameOrId: string | null
}

export default function Pokemon({ pokemonNameOrId }: PokemonSearchParams) {
  const { pokemon, loading, errorCode } = usePokemon(pokemonNameOrId)

  if (loading) return <LoadingPage size="xl" />
  if (errorCode && errorCode !== 404) return <Error />

  return !pokemon ? (
    <NotFound title="Search results">
      {pokemonNameOrId ? (
        <Text fontSize="xl">
          Resource: Pokemon - Value: {capitalize(pokemonNameOrId)}
        </Text>
      ) : null}
    </NotFound>
  ) : (
    <Navigate to={`/pokemons/${pokemon.name}`} state={{ pokemon }} />
  )
}
