import { GridItem, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import Container from '../../../../components/Container'
import Card from '../Card'

type HomeBodyParams = {
  pokemonsCount: number
  pokedexesCount: number
  regionsCount: number
}

export default function Body({
  pokemonsCount,
  pokedexesCount,
  regionsCount,
}: HomeBodyParams) {
  return (
    <Container>
      <>
        <Heading size="md" textAlign="center" marginTop="20">
          Currently holding a total of:
        </Heading>
        <SimpleGrid columns={[1, 1, 3]} spacing={20} padding="5" mt="5">
          <GridItem w="100%" mx="auto" maxW={400}>
            <Card
              imageSrc="assets/Pikachu200px.png"
              label="Pokemons"
              count={pokemonsCount}
              path="/pokemons"
            />
          </GridItem>
          <GridItem w="100%" mx="auto" maxW={400}>
            <Card
              imageSrc="assets/Pokedex200px.png"
              label="Pokedexes"
              count={pokedexesCount}
              path="/pokedexes"
            />
          </GridItem>
          <GridItem w="100%" mx="auto" maxW={400}>
            <Card
              imageSrc="assets/Kanto200px.png"
              label="Regions"
              count={regionsCount}
              path="/regions"
            />
          </GridItem>
        </SimpleGrid>
        <Heading size="md" textAlign="center" marginTop="14">
          And much more!
        </Heading>
      </>
    </Container>
  )
}
