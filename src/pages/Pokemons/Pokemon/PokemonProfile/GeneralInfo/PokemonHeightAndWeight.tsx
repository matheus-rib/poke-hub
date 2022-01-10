import { Box, GridItem, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import heightAndWeightScaleCalculator from '../../../../../utils/heightAndWeightScaleCalculator'

type PokemonHeightAndWeightParams = {
  height: number
  weight: number
}

export default function PokemonHeightAndWeight({
  height,
  weight,
}: PokemonHeightAndWeightParams) {
  return (
    <Box textAlign="center" flexGrow={2}>
      <Text>Biometrics:</Text>
      <SimpleGrid columns={1}>
        <GridItem>
          <Text>Height: {heightAndWeightScaleCalculator(height)}m</Text>
        </GridItem>
        <GridItem>
          <Text>Weight: {heightAndWeightScaleCalculator(weight)}kg</Text>
        </GridItem>
      </SimpleGrid>
    </Box>
  )
}
