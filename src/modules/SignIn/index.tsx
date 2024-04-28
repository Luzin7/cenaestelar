import SignInForm from "@/modules/Auth/SignIn";
import { SocialAuth } from "@/modules/Auth/SocialAuth/SocialAuth";
import { localPaths } from "@/utils/localPaths";
import Link from "next/link";
import styles from "./signIn.module.css";

export default function SignInView() {
  return (
    <div className={styles.container}>
      <div>
        <SignInForm />
        <SocialAuth />
        <div
          style={{
            margin: "2rem 0",
          }}
        >
          <span className={styles.register}>
            Ainda não tem uma conta?{" "}
            <Link href={localPaths.REGISTER}>Crie aqui.</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
