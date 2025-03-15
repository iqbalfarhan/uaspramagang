"use server";

import { createClient } from "@/lib/supabase/client";
import { redirect } from "next/navigation";

export async function deleteMahasiswa(formData: FormData) {
  const supabase = createClient();

  const mahasiswaId = formData.get("mahasiswaId");
  await supabase
    .from("mahasiswa")
    .delete()
    .eq("id", mahasiswaId)
    .then(() => {
      redirect("/mahasiswa");
    });
}
