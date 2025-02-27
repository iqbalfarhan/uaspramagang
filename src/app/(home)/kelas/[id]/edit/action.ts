"use server";

import { createClient } from "@/lib/supabase/client";
import { redirect } from "next/navigation";

export const updateKelas = async (kelasId: string, formData: FormData) => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("kelas")
    .update({
      name: formData.get("name"),
      jurusan: formData.get("jurusan"),
      angkatan: formData.get("angkatan"),
    })
    .eq("id", kelasId)
    .select();

    if (data) {
        redirect("/kelas")
    }

     if (error) {
    console.log(error);
  }
    };
    
