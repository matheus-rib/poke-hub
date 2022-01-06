import { Flex } from '@chakra-ui/react'
import React from 'react'
import AppFooter from '../../AppFooter'

export default function Footer() {
  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        bottom: 0,
        backgroundColor: 'var(--chakra-colors-gray-800)',
      }}
    >
      <Flex justifyContent="flex-end" pr="5">
        <AppFooter />
      </Flex>
    </div>
  )
}
