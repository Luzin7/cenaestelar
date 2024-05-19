import SignInForm from '@components/Auth/SignIn'
import { SocialAuth } from '@components/Auth/SocialAuth/SocialAuth'
import { localPaths } from '@utils/localPaths'
import Link from 'next/link'

export default function SignInView() {
  return (
    <div className="container flex flex-col justify-center h-[85vh]">
      <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center mb-8">
        Entre com sua conta
      </h2>
      <div>
        <SignInForm />
        <SocialAuth />
      </div>
      <div className="text-center my-8">
        <span className="self-start">
          Ainda não tem uma conta?{' '}
          <Link
            href={localPaths.REGISTER}
            className="font-bold underline text-xl transition-colors hover:text-primary"
          >
            Crie aqui.
          </Link>
        </span>
      </div>
    </div>
  )
}
