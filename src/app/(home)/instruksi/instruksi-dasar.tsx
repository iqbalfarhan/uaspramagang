const InstruksiDasar = () => {
  return (
    <article className="prose">
      <h1>Instruksi Dasar</h1>
      <p>
        Aplikasi ini merupakan aplikasi yang digunakan untuk mengelola data
        pramagang mahasiswa LP3I Balikpapan. Aplikasi ini dibangun menggunakan
        framework Next.js dan Tailwind CSS, serta menggunakan database
        PostgreSQL dari Supabase.
      </p>

      <h2>Mengerjakan Tiket</h2>
      <ul>
        <li>
          Buat branch baru dengan nama nomor tiket dan fitur yang dikerjakan
          contoh: <code>UP-03-list-data-kelas</code>
        </li>
        <li>Kerjakan sesuai deskripsi dan kriteria tiket yang dikerjakan</li>
        <li>
          Bila sudah selesai, lakukan commit dengan awalan pesan nomor tiket
          diikuti dengan deskripsi perubahan yang dilakukan. contoh pesan commit
          : <code>UP-03: membuat list data kelas</code>
        </li>
        <li>
          buat pull request, tulis deskripsi assign dengan dengan nama kalian
          sendiri
        </li>
      </ul>

      <h2>Manipulasi Data</h2>
      <pre>
        <code>{`// mendapatkan data

import {createClient} from "@/lib/supabase/client";

const supabase = await createClient();
const {data, error} = supabase.from("users").select("*");

{data.map((item) => ...)}
`}</code>
      </pre>
      <pre>
        <code>{`// membuat data

const payload = {
  name: "John Doe",
  email: "john@example.com",
  password: "password123",
};

const {data, error} = supabase.from("users").insert(payload);`}</code>
      </pre>
      <pre>
        <code>{`// mengubah data

const payload = {
  name: "John Doe",
  email: "john@example.com",
  password: "password123",
};
const {data, error} = supabase.from("users").update(payload).eq("id", 1);`}</code>
      </pre>
      <pre>
        <code>{`// menghapus data

const {data, error} = supabase.from("users").delete().eq("id", 1);`}</code>
      </pre>
    </article>
  );
};

export default InstruksiDasar;
