import { Button, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import FontAwesomeIcon from '../../../../components/FontAwesomeIcon'
import { QuickNavigationInfoType } from '../../quickNavigationMenus'

export default function QuickNavigationButton({
  label,
  link,
  icon,
  onClose,
}: QuickNavigationInfoType) {
  return (
    <Link to={link} onClick={onClose}>
      <Button fontSize="xs" width="100%" my="2">
        <FontAwesomeIcon className={icon} />
        <Text ml="2">{label}</Text>
      </Button>
    </Link>
  )
}
