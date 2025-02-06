import PageHeader from "@/components/app/page-header";
import KelasCountStat from "./kelas-count-stat";

const DashboardPage = () => {
  return (
    <>
      <PageHeader title="Selamat data" />
      <div className="grid md:grid-cols-4 gap-4">
        <KelasCountStat />
        <KelasCountStat />
        <KelasCountStat />
        <KelasCountStat />
      </div>
    </>
  );
};

export default DashboardPage;
