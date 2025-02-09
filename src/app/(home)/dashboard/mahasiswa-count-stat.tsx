import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { createClient } from "@/lib/supabase/client";

const MahasiswaCountStat = async () => {
  const supabase = createClient();

  const { data } = await supabase.from("mahasiswa").select();
  return (
    <Card>
      <CardContent className="flex flow-row pt-5 gap-4 items-center">
        <div>
          <Avatar>
            <AvatarFallback>{data?.length}</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <CardDescription>Total mahasiswa</CardDescription>
          <CardTitle>Yang Terdaftar</CardTitle>
        </div>
      </CardContent>
    </Card>
  );
};

export default MahasiswaCountStat;
