import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import PokeAPI from 'pokedex-promise-v2'
import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../../components/Card'
import Container from '../../../../components/Container'
import FontAwesomeIcon from '../../../../components/FontAwesomeIcon'
import LoadingPage from '../../../../components/Loading/LoadingPage'
import Search from '../../../../components/Search'
import usePokemon from '../../../../hooks/usePokemon'
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
  const previousPokemon = usePokemon((pokemon.id - 1).toString())
  const nextPokemon = usePokemon((pokemon.id + 1).toString())

  if (previousPokemon.loading || nextPokemon.loading) return <LoadingPage />

  return (
    <Container>
      <SimpleGrid columns={3} pb="5">
        <Heading fontSize="md" my="auto" textAlign="left">
          {previousPokemon.pokemon ? (
            <Link to={`/pokemons/${previousPokemon.pokemon.name}`}>
              <FontAwesomeIcon className="fas fa-chevron-left" /> Previous
            </Link>
          ) : null}
        </Heading>
        <Heading textAlign="center">Pokémon</Heading>
        <Heading fontSize="md" my="auto" textAlign="right">
          {nextPokemon.pokemon ? (
            <Link to={`/pokemons/${nextPokemon.pokemon.name}`}>
              Next <FontAwesomeIcon className="fas fa-chevron-right" />
            </Link>
          ) : null}
        </Heading>
      </SimpleGrid>
      <Box textAlign="center" mb="5">
        <Search type="pokemon" placeholder="Search by name or ID" />
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
