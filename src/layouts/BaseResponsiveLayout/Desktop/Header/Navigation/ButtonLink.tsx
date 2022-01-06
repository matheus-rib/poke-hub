import { Button, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import FontAwesomeIcon from '../../../../../components/FontAwesomeIcon'
import { MenuNavigationInfoType } from '../../../menuLinks'

export default function ButtonLink({
  color,
  icon,
  label,
  path,
}: MenuNavigationInfoType) {
  return (
    <Link to={path}>
      <Button _focus={{ boxShadow: 'none' }}>
        <Text color={color}>
          <FontAwesomeIcon className={icon} />
        </Text>
        <Text mx="2">{label}</Text>
      </Button>
    </Link>
  )
}
