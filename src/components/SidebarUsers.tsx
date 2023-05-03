import Image from "next/image";

const User = ({
  name,
  active,
  avatar,
}: {
  name: string;
  active?: boolean;
  avatar: string;
}) => {
  return (
    <div className="flex p-2 items-center hover:bg-zinc-600 rounded-md transition-colors cursor-pointer">
      <div className="relative">
        <Image
          width={28}
          height={28}
          src={avatar}
          alt="Profile photo"
          className="rounded-full"
        />
        {active && (
          <span
            className="bottom-0 left-5 absolute w-2.5 h-2.5 rounded-full bg-green-400"
          ></span>
        )}
      </div>
      <div className="flex flex-col flex-1 ml-4">
        <strong className="text-gray-400 font-medium max-w-max">{name}</strong>
      </div>
    </div>
  );
};

export function SidebarUsers() {
  return (
    <div className="w-60 bg-sidebar2 border-t-2 border-zinc-800">
      <div className="p-2">
        <p className="p-2 text-gray-400 text-sm">DISPONIVEL - 2</p>
        <User name="elros" active avatar="/elros.jpg" />
        <User name="kalyan" active avatar="/atsuya.jpg" />
      </div>
      <div className="p-2">
        <p className="p-2 text-gray-400 text-sm">OFFLINE - 1</p>
        <User name="Bomor" avatar="/bomor.jpg" />
      </div>
    </div>
  );
}
