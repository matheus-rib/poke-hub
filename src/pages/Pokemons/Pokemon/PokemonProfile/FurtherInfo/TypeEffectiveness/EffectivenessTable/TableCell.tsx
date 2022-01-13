import { Td } from '@chakra-ui/react'
import React from 'react'

type TableCellParams = {
  children: JSX.Element | null
}

export default function TableCell({ children }: TableCellParams) {
  return (
    <Td p="1" borderBottom="none">
      {children}
    </Td>
  )
}
