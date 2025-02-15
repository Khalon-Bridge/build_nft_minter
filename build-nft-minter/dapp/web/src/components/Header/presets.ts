import { NavItem } from '../../types'
import { routes } from '@redwoodjs/router'
export const NAV_ITEMS: () => Array<NavItem> = () => [
  {
    label: 'Tokens',
    href: routes.tokens(),
  },
  {
    label: 'Collections',
    href: routes.collections(),
  },
  {
    label: 'Assets',
    href: routes.assets(),
  },
]
