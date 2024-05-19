import { z } from 'zod'

export const userRegisterSchema = z.object({
  email: z.string().min(1, 'O e-mail é obrigatório').email('Email inválido'),
  password: z
    .string()
    .min(1, 'A senha é obrigatória')
    .min(6, 'A senha deve conter, ao menos, 6 caracteres'),
})

export type userRegisterProps = z.infer<typeof userRegisterSchema>
