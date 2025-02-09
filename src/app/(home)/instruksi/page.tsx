import PageHeader from "@/components/app/page-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InstruksiDasar from "./instruksi-dasar";
import InstruksiKelas from "./instruksi-kelas";
import InstruksiMahasiswa from "./instruksi-mahasiswa";
import InstruksiPramagang from "./instruksi-pramagang";
import InstruksiProfile from "./instruksi-profile";

const InstruksiPage = () => {
  return (
    <>
      <PageHeader title="Instruksi pengerjaan" />
      <Tabs defaultValue="dasar" className="space-y-8">
        <TabsList>
          <TabsTrigger value="dasar">Instruksi Dasar</TabsTrigger>
          <TabsTrigger value="kelas">Data kelas</TabsTrigger>
          <TabsTrigger value="mahasiswa">Data mahasiswa</TabsTrigger>
          <TabsTrigger value="pramagang">Data pramagang</TabsTrigger>
          <TabsTrigger value="profile">Update Profile</TabsTrigger>
        </TabsList>
        <TabsContent value="dasar">
          <InstruksiDasar />
        </TabsContent>
        <TabsContent value="kelas">
          <InstruksiKelas />
        </TabsContent>
        <TabsContent value="mahasiswa">
          <InstruksiMahasiswa />
        </TabsContent>
        <TabsContent value="pramagang">
          <InstruksiPramagang />
        </TabsContent>
        <TabsContent value="profile">
          <InstruksiProfile />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default InstruksiPage;
