import {
  DamageType,
  EffectivenessType,
  PokemonType,
  StrongToRelationType,
  TypeEffectivenessCounter,
  WeakToRelationType,
} from './types'
import typesMaps from './typesMap'

export default function (pokemonTypes: Array<PokemonType>): EffectivenessType {
  const sortedEffectivenesses = sortEffectivenesses(pokemonTypes)
  return calculateEffectiveness(sortedEffectivenesses)
}

function sortEffectivenesses(pokemonTypes: Array<PokemonType>) {
  const effectivenesses = {
    doubleDamage: [] as Array<PokemonType>,
    halfDamage: [] as Array<PokemonType>,
    noDamage: [] as Array<PokemonType>,
  }

  pokemonTypes.forEach(type => {
    const currentType = typesMaps[type]

    effectivenesses.doubleDamage = effectivenesses.doubleDamage.concat(
      currentType.takes.doubleDamage,
    )
    effectivenesses.halfDamage = effectivenesses.halfDamage.concat(
      currentType.takes.halfDamage,
    )
    effectivenesses.noDamage = effectivenesses.noDamage.concat(
      currentType.takes.noDamage,
    )
  })

  return effectivenesses
}

function calculateEffectiveness(
  effectivenesses: DamageType,
): EffectivenessType {
  const sanitizedDamages = sanitizeDoubleAndHalfDamages(effectivenesses)
  const weakToDamages = calculateWeakToTypes(sanitizedDamages.doubleDamage)
  const strongToDamages = calculateStrongToTypes(sanitizedDamages.halfDamage)
  const normalDamageto = normalDamagedTypes({
    ...sanitizedDamages,
    noDamage: effectivenesses.noDamage,
  })

  return {
    '0x': effectivenesses.noDamage,
    '1/4x': strongToDamages['1/4x'],
    '1/2x': strongToDamages['1/2x'],
    '1x': normalDamageto,
    '2x': weakToDamages['2x'],
    '4x': weakToDamages['4x'],
  }
}

function sanitizeDoubleAndHalfDamages(pokemonTypes: DamageType) {
  let sanitizedDoubleDamage = pokemonTypes.doubleDamage
  let sanitizedHalfDamage = pokemonTypes.halfDamage

  pokemonTypes.noDamage.forEach(typeToFilter => {
    sanitizedDoubleDamage = pokemonTypes.doubleDamage.filter(
      type => type !== typeToFilter,
    )

    sanitizedHalfDamage = pokemonTypes.halfDamage.filter(
      type => type !== typeToFilter,
    )
  })

  return {
    doubleDamage: sanitizedDoubleDamage.filter(
      type => !sanitizedHalfDamage.includes(type),
    ),
    halfDamage: sanitizedHalfDamage.filter(
      type => !sanitizedDoubleDamage.includes(type),
    ),
  }
}

function countTypesOccurence(pokemonTypes: Array<PokemonType>) {
  const typeCounts = {} as TypeEffectivenessCounter

  pokemonTypes.forEach(type => {
    typeCounts[type] = (typeCounts[type] || 0) + 1
  })

  return typeCounts
}

function calculateWeakToTypes(pokemonTypes: Array<PokemonType>) {
  const typesOccurence = countTypesOccurence(pokemonTypes)
  const damageRelation = {
    '2x': [],
    '4x': [],
  } as WeakToRelationType

  const types = Object.keys(typesOccurence) as Array<PokemonType>
  types.forEach(type => {
    const currentTypeCount = typesOccurence[type] as number
    currentTypeCount > 1
      ? damageRelation['4x'].push(type)
      : damageRelation['2x'].push(type)
  })

  return damageRelation
}

function calculateStrongToTypes(pokemonTypes: Array<PokemonType>) {
  const typesOccurence = countTypesOccurence(pokemonTypes)
  const damageRelation = {
    '1/2x': [],
    '1/4x': [],
  } as StrongToRelationType

  const types = Object.keys(typesOccurence) as Array<PokemonType>
  types.forEach(type => {
    const currentTypeCount = typesOccurence[type] as number
    currentTypeCount > 1
      ? damageRelation['1/4x'].push(type)
      : damageRelation['1/2x'].push(type)
  })

  return damageRelation
}

function normalDamagedTypes(pokemonTypes: DamageType) {
  const pokemonAllTypes = Object.keys(typesMaps) as Array<PokemonType>
  const affectedTypes = [
    ...pokemonTypes.doubleDamage,
    ...pokemonTypes.halfDamage,
    ...pokemonTypes.noDamage,
  ]

  const normalDamagedToTypes = pokemonAllTypes.filter(
    type => !affectedTypes.includes(type),
  )

  return normalDamagedToTypes
}
