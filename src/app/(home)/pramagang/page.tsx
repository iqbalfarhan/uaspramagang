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
import { formatTanggal } from "@/lib/utils";
import { Pencil, PlusCircle } from "lucide-react";
import Link from "next/link";
import DeletePramagangButton from "./[id]/delete/delete-pramagang-button";

const PramagangPage = async () => {
  const supabase = createClient();
  const { data } = await supabase
    .from("pramagang")
    .select("*, mahasiswa: mahasiswa_id (*, kelas: kelas_id (*))");

  return (
    <>
      <PageHeader title="Data pramagang">
        <Button asChild>
          <Link href={"/pramagang/create"}>
            <PlusCircle />
            Tambah
          </Link>
        </Button>
      </PageHeader>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Nama mahasiswa</TableHead>
            <TableHead>Kelas</TableHead>
            <TableHead>Lokasi</TableHead>
            <TableHead>Tanggal magang</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((mhs, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{mhs.mahasiswa.name}</TableCell>
              <TableCell>{mhs.mahasiswa.kelas.name}</TableCell>
              <TableCell>{mhs.lokasi}</TableCell>
              <TableCell>
                {formatTanggal(mhs.mulai)} {"-"} {formatTanggal(mhs.selesai)}
              </TableCell>
              <TableCell>
                <Button size={"icon"} asChild variant={"ghost"}>
                  <Link href={`/pramagang/${mhs.id}/edit`}>
                    <Pencil />
                  </Link>
                </Button>
                <DeletePramagangButton pramagangId={mhs.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default PramagangPage;
