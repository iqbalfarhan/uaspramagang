import PageHeader from "@/components/app/page-header";

const KelasPage = () => {
  return (
    <>
      <PageHeader title="Data kelas" />
      <div>
        Halaman ini digunakan untuk menampilkan table data kelas. terdapat kolom
        id, name, jurusan, angkatan dan action. khusus kolom action, akan
        menampilkan 2 buah button untuk edit dan juga delete kelas. selain itu
        terdapat tombol create kelas pada bagian atas halaman. gunakan halaman
        user management sebagai contoh tampilan
      </div>
    </>
  );
};

export default KelasPage;
