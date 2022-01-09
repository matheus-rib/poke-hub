import { Text } from '@chakra-ui/react'
import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { SearchType } from '../../components/Search'
import capitalize from '../../utils/capitalize'
import NotFound from '../NotFound'
import Pokemon from './Pokemon'

export default function Search() {
  const [searchParams] = useSearchParams()
  const type = searchParams.get('type') as SearchType
  const name = searchParams.get('name')

  switch (type) {
    case 'pokemon':
      return <Pokemon pokemonNameOrId={name} />

    default:
      return (
        <NotFound>
          {name && type ? (
            <Text fontSize="xl">
              Resource: {capitalize(type)} - Value: {capitalize(name)}
            </Text>
          ) : null}
        </NotFound>
      )
  }
}
