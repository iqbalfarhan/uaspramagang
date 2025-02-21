"use server";

import { createClient } from "@/lib/supabase/client";
import { redirect } from "next/navigation";

export async function deletePramagang(formData: FormData) {
  const supabase = createClient();

  const pramagangId = formData.get("pramagangId");
  await supabase
    .from("pramagang")
    .delete()
    .eq("id", pramagangId)
    .then(() => {
      redirect("/pramagang");
    });
}
