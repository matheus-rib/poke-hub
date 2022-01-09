import { Text } from '@chakra-ui/react'
import PokeAPI from 'pokedex-promise-v2'
import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Error from '../../../components/Error'
import LoadingPage from '../../../components/Loading/LoadingPage'
import usePokemon from '../../../hooks/usePokemon'
import capitalize from '../../../utils/capitalize'
import NotFound from '../../NotFound'

type PokemonLocationType = {
  state?: {
    pokemon?: PokeAPI.Pokemon
  }
}

export default function Pokemon() {
  const location = useLocation() as PokemonLocationType
  const { idOrName } = useParams()
  const { pokemon, loading, errorCode } = usePokemon(
    idOrName,
    location.state?.pokemon,
  )

  if (loading) return <LoadingPage size="xl" />
  if (errorCode && errorCode !== 404) return <Error />
  if (!pokemon)
    return (
      <NotFound title="Search results">
        {idOrName ? (
          <Text fontSize="xl">
            Resource: Pokemon - Value: {capitalize(idOrName)}
          </Text>
        ) : null}
      </NotFound>
    )

  return <div>{JSON.stringify(pokemon)}</div>
}
