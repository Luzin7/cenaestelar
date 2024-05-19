import RegisterForm from '@components/Auth/Register'
import { SocialAuth } from '@components/Auth/SocialAuth/SocialAuth'
import { localPaths } from '@utils/localPaths'
import Link from 'next/link'

export default function RegisterView() {
  return (
    <div className="container flex flex-col justify-center h-[85vh]">
      <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center mb-8">
        Crie sua conta
      </h2>
      <div>
        <RegisterForm />
        <SocialAuth />
      </div>
      <div className="text-center my-8">
        <span className="self-start">
          Já possui uma conta?{' '}
          <Link
            href={localPaths.SIGNIN}
            className="font-bold underline text-xl transition-colors hover:text-primary"
          >
            Entre aqui.
          </Link>
        </span>
      </div>
    </div>
  )
}
