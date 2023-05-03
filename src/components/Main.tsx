import Image from "next/image";
import { SidebarUsers } from "../components/SidebarUsers";
import {
  Plus,
  Hash,
  Bell,
  Pin,
  Users,
  AtSign,
  HelpCircle,
  Gift,
  Clapperboard,
  Smile,
  LucideIcon,
} from "lucide-react";

const IconTop = ({ Icon }: { Icon: LucideIcon }) => {
  return (
    <Icon
      size={20}
      className="text-zinc-400 hover:text-zinc-200 cursor-pointer"
    />
  );
};

const Message = ({
  user,
  message,
  time,
}: {
  user: { name: string; avatar: string };
  message: string;
  time: string;
}) => {
  return (
    <div className="flex p-2">
      <div className="min-w-max mt-2">
        <Image
          width={32}
          height={32}
          src={user.avatar}
          alt="Profile photo"
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col ml-4">
        <div className="flex gap-2 items-center">
          <p className="text-gray-100">{user.name}</p>
          <span className="text-zinc-400 text-xs">{time}</span>
        </div>
        <p className="text-gray-100 font-light text-sm">{message}</p>
      </div>
    </div>
  );
};

export function Main() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="flex w-full p-2">
        <div className="flex flex-1 gap-2 tems-center">
          <Hash className="text-zinc-400" />
          <strong className="text-white">general</strong>
        </div>
        <div className="flex gap-2 items-center">
          <IconTop Icon={Bell} />
          <IconTop Icon={Pin} />
          <IconTop Icon={Users} />
          <input
            type="text"
            className="bg-zinc-800 text-gray-200 rounded-lg px-3 py-1"
            placeholder="Search"
          />
          <IconTop Icon={AtSign} />
          <IconTop Icon={HelpCircle} />
        </div>
      </div>
      <div className="flex h-full">
        <div className="flex flex-col flex-1">
          <div className="flex flex-1 border-t-2 border-zinc-800 w-full flex-col-reverse">
            <div className="w-full">
              <Message
                user={{ name: "kalyan", avatar: "/atsuya.jpg" }}
                message="Ei, pessoal! Alguém aqui já usou o Next.js com o Tailwind CSS? Estou pensando em experimentar essa combinação."
                time="Hoje às 10:00"
              />
              <Message
                user={{ name: "elros", avatar: "/elros.jpg" }}
                message="Eu já usei, Kalyan! Eu realmente gostei da experiência. É muito fácil de configurar e a integração é perfeita."
                time="Hoje às 10:05"
              />
              <Message
                user={{ name: "Bomor", avatar: "/bomor.jpg" }}
                message="Eu nunca usei o Next.js ou o Tailwind, para ser honesto. O que são eles?"
                time="Hoje às 10:12"
              />
              <Message
                user={{ name: "kalyan", avatar: "/atsuya.jpg" }}
                message="Next.js é um framework de React que permite renderização do lado do servidor (SSR) e o Tailwind é uma biblioteca CSS que torna a estilização de componentes muito mais fácil e intuitiva."
                time="Hoje às 10:25"
              />
              <Message
                user={{ name: "elros", avatar: "/elros.jpg" }}
                message="Eles trabalham muito bem juntos, Bomor. O Next.js torna a construção de aplicativos da web com React muito mais fácil, enquanto o Tailwind permite estilizar componentes de maneira mais rápida e eficiente."
                time="Hoje às 10:35"
              />
              <Message
                user={{ name: "Bomor", avatar: "/bomor.jpg" }}
                message="Isso parece muito legal. Talvez eu deva experimentar. Vocês têm algum tutorial ou recurso recomendado para iniciantes?"
                time="Hoje às 11:02"
              />
              <Message
                user={{ name: "kalyan", avatar: "/atsuya.jpg" }}
                message="Sim, definitivamente. O site oficial do Next.js tem uma documentação muito completa e fácil de seguir. O Tailwind também tem uma documentação excelente. Além disso, há muitos tutoriais e vídeos no YouTube que podem ajudar."
                time="Hoje às 11:22"
              />
              <Message
                user={{ name: "elros", avatar: "/elros.jpg" }}
                message="Também existe uma comunidade muito ativa no Twitter e no Discord. Eles sempre têm ótimos recursos e estão dispostos a ajudar."
                time="Hoje às 11:26"
              />
              <Message
                user={{ name: "Bomor", avatar: "/bomor.jpg" }}
                message="Incrível, muito obrigado! Vou verificar esses recursos e experimentar a combinação Next.js e Tailwind."
                time="Hoje às 11:40"
              />
              <Message
                user={{ name: "kalyan", avatar: "/atsuya.jpg" }}
                message="Ótimo! Tenho certeza de que você vai adorar. E se precisar de ajuda, estamos sempre aqui para ajudá-lo."
                time="Hoje às 11:51"
              />
            </div>
          </div>
          <div className="flex m-4 gap-1">
            <div className="flex justify-center items-center bg-input p-2 rounded-l-lg cursor-pointer group">
              <div className="rounded-full p-0.5 bg-gray-400 w-4 h-4 flex items-center group-hover:bg-gray-200">
                <Plus className="text-input " />
              </div>
            </div>
            <div className="flex-1 flex gap-2 bg-input items-center p-2 rounded-r-lg">
              <input
                className="w-full bg-input text-gray-200"
                placeholder="Message #general"
                type="text"
              />
              <Gift className="text-gray-400 hover:text-gray-200 cursor-pointer" />
              <Clapperboard className="text-gray-400 hover:text-gray-200 cursor-pointer" />
              <Smile className="text-gray-400 hover:text-gray-200 cursor-pointer" />
            </div>
          </div>
        </div>
        <SidebarUsers />
      </div>
    </main>
  );
}
