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
import { userRegisterProps, userRegisterSchema } from '@schemas/Auth/register'
import { auth } from '@services/firebase/firebase.config'
import { useUserStore } from '@store/user'
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth'
import { useForm } from 'react-hook-form'

export function RegisterForm() {
  const { isLoading, setIsLoading } = useLoading()

  const form = useForm<userRegisterProps>({
    resolver: zodResolver(userRegisterSchema),
  })

  const onSubmit = async ({ email, password }: userRegisterProps) => {
    setIsLoading((prevState) => !prevState)
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      )

      useUserStore.setState({
        userState: {
          user: {
            displayName: user.displayName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
            uid: user.uid,
            isLoggedIn: false,
          },
        },
      })

      sendEmailVerification(user)

      alert('Falta pouco! Verifique seu email e confirme sua conta.')

      setIsLoading((prevState) => !prevState)
    } catch (error) {
      setIsLoading((prevState) => !prevState)
      // setIsModalOpen((prev) => !prev);
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
