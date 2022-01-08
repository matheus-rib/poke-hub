import { GridItem, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Container from '../../components/Container'
import LoadingPage from '../../components/Loading/LoadingPage'
import Pagination from '../../components/Pagination'
import Card from './components/Card'
import Header from './components/Header'
import usePokemons from './hooks/usePokemons'

export default function Pokemons() {
  const [searchParams, setSearchParams] = useSearchParams()
  const page = parseInt(searchParams.get('page') || '1')

  const setPage = (page: number) => {
    setSearchParams({ page: page.toString() })
  }
  const { pokemons, totalPages, loading } = usePokemons(page)

  if ((!pokemons && !totalPages) || loading) return <LoadingPage size="xl" />

  return (
    <Container>
      <Header />
      <SimpleGrid columns={[2, 3, 5]} spacing={5} padding="1">
        {pokemons?.map(pokemon => (
          <GridItem key={pokemon.name} height="150px">
            <Card id={pokemon.id} name={pokemon.name} sprite={pokemon.sprite} />
          </GridItem>
        ))}
      </SimpleGrid>
      <Pagination totalPages={totalPages} setPage={setPage} page={page} />
    </Container>
  )
}
