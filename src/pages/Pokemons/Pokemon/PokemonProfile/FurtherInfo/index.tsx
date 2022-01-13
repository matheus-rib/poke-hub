import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import { EffectivenessType } from '../../../../../utils/typeEffectiveness/types'
import Moves from './Moves'
import TypeEffectiveness from './TypeEffectiveness'

type FurtherInfoParams = {
  pokemonEffectiveness: EffectivenessType
}

export default function FurtherInfo({
  pokemonEffectiveness,
}: FurtherInfoParams) {
  return (
    <Tabs isFitted variant="line">
      <TabList mb="1em">
        <Tab _focus={{ boxShadow: 'none' }}>Type effectiveness</Tab>
        <Tab _focus={{ boxShadow: 'none' }}>Moves</Tab>
      </TabList>
      <TabPanels>
        <TabPanel padding="0.5">
          <TypeEffectiveness pokemonEffectiveness={pokemonEffectiveness} />
        </TabPanel>
        <TabPanel>
          <Moves />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
