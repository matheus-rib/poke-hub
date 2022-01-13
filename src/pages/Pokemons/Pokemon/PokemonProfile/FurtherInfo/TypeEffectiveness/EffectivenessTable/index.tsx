import { Table, Tbody, Thead } from '@chakra-ui/react'
import React from 'react'
import {
  DamageMultiplier,
  EffectivenessType,
  PokemonType,
} from '../../../../../../../utils/typeEffectiveness/types'
import useSortData from './hooks/useSortData'
import Row from './Row'
import TableColumnsHeader from './TableColumnsHeader'

type EffectivenessTableParams = {
  pokemonEffectiveness: EffectivenessType
}

type AttributeType = {
  type: PokemonType
  effectiveness?: DamageMultiplier
} | void

export type RowType = {
  weakTo?: AttributeType
  normalTo?: AttributeType
  resistantTo?: AttributeType
  immuneTo?: AttributeType
}
export type RowsType = Array<RowType | undefined | void>

export default function EffectivenessTable({
  pokemonEffectiveness,
}: EffectivenessTableParams) {
  const { rows } = useSortData(pokemonEffectiveness)

  return (
    <Table variant="simple" size="sm">
      <Thead>
        <TableColumnsHeader />
      </Thead>
      <Tbody
        _before={{
          content: '"@"',
          display: 'block',
          lineHeight: '10px',
          textIndent: '-9999999px',
        }}
      >
        {rows.map((row, index) => (
          <Row key={index} row={row} />
        ))}
      </Tbody>
    </Table>
  )
}
