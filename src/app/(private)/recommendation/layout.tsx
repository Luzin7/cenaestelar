'use client'

import { useUserStore } from '@store/user'
import { localPaths } from '@utils/localPaths'
import { useRouter } from 'next/navigation'

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const router = useRouter()
  if (typeof window !== 'undefined') {
    const isAuth = useUserStore.getState().userState.user.isLoggedIn

    if (!isAuth) {
      return router.replace(localPaths.SIGNIN)
    }
  }
  return children
}
