import DatePicker from "@/components/app/date-picker";
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
import { Check } from "lucide-react";
import { createPramagang } from "./action";

const CreatePramagangPage = async () => {
  const supabase = createClient();
  const { data } = await supabase.from("mahasiswa").select("*");

  return (
    <>
      <PageHeader title="Create Pramagang" />
      <Card className="w-full max-w-md mx-auto">
        <form action={createPramagang}>
          <CardContent className="space-y-4 mt-6">
            <div>
              <Label>Nama lengkap</Label>
              <Select name="mahasiswa_id">
                <SelectTrigger>
                  <SelectValue placeholder="pilih mahasiswa" />
                </SelectTrigger>
                <SelectContent>
                  {data?.map((mhs) => (
                    <SelectItem key={mhs.id} value={mhs.id}>
                      {mhs.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Lokasi kerja</Label>
              <Input placeholder="Contoh Front office" name="lokasi" />
            </div>
            <div>
              <Label>Tanggal masuk</Label>
              <DatePicker name="mulai" />
            </div>
            <div>
              <Label>Tanggal selesai</Label>
              <DatePicker name="selesai" />
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

export default CreatePramagangPage;
