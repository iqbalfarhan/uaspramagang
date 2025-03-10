import PageHeader from "@/components/app/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createClient } from "@/lib/supabase/client";
import { CheckIcon } from "lucide-react";
import { FC } from "react";
import { updateMahasiswa } from "./action";

interface MahasiswaEditPageProps {
  params: Promise<{ id: string }>;
}

const EditMahasiswaPage: FC<MahasiswaEditPageProps> = async ({ params }) => {
  const { id } = await params;
  const updateMahasiswaWithId = updateMahasiswa.bind(null, id);

  const supabase = createClient();
  
  // Fetch mahasiswa data
  const { data: mahasiswa, error: mahasiswaError } = await supabase
    .from("mahasiswa")
    .select("*, kelas: kelas_id (*)")
    .eq("id", parseInt(id))
    .single();

  // Fetch all kelas data
  const { data: kelasData } = await supabase
    .from("kelas")
    .select("*");

  if (mahasiswaError) return null;

  return (
    <>
      <PageHeader title="Edit Mahasiswa" />
      <Card className="w-full max-w-sm mx-auto">
        <form action={updateMahasiswaWithId}>
          <CardContent className="space-y-4 mt-6">
            <div>
              <Label>Nama Mahasiswa</Label>
              <Input
                placeholder="Mahasiswa's full name"
                name="name"
                defaultValue={mahasiswa.name}
              />
            </div>
            <div>
              <Label>NIM</Label>
              <Input
                placeholder="Nim"
                name="nim"
                defaultValue={mahasiswa.nim}
              />
            </div>
            <div>
              <Label>Pilih Kelas</Label>
              <Select name="kelas_id" defaultValue={mahasiswa.kelas_id?.toString()}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Kelas" />
                </SelectTrigger>
                <SelectContent>
                  {kelasData?.map((kelas) => (
                    <SelectItem key={kelas.id} value={kelas.id.toString()}>
                      {kelas.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit">
              <CheckIcon />
              Simpan
            </Button>
          </CardFooter>
        </form>
      </Card>
    </>
  );
};

export default EditMahasiswaPage;
