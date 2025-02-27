
import PageHeader from "@/components/app/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/lib/supabase/client";
import { Check } from "lucide-react";
import { FC } from "react";
import { updateKelas } from "./action";

interface UserEditPageProps {
  params: Promise<{ id: string }>;
}

const EditUserPage: FC<UserEditPageProps> = async ({ params }) => {
  const { id } = await params;
  const updateKelasWithId = updateKelas.bind(null, id);

  const supabase = createClient();
  const { data, error } = await supabase
    .from("kelas")
    .select("*")
    .eq("id", parseInt(id))
    .single();

  if (error) return null;

  return (
    <>
      <PageHeader title={`Edit kelas`} />
      <Card className="w-full max-w-md mx-auto">
        <form action={updateKelasWithId} className="space-y-4 mt-6">
          <CardContent className="space-y-4">
            <div>
              <Label>Nama kelas</Label>
              <Input
                placeholder="Kelas Sampean"
                name="name"
                defaultValue={data.name}
              />
            </div>
            <div>
              <Label>Jurusan</Label>
              <Input
                placeholder="Jurusan"
                name="jurusan"
                defaultValue={data.jurusan}
              />
            </div>
            <div>
              <Label>Angkatan</Label>
              <Input
                placeholder="Angkatan"
                name="angkatan"
                defaultValue={data.angkatan}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit">
              <Check />
              Simpan
            </Button>
          </CardFooter>
        </form>
      </Card>
    </>
  );
};

export default EditUserPage;
