export default [
  { label: 'Pokemons', link: '/home', icon: 'fas fa-dragon fa-fw' },
  { label: 'Pokedexes', link: '/home', icon: 'fas fa-tablet-alt fa-fw' },
  { label: 'Regions', link: '/home', icon: 'fas fa-globe fa-fw' },
]

export type QuickNavigationInfoType = {
  label: string
  link: string
  icon: string
  onClose?: () => void
}
