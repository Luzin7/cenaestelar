"use client";

import { auth } from "@/services/firebase/firebase.config";
import { useUserStore } from "@/store/user";
import { localPaths } from "@/utils/localPaths";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { BsGoogle } from "react-icons/bs";
import styles from "./socialAuth.module.css";

export function SocialAuth() {
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();

      const { user } = await signInWithPopup(auth, provider);

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

      router.replace(localPaths.HOME);
    } catch (error) {
      alert("Erro ao fazer o login.");
    }
  };
  return (
    <div className={styles.social_wrapper}>
      <span>Ou, se preferir</span>
      <button type="button" onClick={handleGoogleSignIn}>
        <BsGoogle />
        Entre com a Google
      </button>
    </div>
  );
}
