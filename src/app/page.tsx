import Image from 'next/image'
import { Compass, Plus, ChevronDown, Hash, UserPlus, Settings, Volume2, MessageSquare, Mic, Headphones, Bell, Pin, Users, AtSign, HelpCircle, Gift, Clapperboard, Smile } from 'lucide-react'

export default function Home() {
  return (
    <div className='h-screen flex'>
      <aside className='bg-sidebar1 w-16 flex flex-col items-center pt-4'>
        <div className='bg-bg-icon w-11 h-11 flex items-center justify-center rounded-full hover:bg-blue-700 hover:rounded-xl transition cursor-pointer'>
          <Image src='/logo.svg' alt='Discord Logo' width={24} height={24} />
        </div>

        <div className='mt-4 pt-4 border-t-2 border-zinc-800 gap-2 flex flex-col'>
          <div className='bg-bg-icon w-11 h-11 flex items-center justify-center rounded-full hover:bg-green-700 hover:rounded-xl group transition-colors cursor-pointer'>
            <Plus size={20} className='text-green-500 group-hover:text-white transition-colors' />
          </div>
          <div className='bg-bg-icon w-11 h-11 flex items-center justify-center rounded-full hover:bg-green-700 hover:rounded-xl group transition cursor-pointer'>
            <Compass size={20} className='text-green-500 group-hover:text-white transition-colors' />
          </div>
        </div>
      </aside>
      <section className='bg-sidebar2 w-72 flex flex-col'>
        <div className='flex justify-between p-3 hover:bg-zinc-700 cursor-pointer'>
          <strong className='text-white'>Guild</strong>
          <ChevronDown className='text-white' />
        </div>
        <div className='flex flex-1 pt-6 px-1 border-t-2 border-zinc-800'>
          <div className='w-full'>
            <div>
              <div className='flex items-center gap-2 group cursor-pointer p-2'>
                <ChevronDown size={12} className='text-gray-400 group-hover:text-gray-200' />
                <strong className='flex-1 text-gray-400 text-xs group-hover:text-gray-200'>TEXT CHANNELS</strong>
                <Plus size={18} className='text-gray-400 hover:text-gray-200' />
              </div>
              <div className='flex items-center gap-2 mt-2 bg-chat px-2 py-2 rounded-md cursor-pointer'>
                <Hash className='text-gray-300' />
                <p className='flex-1 font-semibold text-gray-300'>general</p>
                <UserPlus size={16} className='text-gray-400 hover:text-gray-300 transition-colors' />
                <Settings size={16} className='text-gray-400 hover:text-gray-300 transition-colors' />
              </div>
              <div className='flex items-center gap-2 mt-2 group hover:bg-zinc-600 px-2 py-2 rounded-md transition-colors cursor-pointer'>
                <Hash className='text-gray-400 group-hover:text-gray-300 transition-colors' />
                <p className='flex-1 text-gray-400 font-semibold group-hover:text-gray-300 transition-colors'>info-server</p>
                <UserPlus size={16} className='text-gray-400 invisible group-hover:visible group-hover:text-gray-300 transition-colors' />
                <Settings size={16} className='text-gray-400 invisible group-hover:visible group-hover:text-gray-300 transition-colors' />
              </div>
            </div>
            <div className='mt-6'>
              <div className='flex items-center gap-2 group cursor-pointer p-2'>
                <ChevronDown size={12} className='text-gray-400 group-hover:text-gray-200' />
                <strong className='flex-1 text-gray-400 text-xs group-hover:text-gray-200'>VOICE CHANNELS</strong>
                <Plus size={18} className='text-gray-400 hover:text-gray-200' />
              </div>
              <div className='flex items-center gap-2 mt-2 group hover:bg-zinc-600 px-2 py-2 rounded-md transition-colors cursor-pointer'>
                <Volume2 className='text-gray-400 group-hover:text-gray-300 transition-colors' />
                <p className='flex-1 text-gray-400 font-semibold group-hover:text-gray-300 transition-colors'>General</p>
                <MessageSquare size={16} className='text-gray-400 invisible group-hover:visible group-hover:text-gray-300 transition-colors' />
                <UserPlus size={16} className='text-gray-400 invisible group-hover:visible group-hover:text-gray-300 transition-colors' />
                <Settings size={16} className='text-gray-400 invisible group-hover:visible group-hover:text-gray-300 transition-colors' />
              </div>
              <div className='flex items-center gap-2 mt-2 group hover:bg-zinc-600 px-2 py-2 rounded-md transition-colors cursor-pointer'>
                <Volume2 className='text-gray-400 group-hover:text-gray-300 transition-colors' />
                <p className='flex-1 text-gray-400 font-semibold group-hover:text-gray-300 transition-colors'>Playing</p>
                <MessageSquare size={16} className='text-gray-400 invisible group-hover:visible group-hover:text-gray-300 transition-colors' />
                <UserPlus size={16} className='text-gray-400 invisible group-hover:visible group-hover:text-gray-300 transition-colors' />
                <Settings size={16} className='text-gray-400 invisible group-hover:visible group-hover:text-gray-300 transition-colors' />
              </div>
            </div>
          </div>
        </div>
        <div className='flex bg-voice px-4 py-2 items-center'>
          <div className='relative cursor-pointer'>
            <Image width={32} height={32} src={'/atsuya.jpg'} alt='Profile photo' className='rounded-full' />
            <span className="bottom-0 left-6 absolute w-2.5 h-2.5 bg-green-400 rounded-full"></span>
          </div>
          <div className='flex flex-col flex-1 ml-4'>
            <strong className='text-white max-w-max hover:underline cursor-pointer'>kalyan</strong>
            <span className='text-gray-300 max-w-max hover:underline cursor-pointer'>#4141</span>
          </div>
          <div className='flex gap-2'>
            <Mic size={20} className='text-gray-300 hover:text-gray-100 cursor-pointer' />
            <Headphones size={20} className='text-gray-300 hover:text-gray-100 cursor-pointer' />
            <Settings size={20} className='text-gray-300 hover:text-gray-100 cursor-pointer' />
          </div>
        </div>
      </section>
      <main className='flex flex-1 flex-col'>
        <div className='flex w-full p-2'>
          <div className='flex flex-1 gap-2 tems-center'>
            <Hash className='text-zinc-400' />
            <strong className='text-white'>general</strong>
          </div>
          <div className='flex gap-2 items-center'>
            <Bell className='text-zinc-400' />
            <Pin className='text-zinc-400' />
            <Users className='text-zinc-400' />
            <input type="text" className='bg-zinc-800 text-gray-200 rounded-lg px-3 py-1' placeholder='Search' />
            <AtSign className='text-zinc-400' />
            <HelpCircle className='text-zinc-400' />
          </div>
        </div>
        <div className='flex flex-1 border-t-2 border-zinc-800 w-full flex-col-reverse'>
          <div className='relative w-full h-20'>
            <Image src='/empty_message.svg' alt='Empty Message' fill />
          </div>
        </div>
        <div className='flex mx-4 gap-1'>
          <div className='flex justify-center items-center bg-input p-2 rounded-l-lg cursor-pointer group'>
            <div className='rounded-full p-0.5 bg-gray-400 w-4 h-4 flex items-center group-hover:bg-gray-200'>
              <Plus className='text-input '/>
            </div>
          </div>
          <div className='flex-1 flex gap-2 bg-input items-center p-2 rounded-r-lg' >
            <input className='w-full bg-input text-gray-200' placeholder='Message #general' type="text" />
            <Gift className='text-gray-400 hover:text-gray-200 cursor-pointer'/>
            <Clapperboard className='text-gray-400 hover:text-gray-200 cursor-pointer'/>
            <Smile className='text-gray-400 hover:text-gray-200 cursor-pointer'/>
          </div>
        </div>
      </main>
    </div>
  )
}
