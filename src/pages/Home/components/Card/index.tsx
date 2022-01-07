import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import CountUp from 'react-countup'
import { Link } from 'react-router-dom'

type CardParams = {
  imageSrc: string
  label: string
  count: number
  path: string
}

export default function Card({ imageSrc, label, count, path }: CardParams) {
  return (
    <Link to={path}>
      <Box
        borderRadius="3xl"
        padding="7"
        bg="gray.900"
        borderStyle="solid"
        borderColor="whiteAlpha.100"
        borderWidth="2px"
        style={{ transition: 'all .2s ease-in-out' }}
        _hover={{ transform: 'scale(1.1)' }}
      >
        <Flex direction="column" alignItems="center">
          <Image
            src={imageSrc}
            borderRadius="full"
            borderStyle="solid"
            borderColor="whiteAlpha.700"
            borderWidth="2px"
          />
          <Text marginTop="3" fontSize="lg">
            {label}:&nbsp;
            <CountUp end={count} duration={2} />
          </Text>
        </Flex>
      </Box>
    </Link>
  )
}
