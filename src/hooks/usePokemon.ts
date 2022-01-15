import { Pokemon } from 'pokedex-promise-v2'
import { useCallback, useState } from 'react'
import useData from './useData'
import pokeapi from '../services/pokeapi'

export default function (
  pokemonNameOrId: string | null | undefined,
  defaultPokemon?: Pokemon,
) {
  const [pokemon, setPokemon] = useState<Pokemon | undefined>(defaultPokemon)
  const [loading, setLoading] = useState(false)
  const [errorCode, setErrorCode] = useState(0)

  const fetchData = useCallback(() => {
    setLoading(true)
    if (!pokemonNameOrId || defaultPokemon) return setLoading(false)
    return pokeapi
      .fetchPokemonByNameOrId(pokemonNameOrId.toLocaleLowerCase())
      .then(data => setPokemon(data))
      .catch(e => {
        setPokemon(undefined)
        setErrorCode(JSON.parse(JSON.stringify(e)).status)
      })
      .finally(() => setLoading(false))
  }, [defaultPokemon, pokemonNameOrId])

  useData(fetchData)

  return {
    pokemon,
    loading,
    errorCode,
  }
}
