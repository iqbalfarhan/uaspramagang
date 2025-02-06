import PageHeader from "@/components/app/page-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { createClient } from "@/lib/supabase/client";
import { getAvatarLink, getInitials } from "@/lib/utils";
import { Pencil, PlusCircle } from "lucide-react";
import Link from "next/link";
import DeleteUserButton from "./delete-user-button";

const UserPage = async () => {
  const supabase = createClient();
  const { data: users } = await supabase.from("users").select();

  return (
    <>
      <PageHeader title="User management">
        <Button asChild>
          <Link href={"/user/create"}>
            <PlusCircle />
            Tambah
          </Link>
        </Button>
      </PageHeader>

      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Photo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Username</TableHead>
            <TableHead>Password</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users?.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>
                <Avatar className="rounded-lg">
                  <AvatarImage
                    src={getAvatarLink(user.name)}
                    alt={"user profile"}
                  />
                  <AvatarFallback className="rounded-lg">
                    {getInitials(user.name)}
                  </AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.password}</TableCell>
              <TableCell>
                <Button size={"icon"} asChild variant={"ghost"}>
                  <Link href={`/user/${user.id}/edit`}>
                    <Pencil />
                  </Link>
                </Button>
                <DeleteUserButton userId={user.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default UserPage;
