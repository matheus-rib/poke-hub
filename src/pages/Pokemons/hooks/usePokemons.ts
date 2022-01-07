import PokeAPI from 'pokedex-promise-v2'
import { useCallback, useState } from 'react'
import useData from '../../../hooks/useData'
import pokeapi from '../../../services/pokeapi'

export type PokemonData = {
  name: string
  sprite: string
}

export type PokemonsData = Array<PokemonData>

export default function (page: number) {
  const limit = 30
  const offset = (page - 1) * limit
  const [pokemons, setPokemons] = useState<PokemonsData>()
  const [totalPages, setTotalPages] = useState(0)

  const fetchData = useCallback(() => {
    return pokeapi.fetchPokemons({ limit, offset }).then(data => {
      setTotalPages(Math.ceil(data.count / limit) || 0)
      const resources = data.results.map(e => e.url)

      return pokeapi.fetchResources(resources).then(data => {
        const mappedData = data.map((element: PokeAPI.Pokemon) => ({
          name: element.name,
          sprite: element?.sprites?.other['official-artwork']?.front_default,
        }))

        return setPokemons(mappedData)
      })
    })
  }, [offset])

  useData(fetchData)

  return {
    pokemons,
    totalPages,
  }
}
