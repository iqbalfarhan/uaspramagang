"use client";

import { getAvatarLink } from "@/lib/utils";
import {
  BookA,
  Home,
  Shapes,
  UserCircle,
  Users,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "../ui/sidebar";
import AppLogo from "./app-logo";
import { NavUser } from "./nav-user";

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

const AppSidebar = () => {
  const pathname = usePathname();
  return (
    <Sidebar>
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
                  <SidebarMenuSubItem>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname.startsWith(menu.href)}
                    >
                      <Link href={menu.href}>
                        {menu.icon}
                        <span>{menu.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuSubItem>
                </SidebarMenu>
              ))}
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={{
            name: "Iqbal farhan syuahda",
            email: "john.doe@example.com",
            avatar: getAvatarLink("iqbal farhan syuhada"),
          }}
        />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};

export default AppSidebar;
