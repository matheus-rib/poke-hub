import { Box, GridItem, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import PokeAPI from 'pokedex-promise-v2'
import React from 'react'
import capitalize from '../../../../utils/capitalize'

type PokemonAbilitesParams = {
  abilities: Array<PokeAPI.AbilityElement>
}

export default function PokemonAbilities({ abilities }: PokemonAbilitesParams) {
  return (
    <Box textAlign="center" flexGrow={2}>
      <Text>Abilities:</Text>
      <SimpleGrid columns={2}>
        {abilities.map(ability => (
          <GridItem key={ability.slot} margin="2">
            <Heading fontSize="md" fontWeight="normal">
              {capitalize(ability.ability.name)}
              {ability.is_hidden ? (
                <Text fontSize="sm" color="whiteAlpha.500">
                  (hidden)
                </Text>
              ) : null}
            </Heading>
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  )
}
