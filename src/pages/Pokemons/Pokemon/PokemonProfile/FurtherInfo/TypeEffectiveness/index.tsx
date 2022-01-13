import { Box } from '@chakra-ui/react'
import React from 'react'
import { EffectivenessType } from '../../../../../../utils/typeEffectiveness/types'
import EffectivenessTable from './EffectivenessTable'

type TypeEffectivenessParams = {
  pokemonEffectiveness: EffectivenessType
}

export default function TypeEffectiveness({
  pokemonEffectiveness,
}: TypeEffectivenessParams) {
  return (
    <Box
      overflowY="auto"
      css={{
        '&::-webkit-scrollbar': {
          height: '5px',
        },
        '&::-webkit-scrollbar-track': {
          width: '3px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'var(--chakra-colors-whiteAlpha-300)',
          borderRadius: '5px',
        },
      }}
    >
      <EffectivenessTable pokemonEffectiveness={pokemonEffectiveness} />
    </Box>
  )
}
