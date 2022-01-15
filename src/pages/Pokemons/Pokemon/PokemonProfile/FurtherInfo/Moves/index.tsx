import { Accordion } from '@chakra-ui/react'
import PokeAPI from 'pokedex-promise-v2'
import React from 'react'
import MoveAccordion from './MoveAccordion'

type PokemonMovesParams = {
  moves: Array<PokeAPI.MoveElement>
}

export default function Moves({ moves }: PokemonMovesParams) {
  moves.sort((a, b) => {
    if (a.move.name < b.move.name) {
      return -1
    }
    if (a.move.name > b.move.name) {
      return 1
    }
    return 0
  })

  return (
    <Accordion allowToggle>
      {moves.map(move => (
        <MoveAccordion key={move.move.url} move={move} />
      ))}
    </Accordion>
  )
}
