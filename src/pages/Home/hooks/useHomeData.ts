import { useState } from 'react'
import useData from '../../../hooks/useData'
import pokeapi from '../../../services/pokeapi'

export default function () {
  const [pokemonsCount, setPokemonsCount] = useState(0)
  const [regionsCount, setRegionsCount] = useState(0)
  const [pokedexesCount, setPokedexesCount] = useState(0)

  const fetchData = () => {
    if (!pokemonsCount) {
      return pokeapi.fetchPokemons().then(data => setPokemonsCount(data.count))
    }
    if (!regionsCount) {
      return pokeapi.fetchRegions().then(data => setRegionsCount(data.count))
    }
    if (!pokedexesCount) {
      return pokeapi
        .fetchPokedexes()
        .then(data => setPokedexesCount(data.count))
    }
  }

  useData(fetchData)

  return {
    pokemonsCount,
    regionsCount,
    pokedexesCount,
  }
}
