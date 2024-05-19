import { headerNavigationConfig } from '@config/headerNavigation'
import { localPaths } from '@utils/localPaths'
import Link from 'next/link'
import { TfiSearch } from 'react-icons/tfi'
import HeaderLogo from './components/HeaderLogo'
import { NavigationLinks } from './components/NavigationLinks/NavigationLinks'
import UserIcon from './components/UserIcon'

export function Header() {
  return (
    <header className="container flex flex-wrap justify-between items-center py-4">
      <div className="flex items-center gap-5">
        <HeaderLogo />
        <NavigationLinks
          headerNavigationItems={headerNavigationConfig.headerNavigationItems}
        />
      </div>
      <div className="flex items-center gap-4">
        <Link href={localPaths.SEARCH}>
          <TfiSearch className="fill-primary text-2xl" />
        </Link>
        <UserIcon />
      </div>
    </header>
  )
}
