import { Button, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import FontAwesomeIcon from '../../../../components/FontAwesomeIcon'

type QuickNavigationButtonType = {
  label: string
  link: string
  icon: string
  onClose: () => void
}

export default function QuickNavigationButton({
  label,
  link,
  icon,
  onClose,
}: QuickNavigationButtonType) {
  return (
    <Link to={link} onClick={onClose}>
      <Button fontSize="xs" width="100%" my="2">
        <FontAwesomeIcon className={icon} />
        <Text ml="2">{label}</Text>
      </Button>
    </Link>
  )
}
