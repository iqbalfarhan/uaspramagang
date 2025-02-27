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
import { Pencil, PlusCircle, Trash } from "lucide-react";
import Link from "next/link";

const KelasPage = async () => {
  const supabase = createClient();
  const { data: kelas } = await supabase.from("kelas").select().order("id");

  return (
    <>
      <PageHeader title="Data kelas">
        <Button asChild>
          <Link href={"/kelas/create"}>
            <PlusCircle />
            Tambah
          </Link>
        </Button>
      </PageHeader>

      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Nama Kelas</TableHead>
            <TableHead>Jurusan</TableHead>
            <TableHead>Tahun Angkatan</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {kelas?.map((kelas, index) => (
            <TableRow key={kelas.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{kelas.name}</TableCell>
              <TableCell>{kelas.jurusan}</TableCell>
              <TableCell>{kelas.angkatan}</TableCell>
              <TableCell>
                <Button size={"icon"} asChild variant={"ghost"}>
                  <Link href={`/kelas/${kelas.id}/edit`}>
                  <Pencil />
                  </Link>
                </Button>
                <Button variant={"outline"}>
                  <Trash />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default KelasPage;
