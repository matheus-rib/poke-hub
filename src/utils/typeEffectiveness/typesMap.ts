import { TypesMapType } from './types'

export default {
  normal: {
    takes: {
      doubleDamage: ['fighting'],
      halfDamage: [],
      noDamage: ['ghost'],
    },
    deals: {
      doubleDamage: [],
      halfDamage: ['rock', 'steel'],
      noDamage: ['ghost'],
    },
    color: '',
  },
  fighting: {
    takes: {
      doubleDamage: ['flying', 'psychic', 'fairy'],
      halfDamage: ['rock', 'bug', 'dark'],
      noDamage: [],
    },
    deals: {
      doubleDamage: ['normal', 'rock', 'steel', 'ice', 'dark'],
      halfDamage: ['flying', 'poison', 'bug', 'psychic', 'fairy'],
      noDamage: ['ghost'],
    },
    color: '',
  },
  flying: {
    takes: {
      doubleDamage: ['rock', 'electric', 'ice'],
      halfDamage: ['fighting', 'bug', 'grass'],
      noDamage: ['ground'],
    },
    deals: {
      doubleDamage: ['fighting', 'bug', 'grass'],
      halfDamage: ['rock', 'steel', 'electric'],
      noDamage: [],
    },
    color: '',
  },
  poison: {
    takes: {
      doubleDamage: ['ground', 'psychic'],
      halfDamage: ['fighting', 'poison', 'bug', 'grass', 'fairy'],
      noDamage: [],
    },
    deals: {
      doubleDamage: ['grass', 'fairy'],
      halfDamage: ['poison', 'ground', 'rock', 'ghost'],
      noDamage: ['steel'],
    },
    color: '',
  },
  ground: {
    takes: {
      doubleDamage: ['water', 'grass', 'ice'],
      halfDamage: ['poison', 'rock'],
      noDamage: ['electric'],
    },
    deals: {
      doubleDamage: ['poison', 'rock', 'steel', 'fire', 'electric'],
      halfDamage: ['bug', 'grass'],
      noDamage: ['flying'],
    },
    color: '',
  },
  rock: {
    takes: {
      doubleDamage: ['fighting', 'ground', 'steel', 'water', 'grass'],
      halfDamage: ['normal', 'flying', 'poison', 'fire'],
      noDamage: [],
    },
    deals: {
      doubleDamage: ['flying', 'bug', 'fire', 'ice'],
      halfDamage: ['fighting', 'ground', 'steel'],
      noDamage: [],
    },
    color: '',
  },
  bug: {
    takes: {
      doubleDamage: ['flying', 'rock', 'fire'],
      halfDamage: ['fighting', 'ground', 'grass'],
      noDamage: [],
    },
    deals: {
      doubleDamage: ['grass', 'psychic', 'dark'],
      halfDamage: [
        'fighting',
        'flying',
        'poison',
        'ghost',
        'steel',
        'fire',
        'fairy',
      ],
      noDamage: [],
    },
    color: '',
  },
  ghost: {
    takes: {
      doubleDamage: ['ghost', 'dark'],
      halfDamage: ['poison', 'bug'],
      noDamage: ['normal', 'fighting'],
    },
    deals: {
      doubleDamage: ['ghost', 'psychic'],
      halfDamage: ['dark'],
      noDamage: ['normal'],
    },
    color: '',
  },
  steel: {
    takes: {
      doubleDamage: ['fighting', 'ground', 'fire'],
      halfDamage: [
        'normal',
        'flying',
        'rock',
        'bug',
        'steel',
        'grass',
        'psychic',
        'ice',
        'dragon',
        'fairy',
      ],
      noDamage: ['poison'],
    },
    deals: {
      doubleDamage: ['rock', 'ice', 'fairy'],
      halfDamage: ['steel', 'fire', 'water', 'electric'],
      noDamage: [],
    },
    color: '',
  },
  fire: {
    takes: {
      doubleDamage: ['ground', 'rock', 'water'],
      halfDamage: ['bug', 'steel', 'fire', 'grass', 'ice', 'fairy'],
      noDamage: [],
    },
    deals: {
      doubleDamage: ['bug', 'steel', 'grass', 'ice'],
      halfDamage: ['rock', 'fire', 'water', 'dragon'],
      noDamage: [],
    },
    color: '',
  },
  water: {
    takes: {
      doubleDamage: ['grass', 'electric'],
      halfDamage: ['steel', 'fire', 'water', 'ice'],
      noDamage: [],
    },
    deals: {
      doubleDamage: ['ground', 'rock', 'fire'],
      halfDamage: ['water', 'grass', 'dragon'],
      noDamage: [],
    },
    color: '',
  },
  grass: {
    takes: {
      doubleDamage: ['flying', 'poison', 'bug', 'fire', 'ice'],
      halfDamage: ['ground', 'water', 'grass', 'electric'],
      noDamage: [],
    },
    deals: {
      doubleDamage: ['ground', 'rock', 'water'],
      halfDamage: [
        'flying',
        'poison',
        'bug',
        'steel',
        'fire',
        'grass',
        'dragon',
      ],
      noDamage: [],
    },
    color: '',
  },
  electric: {
    takes: {
      doubleDamage: ['ground'],
      halfDamage: ['flying', 'steel', 'electric'],
      noDamage: [],
    },
    deals: {
      doubleDamage: ['flying', 'water'],
      halfDamage: ['grass', 'electric', 'dragon'],
      noDamage: ['ground'],
    },
    color: '',
  },
  psychic: {
    takes: {
      doubleDamage: ['bug', 'ghost', 'dark'],
      halfDamage: ['fighting', 'psychic'],
      noDamage: [],
    },
    deals: {
      doubleDamage: ['fighting', 'poison'],
      halfDamage: ['steel', 'psychic'],
      noDamage: ['dark'],
    },
    color: '',
  },
  ice: {
    takes: {
      doubleDamage: ['fighting', 'rock', 'steel', 'fire'],
      halfDamage: ['ice'],
      noDamage: [],
    },
    deals: {
      doubleDamage: ['flying', 'ground', 'grass', 'dragon'],
      halfDamage: ['steel', 'fire', 'water', 'ice'],
      noDamage: [],
    },
    color: '',
  },
  dragon: {
    takes: {
      doubleDamage: ['ice', 'dragon', 'fairy'],
      halfDamage: ['fire', 'water', 'grass', 'electric'],
      noDamage: [],
    },
    deals: {
      doubleDamage: ['dragon'],
      halfDamage: ['steel'],
      noDamage: ['fairy'],
    },
    color: '',
  },
  dark: {
    takes: {
      doubleDamage: ['fighting', 'bug', 'fairy'],
      halfDamage: ['ghost', 'dark'],
      noDamage: ['psychic'],
    },
    deals: {
      doubleDamage: ['ghost', 'psychic'],
      halfDamage: ['fighting', 'dark', 'fairy'],
      noDamage: [],
    },
    color: '',
  },
  fairy: {
    takes: {
      doubleDamage: ['poison', 'steel'],
      halfDamage: ['fighting', 'bug', 'dark'],
      noDamage: ['dragon'],
    },
    deals: {
      doubleDamage: ['fighting', 'dragon', 'dark'],
      halfDamage: ['poison', 'steel', 'fire'],
      noDamage: [],
    },
    color: '',
  },
} as TypesMapType
