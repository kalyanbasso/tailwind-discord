import Image from "next/image";

import {
  Plus,
  ChevronDown,
  Hash,
  UserPlus,
  Settings,
  Volume2,
  MessageSquare,
  Mic,
  Headphones,
  LucideIcon,
} from "lucide-react";

const TextChannel = ({ name, active }: { name: string; active?: boolean }) => {
  return (
    <div
      className={`flex items-center gap-2 mt-1 p-1 rounded-md cursor-pointer ${
        active ? "bg-chat" : "group hover:bg-zinc-600 transition-colors"
      }`}
    >
      <Hash
        size={16}
        className={`${
          active
            ? "text-gray-300"
            : "text-gray-400 group-hover:text-gray-300 transition-colors"
        }`}
      />
      <p
        className={`flex-1 text-sm ${
          active
            ? "text-gray-300"
            : "text-gray-400 group-hover:text-gray-300 transition-colors"
        }`}
      >
        {name}
      </p>
      <IconTextChannel Icon={UserPlus} active={active} />
      <IconTextChannel Icon={Settings} active={active} />
    </div>
  );
};

const VoiceChannel = ({ name }: { name: string }) => {
  return (
    <div className="flex items-center gap-2 mt-1 group hover:bg-zinc-600 p-1 rounded-md transition-colors cursor-pointer">
      <Volume2
        size={16}
        className="text-gray-400 group-hover:text-gray-300 transition-colors"
      />
      <p className="flex-1 text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
        {name}
      </p>
      <IconVoiceChannel Icon={MessageSquare} />
      <IconVoiceChannel Icon={UserPlus} />
      <IconVoiceChannel Icon={Settings} />
    </div>
  );
};

const IconVoiceChannel = ({ Icon }: { Icon: LucideIcon }) => {
  return (
    <Icon
      size={12}
      className="text-gray-400 invisible group-hover:visible transition-colors"
    />
  );
};

const IconTextChannel = ({
  Icon,
  active,
}: {
  Icon: LucideIcon;
  active?: boolean;
}) => {
  return (
    <Icon
      size={12}
      className={`text-gray-400 hover:text-gray-300 transition-colors ${
        active ? "" : "invisible group-hover:visible"
      }`}
    />
  );
};

const IconProfie = ({ Icon }: { Icon: LucideIcon }) => {
  return (
    <Icon
      size={16}
      className="text-gray-300 hover:text-gray-100 cursor-pointer"
    />
  );
};

export function SidebarChannels() {
  return (
    <section className="bg-sidebar2 w-52 flex flex-col">
      <div className="flex justify-between p-3 hover:bg-zinc-700 cursor-pointer">
        <strong className="text-white">Guild</strong>
        <ChevronDown className="text-white" />
      </div>
      <div className="flex flex-1 pt-2 px-1 border-t-2 border-zinc-800">
        <div className="w-full">
          <div>
            <div className="flex items-center gap-2 group cursor-pointer p-2">
              <ChevronDown
                size={12}
                className="text-gray-400 group-hover:text-gray-200"
              />
              <strong className="flex-1 text-gray-400 font-medium text-xs group-hover:text-gray-200">
                TEXT CHANNELS
              </strong>
              <Plus size={18} className="text-gray-400 hover:text-gray-200" />
            </div>

            <TextChannel name="general" active />
            <TextChannel name="info-server" />
          </div>
          <div className="mt-1">
            <div className="flex items-center gap-1 group cursor-pointer p-1">
              <ChevronDown
                size={12}
                className="text-gray-400 group-hover:text-gray-200"
              />
              <strong className="flex-1 text-gray-400 font-medium text-xs group-hover:text-gray-200">
                VOICE CHANNELS
              </strong>
              <Plus size={18} className="text-gray-400 hover:text-gray-200" />
            </div>
            <VoiceChannel name="General" />
            <VoiceChannel name="Music" />
            <VoiceChannel name="Gaming" />
          </div>
        </div>
      </div>
      <div className="flex bg-voice py-1 px-2 items-center">
        <div className="relative cursor-pointer">
          <Image
            width={28}
            height={28}
            src={"/atsuya.jpg"}
            alt="Profile photo"
            className="rounded-full"
          />
          <span className="bottom-0 left-5 absolute w-2.5 h-2.5 bg-green-400 rounded-full"></span>
        </div>
        <div className="flex flex-col flex-1 ml-4">
          <strong className="text-white text-sm hover:underline cursor-pointer">
            kalyan
          </strong>
          <span className="text-gray-300 text-sm hover:underline cursor-pointer">
            #4141
          </span>
        </div>
        <div className="flex gap-2">
          <IconProfie Icon={Mic} />
          <IconProfie Icon={Headphones} />
          <IconProfie Icon={Settings} />
        </div>
      </div>
    </section>
  );
}
