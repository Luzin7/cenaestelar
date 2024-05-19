export interface NavItemProps {
  title: string
  href: string
  icon?: React.ReactNode
}

export interface HeaderNavigationProps {
  headerNavigationItems: NavItemProps[]
}
