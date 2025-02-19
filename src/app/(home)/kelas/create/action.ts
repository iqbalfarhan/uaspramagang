"use server";

import { createClient } from "@/lib/supabase/client";
import { redirect } from "next/navigation";

export async function createKelas(formData: FormData) {
  const supabase = createClient();

  await supabase
    .from("kelases")
    .insert({
      name: formData.get("name"),
      jurusan: formData.get("jurusan"),
      angkatan: formData.get("angkatan"),
    })
    .then(() => {
      redirect("/kelas");
    });
}
