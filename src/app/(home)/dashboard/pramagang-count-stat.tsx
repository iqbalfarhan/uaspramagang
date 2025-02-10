import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { createClient } from "@/lib/supabase/client";

const PramagangCountStat = async () => {
  const supabase = createClient();

  const { data } = await supabase.from("pramagang").select();
  return (
    <Card>
      <CardContent className="flex flow-row pt-6 gap-4 items-center">
        <div>
          <Avatar>
            <AvatarFallback>{data?.length}</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <CardDescription>Total data</CardDescription>
          <CardTitle>Pramagang</CardTitle>
        </div>
      </CardContent>
    </Card>
  );
};

export default PramagangCountStat;
