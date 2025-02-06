import PageHeader from "@/components/app/page-header";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CreateUserForm from "./create-user-form";

const CreateUserPage = () => {
  return (
    <>
      <PageHeader title="Create User" />
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Create user</CardTitle>
          <CardDescription>
            Silahkan isi form berikut untuk membuat user baru
          </CardDescription>
        </CardHeader>
        <CreateUserForm />
      </Card>
    </>
  );
};

export default CreateUserPage;
