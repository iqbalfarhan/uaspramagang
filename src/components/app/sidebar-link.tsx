"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { SidebarMenuButton } from "../ui/sidebar";

const SidebarLink = ({
  menu,
}: {
  menu: {
    href: string;
    label: string;
    icon: React.ReactElement;
  };
}) => {
  const pathname = usePathname();
  return (
    <SidebarMenuButton asChild isActive={pathname.startsWith(menu.href)}>
      <Link href={menu.href}>
        {menu.icon}
        <span>{menu.label}</span>
      </Link>
    </SidebarMenuButton>
  );
};

export default SidebarLink;
