"use server";

import { createClient } from "@/lib/supabase/client";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const cookie = await cookies();
  const supabase = createClient();

  const username = formData.get("username");
  const password = formData.get("password");

  const { data } = await supabase
    .from("users")
    .select("*")
    .eq("username", username)
    .eq("password", password)
    .single();

  console.log(data);

  if (data) {
    cookie.set("authorized", "true", {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      path: "/",
    });

    const { password, ...user } = data;

    if (password !== "expected_hashed_password") {
      console.log("Login berhasil");
    }

    cookie.set("user", JSON.stringify(user), {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      path: "/",
    });

    redirect("/dashboard");
  }
}

export async function logout() {
  const cookie = await cookies();
  cookie.set("authorized", "");
  redirect("/login");
}

export async function getCurrentUser() {
  const cookie = await cookies();
  const userCookie = cookie.get("user")?.value;

  if (userCookie) {
    const user = JSON.parse(userCookie);
    return user;
  }

  return null;
}
