import { Td, Tr } from '@chakra-ui/react'
import PokeAPI from 'pokedex-promise-v2'
import React from 'react'
import capitalize from '../../../../../../utils/capitalize'

type MoveCellParams = {
  moveDetail: PokeAPI.VersionGroupDetail
}

export default function MoveCell({ moveDetail }: MoveCellParams) {
  return (
    <Tr>
      <Td>{moveDetail.level_learned_at}</Td>
      <Td>{capitalize(moveDetail.move_learn_method.name)}</Td>
      <Td>{capitalize(moveDetail.version_group.name)}</Td>
    </Tr>
  )
}
