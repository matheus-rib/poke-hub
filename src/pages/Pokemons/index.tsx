import { GridItem, SimpleGrid } from '@chakra-ui/react'
import React, { useState } from 'react'
import Container from '../../components/Container'
import Pagination from '../../components/Pagination'
import Card from './components/card'
import usePokemons from './hooks/usePokemons'

export default function Pokemons() {
  const [page, setPage] = useState(1)
  const { pokemons, totalPages } = usePokemons(page)

  return (
    <Container>
      <SimpleGrid columns={[2, 3, 5]} spacing={5} padding="1" mt="5">
        {pokemons?.map(pokemon => (
          <GridItem key={pokemon.name}>
            <Card name={pokemon.name} sprite={pokemon.sprite} />
          </GridItem>
        ))}
      </SimpleGrid>
      <Pagination totalPages={totalPages} setPage={setPage} />
    </Container>
  )
}
