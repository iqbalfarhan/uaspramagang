import DatePicker from "@/components/app/date-picker";
import PageHeader from "@/components/app/page-header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { updateUser } from "./action";

const EditUserPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
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
      <PageHeader title="Edit User" />
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Edit user</CardTitle>
          <CardDescription>
            Silahkan ubah form berikut untuk mengedit user ini
          </CardDescription>
        </CardHeader>
        <form action={updateUserWithId}>
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
