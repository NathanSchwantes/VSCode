import Image from 'next/image'
import React, { useState } from 'react'
import { MenuIcon, ChevronDownIcon, HomeIcon, SearchIcon, XIcon } from '@heroicons/react/solid'
import { BellIcon, ChatIcon, GlobeIcon, PlusIcon, SparklesIcon, SpeakerphoneIcon, VideoCameraIcon } from '@heroicons/react/outline'

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleBurger = () => {
    setMenu(!menu);
  }

  return (
    <>
    <div className='sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm'>
      <div className='relative h-10 w-20 flex-shrink-0 cursor-pointer'>
        <Image
          objectFit='contain'
          src='/../public/reddit-logo.png'
          layout='fill' />
      </div>
      <div className='mx-7 flex items-center xl:min-w-[300px]'>
        <HomeIcon className='h-5 w-5' />
        <p className='flex-1 ml-2 hidden lg:inline'>Home</p>
        <ChevronDownIcon className='h-5 w-5' />
      </div>

      {/* Search box */}
      <form className='flex flex-1 items-center space-x-2 border-gray-200 rounded-sm bg-gray-100 px-3 py-1'>
        <SearchIcon className='h-6 w-6 text-gray-400' />
        <input className='flex-1 bg-transparent outline-none' type='text' placeholder='Search Reddit' />
        <button hidden type='submit' />
      </form>

      <div className='flex space-x-2 items-center mx-5 text-gray-500 hidden lg:inline-flex'>
        <SparklesIcon className='icon' />
        <GlobeIcon className='icon' />
        <VideoCameraIcon className='icon' />
        <hr className='h-10 border border-gray-100' />
        <ChatIcon className='icon' />
        <BellIcon className='icon' />
        <PlusIcon className='icon' />
        <SpeakerphoneIcon className='icon' />
      </div>
      <div className='ml-5 lg:hidden'>
        <div className={menu ? 'hidden' :''}>
          <MenuIcon className='icon' onClick={handleBurger}/>
        </div>
        <div className={menu ? '' : 'hidden'}>
          <XIcon className='icon' onClick={handleBurger}/>
        </div>
      </div>
    </div>
    <div className={menu
      ? 'bg-slate-300 w-[250px] h-screen fixed right-0 ease-in duration-300 lg:hidden'
      : 'w-[50%] h-screen fixed right-[-100%] ease-in duration-300 lg:hidden'}>
        <div className='flex justify-center items-center space-x-2 mx-10 my-4 rounded bg-white cursor-pointer hover:scale-105 shadow-lg ease-in duration-200'>
          <SparklesIcon className='icon' />
          <b>Popular</b>
        </div>
    </div>
      </>
  )
}

export default Header