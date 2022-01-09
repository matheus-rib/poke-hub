import { Box, Input, Text } from '@chakra-ui/react'
import React, { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FontAwesomeIcon from '../../components/FontAwesomeIcon'
import qs from 'qs'

export type SearchType = 'pokemon'

type SearchParams = {
  type: SearchType
  placeholder?: string
}

export default function Search({ type, placeholder = 'Search' }: SearchParams) {
  const navigateTo = useNavigate()
  const [color, setColor] = useState('whiteAlpha.300')
  const [name, setName] = useState('')

  const onInputFocus = () => setColor('blue.300')
  const onInputBlur = () => setColor('whiteAlpha.300')
  const navigate = () => navigateTo(`/search?${qs.stringify({ type, name })}`)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    navigate()
  }

  return (
    <form onSubmit={handleSubmit} action="/search">
      <Box position="relative">
        <Input
          placeholder={placeholder}
          borderRadius="2xl"
          onFocus={onInputFocus}
          onBlur={onInputBlur}
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Text
          position="absolute"
          top="9px"
          right="12px"
          zIndex="modal"
          color={color}
          transition="transition: all .2s ease-in-out"
          onClick={navigate}
        >
          <FontAwesomeIcon
            className="fas fa-search"
            style={{ cursor: 'pointer' }}
          />
        </Text>
      </Box>
    </form>
  )
}
