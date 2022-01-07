export default [
  { label: 'Pokemons', link: '/pokemons', icon: 'fas fa-dragon fa-fw' },
  { label: 'Pokedexes', link: '/pokedexes', icon: 'fas fa-tablet-alt fa-fw' },
  { label: 'Regions', link: '/regions', icon: 'fas fa-globe fa-fw' },
]

export type QuickNavigationInfoType = {
  label: string
  link: string
  icon: string
  onClose?: () => void
}
