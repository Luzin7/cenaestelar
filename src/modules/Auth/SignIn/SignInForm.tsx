"use client";

import { useLoading } from "@/hooks/useLoading";
import { userSignInProps, userSignInSchema } from "@/schemas/Auth/SignIn";
import { useUserStore } from "@/store/user";
import { localPaths } from "@/utils/localPaths";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export function SignInForm() {
  const { isLoading, setIsLoading } = useLoading();
  const { actions } = useUserStore();
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<userSignInProps>({
    resolver: zodResolver(userSignInSchema),
  });

  // FAZER O SISTREMA DE LOGIN
  const onSubmit = async (data: userSignInProps) => {
    setIsLoading((prevState) => !prevState);
    try {
      // const userData = await login(data);
      // actions.updateUser({
      //   name: userData?.name,
      //   id: userData?.id,
      // });

      console.log(data);
      setIsLoading((prevState) => !prevState);
      router.replace(localPaths.HOME);
    } catch (error) {
      setIsLoading((prevState) => !prevState);
      // setIsModalOpen((prev) => !prev);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex py-7 gap-7 bg flex-col w-11/12 lg:w-3/4">
        <h2 className="font-bold text-text text-2xl lg:text-3xl xl:text-4xl pt-10">
          Acessar Conta
        </h2>
        <input
          type="email"
          placeholder="E-mail"
          {...register("email")}
          autoComplete="email"
        />
        {/* {errors.email?.message !== undefined && (
          <GS.Error errorMessage={errors.email.message} />
        )} */}
        <input
          type="password"
          placeholder="Senha"
          {...register("password")}
          autoComplete="current-password"
        />
        {/* {errors.password?.message !== undefined && (
          <GS.Error errorMessage={errors.password.message} />
        )} */}
        <button type="submit" disabled={!!isLoading}>
          {isLoading ? "Aguarde..." : "Entrar"}
        </button>
      </div>
      <span className="my-8 text-primary underline text-lg hover:text-accent transition-colors ">
        <Link href={localPaths.REGISTER}>Não tenho uma conta</Link>
      </span>
    </form>
  );
}
