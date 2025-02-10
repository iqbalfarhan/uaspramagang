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
import { Check } from "lucide-react";
import { createUser } from "./action";

const CreateUserPage = () => {
  return (
    <>
      <PageHeader title="Create User" />
      <Card className="w-full max-w-md mx-auto">
        <form action={createUser}>
          <CardContent className="space-y-4 mt-6">
            <div>
              <Label>Nama lengkap</Label>
              <Input placeholder="User's full name" name="name" />
            </div>
            <div>
              <Label>Username</Label>
              <Input placeholder="username" name="username" />
            </div>
            <div>
              <Label>Password</Label>
              <Input placeholder="password" name="password" />
            </div>
            <div>
              <Label>Tanggal lahir</Label>
              <DatePicker name="dob" />
            </div>
            <div>
              <Label>Jenis kelamin</Label>
              <Select name="gender">
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

export default CreateUserPage;
