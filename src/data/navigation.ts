export interface NavLink {
  href: string;
  label: string;
}

export interface NavDropdown {
  label: string;
  items: NavLink[];
}

export type NavItem = NavLink | NavDropdown;

export function isDropdown(item: NavItem): item is NavDropdown {
  return 'items' in item;
}

export const navigationItems: NavItem[] = [
  { href: '/', label: 'Inicio' },
  {
    label: 'Sobre nosotros',
    items: [
      { href: '/el-dojo', label: 'El dojo' },
      { href: '/nuestra-historia', label: 'Nuestra historia' },
    ],
  },
  {
    label: 'Disciplinas',
    items: [
      { href: '/disciplinas', label: 'Todas las disciplinas' },
      { href: '/disciplinas/kung-fu', label: 'Kung Fu' },
      { href: '/disciplinas/tai-chi', label: 'Tai Chi' },
    ],
  },
  { href: '/horarios', label: 'Horarios' },
  { href: '/contacto', label: 'Contacto' },
];

