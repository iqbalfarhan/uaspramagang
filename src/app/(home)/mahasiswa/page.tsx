import PageHeader from "@/components/app/page-header";

const MahasiswaPage = () => {
  return (
    <>
      <PageHeader title="Data mahasiswa" />
      <div className="space-y-4">
        <p>
          Halaman ini digunakan untuk menampilkan table data mahasiswa. terdapat
          kolom No, Nama mahasiswa, NIM, Kelas, Jurusan dan action. khusus kolom
          action, akan menampilkan 2 buah button untuk edit dan juga delete
          mahasiswa. selain itu terdapat tombol create mahasiswa pada bagian
          atas halaman. gunakan halaman user management sebagai contoh tampilan.
          untuk relasi nama kelas dan jurusan diambil dari table kelas sesuai
          dengan kelas_id
        </p>
        <ul className="list-disc list-inside">
          <p>nama field supabase yang digunakan untuk table mahasiswa :</p>
          <li>name (digunakan untuk nama mahasiswa)</li>
          <li>nim (digunakan untuk nim) dan</li>
          <li>kelas_id (untuk menyimpan kelas_id)</li>
        </ul>
      </div>
    </>
  );
};

export default MahasiswaPage;
