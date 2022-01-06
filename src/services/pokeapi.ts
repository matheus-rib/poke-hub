import PokeAPI from 'pokedex-promise-v2'

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

  async fetchPokemons(): Promise<PokeAPI.NamedAPIResourceList> {
    return this.pokeapi.getPokemonsList()
  }
}

export default new PokeApiService()
