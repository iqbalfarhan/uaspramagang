import { getCurrentUser } from "@/app/(auth)/login/actions";
import DatePicker from "@/components/app/date-picker";
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
import { cookies } from "next/headers";

const supabase = createClient();

async function editPhone(formData: FormData) {
  "use server";

  const cookie = await cookies();
  const userId = formData.get("userId");

  await supabase
    .from("users")
    .update({
      phone: formData.get("phone"),
      dob: formData.get("dob"),
      gender: formData.get("gender"),
    })
    .eq("id", userId)
    .select()
    .then((data) => {
      const user = data.data?.[0];
      cookie.set("user", JSON.stringify(user), {
        httpOnly: true,
        maxAge: 60 * 60 * 24,
        path: "/",
      });
    });
}

const EditPhone = async () => {
  const user: {
    id: number;
    gender: string;
    phone: string;
    dob: string;
  } = await getCurrentUser();

  return (
    <Card>
      <form action={editPhone}>
        <CardContent className="pt-5 space-y-4">
          <Input type="hidden" name="userId" defaultValue={user.id} />
          <div>
            <Label>Nomor Telepon</Label>
            <Input
              placeholder="phone number"
              defaultValue={user.phone}
              name="phone"
            />
          </div>
          <div>
            <Label>Tanggal lahir</Label>
            <DatePicker name="dob" defaultValue={user.dob} />
          </div>
          <div>
            <Label>Jenis kelamin</Label>
            <Select defaultValue={user.gender} name="gender">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Laki laki</SelectItem>
                <SelectItem value="female">Perempuan</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Simpan</Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default EditPhone;
