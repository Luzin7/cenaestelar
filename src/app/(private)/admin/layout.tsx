"use client";

import { localPaths } from "@/utils/localPaths";
import { useRouter } from "next/navigation";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const routes = useRouter();

  const adminSuperStrongVerificationThatNobodyCanPassBecauseIsSuperStrong =
    localStorage.getItem("adminSuperStrongVerification") ===
    process.env.NEXT_PUBLIC_ADMIN_SUPER_STRONG_ID;

  if (!adminSuperStrongVerificationThatNobodyCanPassBecauseIsSuperStrong) {
    return routes.replace(localPaths.SIGNIN);
  }

  return <>{children}</>;
}
