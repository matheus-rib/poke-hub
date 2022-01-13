import { useCallback, useState } from 'react'
import { RowsType } from '..'
import useData from '../../../../../../../../hooks/useData'
import { EffectivenessType } from '../../../../../../../../utils/typeEffectiveness/types'
import getNextType from '../getNextType'

export default function (pokemonEffectiveness: EffectivenessType) {
  const [loading, setLoading] = useState(false)
  const [rows, setRows] = useState<RowsType>([])

  const sortData = useCallback(() => {
    setLoading(true)
    const sortedData = [] as RowsType
    const iteratorWeakTo = getNextType([
      { types: pokemonEffectiveness['4x'], effectiveness: '4x' },
      { types: pokemonEffectiveness['2x'], effectiveness: '2x' },
    ])

    const iteratorNormalTo = getNextType([
      {
        types: pokemonEffectiveness['1x'],
        effectiveness: '1x',
      },
    ])

    const iteratorResistantTo = getNextType([
      { types: pokemonEffectiveness['1/2x'], effectiveness: '1/2x' },
      {
        types: pokemonEffectiveness['1/4x'],
        effectiveness: '1/4x',
      },
    ])

    const iteratorImmuneTo = getNextType([
      { types: pokemonEffectiveness['0x'], effectiveness: '0x' },
    ])
    let stillHasWeakToTypes = true
    let stillHasNormalToTypes = true
    let stillHasResistantToTypes = true
    let stillHasImmuneToType = true

    while (
      stillHasWeakToTypes ||
      stillHasNormalToTypes ||
      stillHasResistantToTypes ||
      stillHasImmuneToType
    ) {
      const nextWeakToValue = iteratorWeakTo.next().value
      const nextNormalToValue = iteratorNormalTo.next().value
      const nextResistantToValue = iteratorResistantTo.next().value
      const nextImmuneToValue = iteratorImmuneTo.next().value

      if (!nextWeakToValue) stillHasWeakToTypes = false
      if (!nextNormalToValue) stillHasNormalToTypes = false
      if (!nextResistantToValue) stillHasResistantToTypes = false
      if (!nextImmuneToValue) stillHasImmuneToType = false

      if (
        nextWeakToValue ||
        nextNormalToValue ||
        nextResistantToValue ||
        nextImmuneToValue
      ) {
        sortedData.push({
          weakTo: nextWeakToValue,
          normalTo: nextNormalToValue,
          resistantTo: nextResistantToValue,
          immuneTo: nextImmuneToValue,
        })
      }
    }

    setRows(sortedData)
    setLoading(false)
  }, [pokemonEffectiveness])

  useData(sortData)

  return {
    rows,
    loading,
  }
}
