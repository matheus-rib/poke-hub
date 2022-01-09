import { Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

type DefaultSearchParams = {
  children?: JSX.Element | Array<JSX.Element> | null
}

export default function Error({ children }: DefaultSearchParams) {
  return (
    <Flex direction="column" alignItems="center" justifyContent="center">
      <Heading>Error</Heading>
      <Image
        src="/assets/ConfusedPiplup400px.png"
        borderRadius="full"
        borderStyle="solid"
        borderColor="whiteAlpha.300"
        borderWidth="thick"
        my="5"
      />
      <Text fontSize="3xl">Piplup does not know what happened.</Text>
      {children}
    </Flex>
  )
}
