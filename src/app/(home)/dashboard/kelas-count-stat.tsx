import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { createClient } from "@/lib/supabase/client";

const KelasCountStat = async () => {
  const supabase = createClient();
  const { data } = await supabase.from("kelas").select();
  return (
    <Card>
      <CardContent className="flex flow-row pt-5 gap-4">
        <div>
          <Avatar>
            <AvatarFallback>{data?.length}</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <CardDescription>Total</CardDescription>
          <CardTitle>Kelas jurusan</CardTitle>
        </div>
      </CardContent>
    </Card>
  );
};

export default KelasCountStat;
