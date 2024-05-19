'use client'

import { Button } from '@components/ui/button'
import { auth } from '@services/firebase/firebase.config'
import { useUserStore } from '@store/user'
import { localPaths } from '@utils/localPaths'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { BsGoogle } from 'react-icons/bs'
import { toast } from 'react-toastify'

export function SocialAuth() {
  const router = useRouter()

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider()

      const { user } = await signInWithPopup(auth, provider)

      useUserStore.setState({
        userState: {
          user: {
            displayName: user.displayName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
            uid: user.uid,
            isLoggedIn: true,
          },
        },
      })

      localStorage.setItem(
        'u_i',
        JSON.stringify({
          name: user.displayName,
          uid: user.uid,
          isLoggedIn: true,
        }),
      )
      localStorage.setItem('isLoggedIn', 'true')

      router.replace(localPaths.HOME)
    } catch (error) {
      toast.error('Erro ao fazer o login.')
    }
  }
  return (
    <div className="md:w-2/4 md:m-auto flex flex-col flex-wrap text-lg md:flex-row md:justify-between md:gap-4">
      <span>Ou, se preferir</span>
      <Button
        type="button"
        variant="secondary"
        onClick={handleGoogleSignIn}
        className="flex justify-center items-center gap-2 p-4 md:grow"
      >
        <BsGoogle />
        Entre com a Google
      </Button>
    </div>
  )
}
