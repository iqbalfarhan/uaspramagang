"use server";

import { createClient } from "@/lib/supabase/client";
import { redirect } from "next/navigation";

export async function deleteUser(formData: FormData) {
  const supabase = createClient();

  const userId = formData.get("userId");
  await supabase
    .from("users")
    .delete()
    .eq("id", userId)
    .then(() => {
      redirect("/user");
    });
}
