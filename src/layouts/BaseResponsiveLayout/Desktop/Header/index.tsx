import { Flex, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import HomeLink from './HomeLink'
import Navigation from './Navigation'
import QuickNavigation from './QuickNavigation'

export default function Header() {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6} padding="5">
      <GridItem w="100%" h="10" style={{ paddingTop: '5px' }}>
        <HomeLink />
      </GridItem>
      <GridItem w="100%" h="10">
        <Flex justifyContent="center">
          <QuickNavigation />
        </Flex>
      </GridItem>
      <GridItem w="100%" h="10">
        <Flex justifyContent="end">
          <Navigation />
        </Flex>
      </GridItem>
    </Grid>
  )
}
