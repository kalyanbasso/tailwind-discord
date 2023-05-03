import Image from "next/image";

import { Compass, LucideIcon, Plus } from "lucide-react";

function ServersWithIcon(props: { Icon: LucideIcon }) {
  const { Icon } = props;
  return (
    <div className="bg-bg-icon w-11 h-11 flex items-center justify-center rounded-full hover:bg-green-700 hover:rounded-xl group transition cursor-pointer">
      <Icon
        size={20}
        className="text-green-500 group-hover:text-white transition-colors"
      />
    </div>
  );
}

export function SidebarServers() {
  return (
    <aside className="bg-sidebar1 w-14 flex flex-col items-center pt-3">
      <div className="bg-bg-icon w-11 h-11 flex items-center justify-center rounded-full hover:bg-blue-700 hover:rounded-xl transition cursor-pointer">
        <Image src="/logo.svg" alt="Discord Logo" width={24} height={24} />
      </div>

      <div className="mt-2 pt-2 border-t-2 border-zinc-800 gap-2 flex flex-col">
        <Image
          className="w-11 h-11 rounded-xl cursor-pointer"
          src="/server.jpeg"
          alt="Server Logo"
          width={28}
          height={28}
        />
        <ServersWithIcon Icon={Plus} />
        <ServersWithIcon Icon={Compass} />
      </div>
    </aside>
  );
}
