import { Th, Tr } from '@chakra-ui/react'
import React from 'react'

export default function TableColumnsHeader() {
  return (
    <Tr>
      <Th textAlign="center">Weak to</Th>
      <Th textAlign="center">Normally damaged to</Th>
      <Th textAlign="center">Resistant to</Th>
      <Th textAlign="center">Immune to</Th>
    </Tr>
  )
}
