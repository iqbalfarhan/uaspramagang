import PageHeader from "@/components/app/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";
import { createKelas } from "./action";

const createKelasPage = () => {
  return (
    <>
      <PageHeader title="Create Kelas" />
      <Card className="w-full max-w-md mx-auto">
        <form action={createKelas}>
          <CardContent className="space-y-4 mt-6">
            <div>
              <Label>Nama Kelas</Label>
              <Input placeholder="Nama Kelas" name="name" />
            </div>
            <div>
              <Label>Jurusan</Label>
              <Input placeholder="Jurusan" name="jurusan" />
            </div>
            <div>
              <Label>Angkatan</Label>
              <Input placeholder="Tahun Angkatan" name="angkatan" />
            </div>
          </CardContent>
            <CardFooter>
              <Button type="submit">
                <Check />
                Simpan Kelas
              </Button>
            </CardFooter>
        </form>
      </Card>
    </>
  );
};

export default createKelasPage;
