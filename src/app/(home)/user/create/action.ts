"use server";

import { createClient } from "@/lib/supabase/client";
import { redirect } from "next/navigation";

export async function createUser(formData: FormData) {
  const supabase = createClient();

  await supabase
    .from("users")
    .insert({
      name: formData.get("name"),
      username: formData.get("username"),
      password: formData.get("password"),
      dob: formData.get("dob"),
      gender: formData.get("gender"),
    })
    .then(() => {
      redirect("/user");
    });
}
