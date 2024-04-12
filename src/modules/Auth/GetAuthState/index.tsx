"use client";

import { auth } from "@/services/firebase/firebase.config";
import { useUserStore } from "@/store/user";
import { onAuthStateChanged } from "firebase/auth";
import React from "react";

export default function GetAuthState({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      return;
    }

    if (user.emailVerified) {
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

      localStorage.setItem("isLoggedIn", "true");
    }
  });

  return children;
}
