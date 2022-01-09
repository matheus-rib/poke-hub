import PokeAPI, { Pokemon } from 'pokedex-promise-v2'

type PageParams = {
  limit?: number
  offset?: number
}

type ResourcesParams = Array<string>

class PokeApiService {
  pokeapi: PokeAPI

  constructor() {
    this.pokeapi = new PokeAPI()
  }

  async fetchRegions(): Promise<PokeAPI.NamedAPIResourceList> {
    return this.pokeapi.getRegionsList()
  }

  async fetchPokedexes(): Promise<PokeAPI.NamedAPIResourceList> {
    return this.pokeapi.getPokedexList()
  }

  async fetchPokemons(
    pageParams?: PageParams,
  ): Promise<PokeAPI.NamedAPIResourceList> {
    return this.pokeapi.getPokemonsList(pageParams)
  }

  async fetchResources(resources: ResourcesParams) {
    return this.pokeapi.getResource(resources)
  }

  async fetchPokemonByNameOrId(pokemonNameOrId: string | number) {
    return this.pokeapi.getPokemonByName(pokemonNameOrId) as Promise<Pokemon>
  }
}

export default new PokeApiService()
