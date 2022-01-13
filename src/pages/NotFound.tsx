import { Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import SadPikachu from '../assets/SadPikachu400px.png'

type DefaultSearchParams = {
  children?: JSX.Element | Array<JSX.Element> | null
  title?: string
}

export default function NotFound({
  children,
  title = 'Not Found',
}: DefaultSearchParams) {
  return (
    <Flex direction="column" alignItems="center" justifyContent="center">
      <Heading>{title}</Heading>
      <Image
        src={SadPikachu}
        borderRadius="full"
        borderStyle="solid"
        borderColor="whiteAlpha.300"
        borderWidth="thick"
        my="5"
      />
      <Text fontSize="3xl">
        Pikachu could not find what you were looking for.
      </Text>
      {children}
    </Flex>
  )
}
