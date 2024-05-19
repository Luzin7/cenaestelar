'use client'

import { useUserStore } from '@store/user'
import { localPaths } from '@utils/localPaths'
import Link from 'next/link'
import { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import styles from './userIcon.module.css'

export function UserIcon() {
  const { userState } = useUserStore()
  const [isDropdownActive, setIsDropdownActive] = useState<boolean>(false)

  return (
    <>
      {userState.user.isLoggedIn ? (
        <div
          className="relative flex justify-center items-center gap-2 text-2xl border border-primary rounded-full p-2 cursor-pointer"
          onClick={() => setIsDropdownActive(!isDropdownActive)}
          onBlur={() => setIsDropdownActive(false)}
        >
          <FaUser className="fill-primary" />
          <div
            className={styles.dropdown}
            id={isDropdownActive ? styles.dropdown_active : ''}
          >
            <Link href={localPaths.RECOMMENDATION} className={styles.icon_link}>
              Recomendar
            </Link>
            {/* <Link href={localPaths.HOME} className={styles.icon_link}>
              Sair
            </Link> */}
          </div>
        </div>
      ) : (
        <Link href={localPaths.SIGNIN}>
          <div className="relative flex justify-center items-center gap-2 text-2xl border border-primary rounded-full p-2 cursor-pointer">
            <FaUser className="fill-primary" />
          </div>
        </Link>
      )}
    </>
  )
}
