"use client";

import { Form } from "@/components/Form";
import { useLoading } from "@/hooks/useLoading";
import { userRegisterProps, userRegisterSchema } from "@/schemas/Auth/register";
import { auth } from "@/services/firebase/firebase.config";
import { useUserStore } from "@/store/user";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { useForm } from "react-hook-form";
import styles from "../style/formAuth.module.css";

export function RegisterForm() {
  const { isLoading, setIsLoading } = useLoading();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<userRegisterProps>({
    resolver: zodResolver(userRegisterSchema),
  });

  const onSubmit = async ({ email, password }: userRegisterProps) => {
    setIsLoading((prevState) => !prevState);
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

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
      });

      sendEmailVerification(user);

      alert("Falta pouco! Verifique seu email e confirme sua conta.");

      setIsLoading((prevState) => !prevState);
    } catch (error) {
      setIsLoading((prevState) => !prevState);
      // setIsModalOpen((prev) => !prev);
    }
  };
  return (
    <Form.Wrapper onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form_content_wrapper}>
        <h2>Crie sua Conta</h2>
        <label htmlFor="email">E-mail</label>
        <Form.Input
          type="email"
          placeholder="E-mail"
          {...register("email")}
          autoComplete="email"
          id="email"
        />
        {errors.email?.message !== undefined && (
          <Form.Error errorMessage={errors.email.message} />
        )}
        <label htmlFor="password">Senha (mínimo 6 caracteres)</label>
        <Form.Input
          type="password"
          placeholder="Senha"
          {...register("password")}
          autoComplete="current-password"
          id="password"
        />
        {errors.password?.message !== undefined && (
          <Form.Error errorMessage={errors.password.message} />
        )}
        <Form.Button type="submit" disabled={!!isLoading}>
          {isLoading ? "Criando..." : "Criar conta"}
        </Form.Button>
      </div>
    </Form.Wrapper>
  );
}
