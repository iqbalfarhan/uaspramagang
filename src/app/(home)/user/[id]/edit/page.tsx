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
import { FC } from "react";
import { updateUser } from "./action";

interface UserEditPageProps {
  params: Promise<{ id: string }>;
}

const EditUserPage: FC<UserEditPageProps> = async ({ params }) => {
  const { id } = await params;
  const updateUserWithId = updateUser.bind(null, id);

  const supabase = createClient();
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", parseInt(id))
    .single();

  if (error) return null;

  return (
    <>
      <PageHeader title={`Edit User ${id}`} />
      <Card className="w-full max-w-md mx-auto">
        <form action={updateUserWithId} className="space-y-4 mt-6">
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
              <Label>Username</Label>
              <Input
                placeholder="username"
                name="username"
                defaultValue={data.username}
              />
            </div>
            <div>
              <Label>Password</Label>
              <Input
                placeholder="password"
                name="password"
                defaultValue={data.password}
              />
            </div>
            <div>
              <Label>Tanggal lahir</Label>
              <DatePicker name="dob" defaultValue={data.dob} />
            </div>
            <div>
              <Label>Jenis kelamin</Label>
              <Select name="gender" defaultValue={data.gender}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih jenis kelamin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Laki-laki</SelectItem>
                  <SelectItem value="female">Perempuan</SelectItem>
                </SelectContent>
              </Select>
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
