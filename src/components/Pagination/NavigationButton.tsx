import { Box } from '@chakra-ui/react'
import React from 'react'

type NavigationButtonParams = {
  label: string
}

export default function NavigationButton({ label }: NavigationButtonParams) {
  return (
    <Box
      width="100%"
      maxW="25px"
      maxH="28px"
      bg="gray.900"
      borderRadius="md"
      fontWeight="bold"
      padding="2"
      mx="2"
      py="0.5"
    >
      {label}
    </Box>
  )
}
