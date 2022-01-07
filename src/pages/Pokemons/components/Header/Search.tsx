import React from 'react'
import { Box, Input, Text } from '@chakra-ui/react'
import FontAwesomeIcon from '../../../../components/FontAwesomeIcon'
export default function Search() {
  return (
    <Box position="relative">
      <Input placeholder="Search by name" borderRadius="2xl" />
      <Text position="absolute" top="9px" right="12px" color="whiteAlpha.300">
        <FontAwesomeIcon className="fas fa-search" />
      </Text>
    </Box>
  )
}
