import { Table, Tbody, Th, Thead, Tr } from '@chakra-ui/react'
import PokeAPI from 'pokedex-promise-v2'
import React from 'react'
import MoveCell from './MoveCell'

type MoveDetailsParams = {
  moveDetails: Array<PokeAPI.VersionGroupDetail>
}

export default function MoveDetails({ moveDetails }: MoveDetailsParams) {
  return (
    <Table variant="simple" size="sm">
      <Thead>
        <Tr>
          <Th>Learned at level</Th>
          <Th>Move learn method</Th>
          <Th>Version</Th>
        </Tr>
      </Thead>
      <Tbody>
        {moveDetails.map((moveDetail, index) => (
          <MoveCell key={index} moveDetail={moveDetail} />
        ))}
      </Tbody>
    </Table>
  )
}
