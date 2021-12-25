import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { DrawerParams } from '.'
import FontAwesomeIcon from '../../../components/FontAwesomeIcon'
import menuLinks from '../menuLinks'

export default function MenuLinks({ onClose }: DrawerParams) {
  return (
    <Flex direction="column">
      {menuLinks.map(menuLink => {
        return (
          <Link to={menuLink.path} key={menuLink.path} onClick={onClose}>
            <Flex my="1" alignItems="baseline">
              <Text color={menuLink.color}>
                <FontAwesomeIcon className={menuLink.icon} />
              </Text>
              <Text mx="2">{menuLink.label}</Text>
            </Flex>
          </Link>
        )
      })}
    </Flex>
  )
}
