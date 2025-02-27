"use server";

import { createClient } from "@/lib/supabase/client";
import { redirect } from "next/navigation";

export async function deleteKelas(formData: FormData) {
  const supabase = createClient();

  const kelasId = formData.get("kelasId");
  await supabase
    .from("kelas")
    .delete()
    .eq("id", kelasId)
    .then(() => {
      redirect("/kelas");
    });
}
