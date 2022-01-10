import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { PokemonType } from '../../../../../utils/typeEffectiveness/types'
import typesMap from '../../../../../utils/typeEffectiveness/typesMap'
import TypeChip from '../../../components/TypeChip'

type PokemonTypesParam = {
  pokemonTypes: Array<PokemonType>
}
export default function PokemonTypes({ pokemonTypes }: PokemonTypesParam) {
  return (
    <Box textAlign="center" flexGrow={2}>
      <Text>Types:</Text>
      <Flex justifyContent="center">
        {pokemonTypes.map(type => (
          <Box key={type} m="2">
            <TypeChip type={type} color={typesMap[type].color} />
          </Box>
        ))}
      </Flex>
    </Box>
  )
}
