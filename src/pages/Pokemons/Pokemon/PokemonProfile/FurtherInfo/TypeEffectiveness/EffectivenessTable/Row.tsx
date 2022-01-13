import { Tr } from '@chakra-ui/react'
import React from 'react'
import { RowType } from '.'
import typesMap from '../../../../../../../utils/typeEffectiveness/typesMap'
import TypeChip from '../../../../../components/TypeChip'
import TableCell from './TableCell'

type RowParams = {
  row: void | RowType | undefined
}

export default function Row({ row }: RowParams) {
  const weakTo = row?.weakTo
  const normalTo = row?.normalTo
  const resistantTo = row?.resistantTo
  const immuneTo = row?.immuneTo

  return (
    <Tr>
      <TableCell>
        {weakTo ? (
          <TypeChip
            mx="auto"
            color={typesMap[weakTo.type].color}
            type={weakTo.type}
            multiplier={weakTo?.effectiveness}
          />
        ) : null}
      </TableCell>
      <TableCell>
        {normalTo ? (
          <TypeChip
            mx="auto"
            color={typesMap[normalTo.type].color}
            type={normalTo.type}
            multiplier={normalTo?.effectiveness}
          />
        ) : null}
      </TableCell>
      <TableCell>
        {resistantTo ? (
          <TypeChip
            mx="auto"
            color={typesMap[resistantTo.type].color}
            type={resistantTo.type}
            multiplierFontSize="xx-small"
            multiplier={resistantTo?.effectiveness}
          />
        ) : null}
      </TableCell>
      <TableCell>
        {immuneTo ? (
          <TypeChip
            mx="auto"
            color={typesMap[immuneTo.type].color}
            type={immuneTo.type}
          />
        ) : null}
      </TableCell>
    </Tr>
  )
}
