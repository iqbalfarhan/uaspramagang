"use server";

import { createClient } from "@/lib/supabase/client";
import { redirect } from "next/navigation";

export const updateMahasiswa = async (
  mahasiswaId: string,
  formData: FormData,
) => {
  const supabase = createClient();

  const { error } = await supabase
    .from("mahasiswa")
    .update({
      name: formData.get("name"),
      nim: formData.get("nim"),
      kelas_id: formData.get("kelas_id"), // Match the name attribute from the form
    })
    .eq("id", parseInt(mahasiswaId)) // Convert ID to number
    .select();

  if (error) {
    console.log(error);
    return;
  }

  redirect("/mahasiswa");
};
