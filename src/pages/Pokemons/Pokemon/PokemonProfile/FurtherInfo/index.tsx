import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import PokeAPI from 'pokedex-promise-v2'
import React from 'react'
import { EffectivenessType } from '../../../../../utils/typeEffectiveness/types'
import Moves from './Moves'
import TypeEffectiveness from './TypeEffectiveness'

type FurtherInfoParams = {
  pokemonEffectiveness: EffectivenessType
  moves: Array<PokeAPI.MoveElement>
}

export default function FurtherInfo({
  pokemonEffectiveness,
  moves,
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
          <Moves moves={moves} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
