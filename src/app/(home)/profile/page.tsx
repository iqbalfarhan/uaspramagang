import PageHeader from "@/components/app/page-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChangePassword from "./change-password";
import EditInformation from "./edit-information";

const ProfilePage = () => {
  return (
    <>
      <PageHeader title="Edit Profile" />
      <Tabs defaultValue="account" className="w-full max-w-lg mx-auto">
        <TabsList className="w-full">
          <TabsTrigger value="account" className="w-full">
            Informasi user
          </TabsTrigger>
          <TabsTrigger value="password" className="w-full">
            Ganti password
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <EditInformation />
        </TabsContent>
        <TabsContent value="password">
          <ChangePassword />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default ProfilePage;
