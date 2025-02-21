"use server";

import { createClient } from "@/lib/supabase/client";
import { redirect } from "next/navigation";

export const updatePramagang = async (pramagangId: string, formData: FormData) => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("users")
    .update({
      name: formData.get("name"),
      username: formData.get("username"),
      password: formData.get("password"),
      dob: formData.get("dob"),
      gender: formData.get("gender"),
    })
    .eq("id", pramagangId)
    .select();

  if (data) {
    redirect("/pramagang");
  }

  if (error) {
    console.log(error);
  }
};
