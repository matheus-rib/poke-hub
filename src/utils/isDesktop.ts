import { useBreakpointValue } from '@chakra-ui/react'

export default function () {
  return useBreakpointValue({ base: false, md: true })
}
