import Image from 'next/image'
import React, { useState } from 'react'
import { MenuIcon, ChevronDownIcon, HomeIcon, SearchIcon, XIcon } from '@heroicons/react/solid'
import { BellIcon, ChatIcon, GlobeIcon, PlusIcon, SparklesIcon, SpeakerphoneIcon, VideoCameraIcon } from '@heroicons/react/outline'
import { signIn, signOut, useSession } from 'next-auth/react'

{/* handles the logic of a user click on the burger icon */}
const Header = () => {
  const { data: session } = useSession();

  const [menu, setMenu] = useState(false);

  const handleBurger = () => {
    setMenu(!menu);
  }

  return (
    <>
    <div className='sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm'>
      <div className='relative h-10 w-20 flex-shrink-0 cursor-pointer hidden md:inline lg:inline'>
        <Image
          objectFit='contain'
          src='/reddit-logo.png'
          layout='fill' />
      </div>
      <div className='relative h-10 w-10 flex-shrink-0 cursor-pointer md:hidden lg:hidden'>
        <Image
          objectFit='contain'
          src='/reddit-sm-icon.png'
          layout='fill' />
      </div>
      <div className='mx-7 flex items-center xl:min-w-[300px]'>
        <HomeIcon className='h-5 w-5' />
        <p className='flex-1 ml-2 hidden lg:inline'>Home</p>
        <ChevronDownIcon className='h-5 w-5' />
      </div>

      {/* Search box */}
      <form className='flex flex-auto w-15 items-center space-x-2 border-gray-200 rounded-sm bg-gray-100 px-3 py-1'>
        <SearchIcon className='h-6 w-6 text-gray-400' />
        <input className='flex-1 bg-transparent outline-none' type='text' placeholder='Search Reddit' />
        <button hidden type='submit' />
      </form>

      {/* Icon container when screen is large or above */}
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

      {/* detects click on burger menu */}
      <div className='ml-5 lg:hidden'>
        <div className={menu ? 'hidden' :''}>
          <MenuIcon className='icon' onClick={handleBurger}/>
        </div>
        <div className={menu ? '' : 'hidden'}>
          <XIcon className='icon' onClick={handleBurger}/>
        </div>
      </div>

        {/* Sign in/sign out button*/}
      {session ? (
        <div onClick={() => signOut()} className='hidden items-center space-x-2 border-2 border-gray-400 rounded-lg p-2 cursor-pointer lg:flex hover:bg-orange-300 ease-in duration-100'>
          <div className='relative h-5 w-5 flex-shrink-0'>
            <Image
              src='https://links.papareact.com/23l'
              layout='fill'
              alt=''
              />
            </div>
            
            <div className='flex-1 text-xs'>
              <p className='truncate'>{session?.user?.name}</p>
              <p>1 Karma</p>
            </div>

            <ChevronDownIcon className='h-5 flex-shrink-0 text-gray-400'/>
        </div>
      ) : (
        <div onClick={() => signIn()} className='hidden items-center space-x-2 border-2 border-gray-400 rounded-lg p-2 cursor-pointer lg:flex hover:bg-orange-300 ease-in duration-100'>
          <div className='relative h-5 w-5 flex-shrink-0'>
            <Image
              src='https://links.papareact.com/23l'
              layout='fill'
              alt=''
              />
            </div>
            <p>Sign In</p>
        </div>
      )}
    </div>

    {/* Burger menu containers, with same buttons + text */}
    <div className={menu
      ? 'bg-[#ff5700] w-[250px] h-[470px] fixed right-0 rounded-2xl ease-in duration-300 lg:hidden'
      : 'w-[50%] h-[470px] fixed right-[-100%] ease-in duration-300 lg:hidden'}>
        <div className='burgericon'>
          <GlobeIcon className='icon' />
          <b>Trending</b>
        </div>
        <div className='burgericon'>
          <SparklesIcon className='icon' />
          <b>Popular</b>
        </div>
        <div className='burgericon'>
          <VideoCameraIcon className='icon' />
          <b>Reddit LIVE</b>
        </div>
        <div className='burgericon'>
          <ChatIcon className='icon' />
          <b>Direct Messages</b>
        </div>
        <div className='burgericon'>
          <BellIcon className='icon' />
          <b>Notifications</b>
        </div>
        <div className='burgericon'>
          <PlusIcon className='icon' />
          <b>Upload a Post</b>
        </div>
        <div className='burgericon'>
          <SpeakerphoneIcon className='icon' />
          <b>Controversial</b>
        </div>
    </div>
    </>
  )
}

export default Header