import {
  DamageMultiplier,
  PokemonType,
} from '../../../../../../../utils/typeEffectiveness/types'

export type NextTypeEffectivenessParam = Array<{
  types: Array<PokemonType | never>
  effectiveness: DamageMultiplier
}>

export default function* (typesAndEffectiveness: NextTypeEffectivenessParam) {
  for (const typeAndEffectiveness of typesAndEffectiveness) {
    const effectiveness = typeAndEffectiveness.effectiveness
    for (const type of typeAndEffectiveness.types) {
      yield { type, effectiveness }
    }
  }
}
