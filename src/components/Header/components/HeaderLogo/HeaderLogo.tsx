import { localPaths } from '@utils/localPaths'
import Link from 'next/link'
import { BsStars } from 'react-icons/bs'

export function HeaderLogo() {
  return (
    <Link href={localPaths.HOME}>
      <div className="flex justify-center items-center gap-2 text-2xl text-primary">
        <BsStars />
      </div>
    </Link>
  )
}
