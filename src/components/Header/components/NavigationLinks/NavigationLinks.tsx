'use client'

import { HeaderNavigationProps } from '@models/HeaderNavigation'
import Link from 'next/link'

export function NavigationLinks({
  headerNavigationItems,
}: HeaderNavigationProps) {
  return (
    <nav className="flex">
      <ul>
        {headerNavigationItems.map((item) => (
          <li>
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
