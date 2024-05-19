'use client'

import { Button } from '@components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@components/ui/form'
import { Input } from '@components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useLoading } from '@hooks/useLoading'
import { userSignInProps, userSignInSchema } from '@schemas/Auth/SignIn'
import { auth } from '@services/firebase/firebase.config'
import { useUserStore } from '@store/user'
import { localPaths } from '@utils/localPaths'
import {
  browserLocalPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

export function SignInForm() {
  const { isLoading, setIsLoading } = useLoading()
  const router = useRouter()

  const form = useForm<userSignInProps>({
    resolver: zodResolver(userSignInSchema),
  })

  const onSubmit = async ({ email, password }: userSignInProps) => {
    setIsLoading((prevState) => !prevState)
    try {
      await setPersistence(auth, browserLocalPersistence)

      const { user } = await signInWithEmailAndPassword(auth, email, password)

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
      setIsLoading((prevState) => !prevState)
      router.replace(localPaths.HOME)
    } catch (error) {
      toast.error('Erro ao fazer o login. Verifique seu email e senha.')
      setIsLoading((prevState) => !prevState)
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="md:w-2/4 md:m-auto space-y-2"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Digite seu e-mail"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Digite sua senha"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full"
          style={{ margin: '1rem 0' }}
          disabled={!!isLoading}
        >
          Entrar
        </Button>
      </form>
    </Form>
  )
}
