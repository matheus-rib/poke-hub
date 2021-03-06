export default [
  {
    label: 'Explore',
    icon: 'fas fa-compass',
    color: 'blue.600',
    path: '/explore',
    key: 'explore',
  },
  {
    label: 'About',
    icon: 'fas fa-info-circle',
    color: 'purple.700',
    path: '/about',
    key: 'about',
  },
]

export type MenuNavigationInfoType = {
  label: string
  icon: string
  color: string
  path: string
  key: string
}
