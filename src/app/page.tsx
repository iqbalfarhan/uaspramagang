"use client";

import { redirect, usePathname } from "next/navigation";

const RootPage = () => {
  const pathname = usePathname();
  if (pathname === "/") {
    redirect("/dashboard");
  }

  return <div></div>;
};

export default RootPage;
