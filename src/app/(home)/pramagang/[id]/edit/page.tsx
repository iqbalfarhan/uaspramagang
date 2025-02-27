import DatePicker from "@/components/app/date-picker";
import PageHeader from "@/components/app/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/lib/supabase/client";
import { Check } from "lucide-react";
import { FC } from "react";
import { updatePramagang } from "./action";

interface PramagangEditPageProps {
  params: Promise<{ id: string }>;
}

const EditPramagangPage: FC<PramagangEditPageProps> = async ({ params }) => {
  const { id } = await params;
  const updatePramagangWithId = updatePramagang.bind(null, id);

  const supabase = createClient();
  const { data, error } = await supabase
    .from("pramagang")
    .select("*")
    .eq("id", parseInt(id))
    .single();

  if (error) return null;

  return (
    <>
      <PageHeader title={`Edit User ${id}`} />
      <Card className="w-full max-w-md mx-auto">
        <form action={updatePramagangWithId} className="space-y-4 mt-6">
          <CardContent className="space-y-4">
            <div>
              <Label>Nama lengkap</Label>
              <Input
                placeholder="User's full name"
                name="name"
                defaultValue={data.name}
              />
            </div>
            <div>
              <Label>Lokasi</Label>
              <Input
                placeholder="lokasi"
                name="lokasi"
                defaultValue={data.lokasi}
              />
            </div>
            <div>
              <Label>Tanggal mulai</Label>
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

export default EditPramagangPage;
