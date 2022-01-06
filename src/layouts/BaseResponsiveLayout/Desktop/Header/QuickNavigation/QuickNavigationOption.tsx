import { MenuItem, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import FontAwesomeIcon from '../../../../../components/FontAwesomeIcon'
import { QuickNavigationInfoType } from '../../../quickNavigationMenus'

export default function QuickNavigationOption({
  label,
  icon,
  link,
}: QuickNavigationInfoType) {
  return (
    <MenuItem as={Link} to={link}>
      <FontAwesomeIcon className={icon} />
      <Text ml="2">{label}</Text>
    </MenuItem>
  )
}
