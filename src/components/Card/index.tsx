import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'

type CardTypeParams = {
  children: JSX.Element | Array<JSX.Element> | string
} & BoxProps

export default function Card({ children, ...props }: CardTypeParams) {
  return (
    <Box
      p="2"
      borderRadius="xl"
      borderStyle="solid"
      borderWidth="medium"
      borderColor="whiteAlpha.300"
      {...props}
    >
      {children}
    </Box>
  )
}
