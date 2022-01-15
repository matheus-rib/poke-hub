import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react'
import PokeAPI from 'pokedex-promise-v2'
import React from 'react'
import capitalize from '../../../../../../utils/capitalize'
import MoveDetails from './MoveDetails'

type PokemonMoveAccordionParams = {
  move: PokeAPI.MoveElement
}

export default function MoveAccordion({ move }: PokemonMoveAccordionParams) {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton _focus={{ boxShadow: 'none' }}>
          <Box flex="1" textAlign="left">
            {capitalize(move.move.name)}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <MoveDetails moveDetails={move.version_group_details} />
      </AccordionPanel>
    </AccordionItem>
  )
}
