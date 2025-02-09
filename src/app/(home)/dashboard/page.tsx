import { getCurrentUser } from "@/app/(auth)/login/actions";
import PageHeader from "@/components/app/page-header";
import { createClient } from "@/lib/supabase/client";
import KelasCountStat from "./kelas-count-stat";
import MahasiswaCountStat from "./mahasiswa-count-stat";
import PramagangCountStat from "./pramagang-count-stat";
import ProfileStat from "./profile-stat";

const DashboardPage = async () => {
  const user = await getCurrentUser();

  const supabase = createClient();
  const { data } = await supabase
    .from("pramagang")
    .select("*, mahasiswa: mahasiswa_id (*, kelas: kelas_id (*))");
  return (
    <>
      <PageHeader title={`Selamat datang ${user.name}`} />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <KelasCountStat />
        <MahasiswaCountStat />
        <PramagangCountStat />
        <ProfileStat />
      </div>

      {data?.map((mhs) => <div key={mhs.id}>{JSON.stringify(mhs)}</div>)}
    </>
  );
};

export default DashboardPage;
