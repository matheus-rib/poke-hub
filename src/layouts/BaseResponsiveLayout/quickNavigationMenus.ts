export default [
  { label: 'Regions', link: '/home', icon: 'fas fa-globe' },
  { label: 'Pokedexes', link: '/home', icon: 'fas fa-tablet-alt' },
  { label: 'Pokemons', link: '/home', icon: 'fas fa-dragon' },
]

export type QuickNavigationInfoType = {
  label: string
  link: string
  icon: string
  onClose?: () => void
}
