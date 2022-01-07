import { Flex, SpinnerProps } from '@chakra-ui/react'
import React from 'react'
import Loading from '.'

export default function LoadingPage(params?: SpinnerProps) {
  return (
    <Flex minH="100vh" minW="100vw" justifyContent="center" alignItems="center">
      <Loading {...params} />
    </Flex>
  )
}
