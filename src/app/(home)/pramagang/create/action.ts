"use server";

import { createClient } from "@/lib/supabase/client";
import { redirect } from "next/navigation";

export async function createPramagang(formData: FormData) {
  const supabase = createClient();

  console.log(formData);

  await supabase
    .from("pramagang")
    .insert({
      mahasiswa_id: formData.get("mahasiswa_id"),
      lokasi: formData.get("lokasi"),
      mulai: formData.get("mulai"),
      selesai: formData.get("selesai"),
    })
    .then(() => {
      redirect("/pramagang");
    });
}
