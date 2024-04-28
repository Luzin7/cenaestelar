import RegisterForm from "@/modules/Auth/Register";
import { SocialAuth } from "@/modules/Auth/SocialAuth/SocialAuth";
import { localPaths } from "@/utils/localPaths";
import Link from "next/link";
import styles from "./register.module.css";

export default function RegisterView() {
  return (
    <div className={styles.container}>
      <div>
        <RegisterForm />
        <SocialAuth />
        <div
          style={{
            margin: "2rem 0",
          }}
        >
          <span className={styles.register}>
            Já possui uma conta?{" "}
            <Link href={localPaths.SIGNIN}>Entre aqui.</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
