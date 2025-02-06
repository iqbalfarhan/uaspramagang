"use server";

import { createClient } from "@/lib/supabase/client";
import { redirect } from "next/navigation";

export const updateUser = async (userId: string, formData: FormData) => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("users")
    .update({
      name: formData.get("name"),
      username: formData.get("username"),
      password: formData.get("password"),
    })
    .eq("id", userId)
    .select();

  if (data) {
    redirect("/user");
  }

  if (error) {
    console.log(error);
  }
};
