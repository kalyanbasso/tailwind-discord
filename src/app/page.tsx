import { SidebarChannels } from "../components/SidebarChannels";
import { SidebarServers } from "../components/SidebarServers";
import { Main } from "../components/Main";

export default function Home() {
  return (
    <div className="h-screen flex">
      <SidebarServers />
      <SidebarChannels />
      <Main />
    </div>
  );
}
