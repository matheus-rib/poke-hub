import { Box, BoxProps, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import capitalize from '../../../utils/capitalize'
import {
  DamageMultiplier,
  PokemonType,
} from '../../../utils/typeEffectiveness/types'

type TypeChipParams = {
  type: PokemonType
  multiplier?: DamageMultiplier
  color: string
  multiplierFontSize?: string
} & BoxProps

export default function TypeChip({
  color,
  multiplier,
  type,
  multiplierFontSize = 'xs',
  ...props
}: TypeChipParams) {
  return (
    <Box bg={color} width="28" p="1" borderRadius="full" maxH="10" {...props}>
      <Flex>
        <Box flexGrow={4} textAlign="center">
          {capitalize(type)}
        </Box>
        {multiplier ? (
          <Box
            flexGrow={0}
            bg="white"
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="24px"
          >
            <Text
              color="gray.900"
              fontSize={multiplierFontSize}
              fontWeight="medium"
            >
              {multiplier}
            </Text>
          </Box>
        ) : null}
      </Flex>
    </Box>
  )
}
