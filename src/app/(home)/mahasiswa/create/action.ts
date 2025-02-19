"use server"

import { createClient } from "@/lib/supabase/client";
import { redirect } from "next/navigation";

export async function createMahasiswa (formData : FormData) {
    const supabase = createClient();

    await supabase
       .from("mahasiswa")
       .insert({
            name: formData.get("name"),
            nim: formData.get("nim"),
            kelas_id: formData.get("kelas"),
        })
        .then(() => {
            redirect("/mahasiswa");
        });
}