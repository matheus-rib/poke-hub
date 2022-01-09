export type PokemonType =
  | 'normal'
  | 'fighting'
  | 'flying'
  | 'poison'
  | 'ground'
  | 'rock'
  | 'bug'
  | 'ghost'
  | 'steel'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'psychic'
  | 'ice'
  | 'dragon'
  | 'dark'
  | 'fairy'

export type DamageType = {
  doubleDamage: Array<PokemonType | never>
  halfDamage: Array<PokemonType | never>
  noDamage: Array<PokemonType | never>
}

export type TypesMapType = {
  [key in PokemonType]: {
    takes: DamageType
    deals: DamageType
    color: string
  }
}

export type DamageMultiplier = '4x' | '2x' | '1x' | '1/2x' | '1/4x' | '0x'

export type EffectivenessType = {
  [key in DamageMultiplier]: Array<PokemonType | never>
}

export type TypeEffectivenessCounter = {
  [key in PokemonType]: number
}

export type WeakToRelationType = {
  '2x': Array<PokemonType>
  '4x': Array<PokemonType>
}

export type StrongToRelationType = {
  '1/2x': Array<PokemonType>
  '1/4x': Array<PokemonType>
}
