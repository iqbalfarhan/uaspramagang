import PageHeader from "@/components/app/page-header";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { createClient } from "@/lib/supabase/client";
import { Edit3, PlusCircle } from "lucide-react";
import Link from "next/link";
import DeleteMahasiswaButton from "./[id]/delete/delete-mahasiswa-page";

const MahasiswaPage = async () => {
  const supabase = createClient();
  const { data } = await supabase
    .from("mahasiswa")
    .select("*, kelas: kelas_id (*)");
  return (
    <>
      <PageHeader title="Data mahasiswa">
        <Button asChild>
          <Link href={"/mahasiswa/create"}>
            <PlusCircle />
            Tambah
          </Link>
        </Button>
      </PageHeader>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Nama Mahasiswa</TableHead>
            <TableHead>NIM</TableHead>
            <TableHead>Kelas</TableHead>
            <TableHead>Jurusan</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((mhs, index) => (
            <TableRow key={mhs.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{mhs.name}</TableCell>
              <TableCell>{mhs.nim}</TableCell>
              <TableCell>{mhs.kelas.name}</TableCell>
              <TableCell>{mhs.kelas.jurusan}</TableCell>
              <TableCell>
                <Button variant={"outline"} size={"icon"}>
                  <Link href={`/mahasiswa/${mhs.id}/edit`}>                    
                  <Edit3 />
                  </Link>
                </Button>         
                <Button variant={"outline"} size={"icon"}>
                  <DeleteMahasiswaButton mahasiswaId={mhs.id} />                
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default MahasiswaPage;
