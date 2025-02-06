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
import { createClient } from "@/lib/supabase/client";
import { Check } from "lucide-react";
import { updateUser } from "./action";

const EditUserPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const updateUserWithId = updateUser.bind(null, id);

  const supabase = createClient();
  const { data } = await supabase.from("users").select().eq("id", parseInt(id));

  if (!data) return null;

  const user = await data[0];

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
                defaultValue={user.name}
              />
            </div>
            <div>
              <Label>Username</Label>
              <Input
                placeholder="username"
                name="username"
                defaultValue={user.username}
              />
            </div>
            <div>
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="password"
                name="password"
                defaultValue={user.password}
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
