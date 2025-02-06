import { Input } from "../ui/input";
import { SidebarTrigger } from "../ui/sidebar";
import LogoutButton from "./logout-button";
import { ModeToggle } from "./mode-toggle";

const AppHeader = () => {
  return (
    <div className="flex gap-2 justify-between">
      <div>
        <SidebarTrigger />
      </div>
      <div>
        <Input placeholder="Pencarian..." />
      </div>
      <div className="flex-1"></div>
      <div>
        <ModeToggle />
      </div>
      <div>
        <LogoutButton />
      </div>
    </div>
  );
};

export default AppHeader;
