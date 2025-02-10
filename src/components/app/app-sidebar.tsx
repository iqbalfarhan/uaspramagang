import {
  BookA,
  Home,
  Shapes,
  UserCircle,
  Users,
  UsersRound,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarRail,
} from "../ui/sidebar";
import AppLogo from "./app-logo";
import { NavUser } from "./nav-user";
import SidebarLink from "./sidebar-link";

const appmenus = [
  {
    groupName: "Menu utama",
    menus: [
      {
        label: "Dashboard",
        href: "/dashboard",
        icon: <Home />,
      },
      {
        label: "Data kelas",
        href: "/kelas",
        icon: <Shapes />,
      },
      {
        label: "Data mahasiswa",
        href: "/mahasiswa",
        icon: <Users />,
      },
      {
        label: "Data pramagang",
        href: "/pramagang",
        icon: <BookA />,
      },
      {
        label: "Profile",
        href: "/profile",
        icon: <UserCircle />,
      },
    ],
  },
  {
    groupName: "Admin menu",
    menus: [
      {
        label: "User management",
        href: "/user",
        icon: <UsersRound />,
      },
    ],
  },
];

const AppSidebar = async () => {
  return (
    <Sidebar variant={"sidebar"}>
      <SidebarHeader>
        <AppLogo />
      </SidebarHeader>
      <SidebarContent>
        {appmenus.map(({ groupName, menus }) => (
          <SidebarGroup key={groupName}>
            <SidebarGroupLabel>{groupName}</SidebarGroupLabel>
            <SidebarGroupContent>
              {menus.map((menu, index) => (
                <SidebarMenu key={index}>
                  <SidebarMenuItem>
                    <SidebarLink menu={menu} />
                  </SidebarMenuItem>
                </SidebarMenu>
              ))}
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};

export default AppSidebar;
