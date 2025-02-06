import AppHeader from "@/components/app/app-header";
import AppSidebar from "@/components/app/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { PropsWithChildren } from "react";

const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="p-6 space-y-6">
        <AppHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default HomeLayout;
