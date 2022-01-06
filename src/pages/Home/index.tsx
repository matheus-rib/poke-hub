import { Box } from '@chakra-ui/react'
import React from 'react'
import Body from './components/Body'
import Header from './components/Header'
import useHomeData from './hooks/useHomeData'

export default function Home() {
  const { pokemonsCount, regionsCount, pokedexesCount } = useHomeData()

  return (
    <Box>
      <Header />
      <Body
        pokemonsCount={pokemonsCount}
        regionsCount={regionsCount}
        pokedexesCount={pokedexesCount}
      />
    </Box>
  )
}
