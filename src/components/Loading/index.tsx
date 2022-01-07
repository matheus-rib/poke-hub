import { Spinner, SpinnerProps } from '@chakra-ui/react'
import React from 'react'

export default function Loading(params?: SpinnerProps) {
  return <Spinner {...params} />
}
