"use client";

import { Form } from "@/components/Form";
import { useLoading } from "@/hooks/useLoading";
import { userSignInProps, userSignInSchema } from "@/schemas/Auth/SignIn";
import { auth } from "@/services/firebase/firebase.config";
import { useUserStore } from "@/store/user";
import { localPaths } from "@/utils/localPaths";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  browserLocalPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import styles from "../style/formAuth.module.css";

export function SignInForm() {
  const { isLoading, setIsLoading } = useLoading();
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<userSignInProps>({
    resolver: zodResolver(userSignInSchema),
  });

  const onSubmit = async ({ email, password }: userSignInProps) => {
    setIsLoading((prevState) => !prevState);
    try {
      await setPersistence(auth, browserLocalPersistence);

      const { user } = await signInWithEmailAndPassword(auth, email, password);

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
      });

      setIsLoading((prevState) => !prevState);
      router.replace(localPaths.HOME);
    } catch (error) {
      alert("Erro ao fazer o login. Verifique seu email e senha.");

      setIsLoading((prevState) => !prevState);
      // setIsModalOpen((prev) => !prev);
    }
  };
  return (
    <Form.Wrapper onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form_content_wrapper}>
        <h2>Acessar Conta</h2>
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
        <label htmlFor="password">Senha</label>
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
          {isLoading ? "Aguarde..." : "Entrar"}
        </Form.Button>
      </div>
    </Form.Wrapper>
  );
}
