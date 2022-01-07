import { Box } from '@chakra-ui/react'
import React from 'react'

export default function Container({
  children,
}: {
  children: JSX.Element | Array<JSX.Element>
}) {
  return (
    <Box w="100%" maxW="1500px" mx="auto">
      {children}
    </Box>
  )
}
