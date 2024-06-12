'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { FaUser } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import CartModal from './CartModal';


function NavIcons() {
  const isLoggedIn = false;
  const router = useRouter();

  const [isOpenProfile, setIsOpenProfile] = React.useState<boolean>(false);
  const [isOpenNotification, setIsOpenNotification] = React.useState<boolean>(false);
  const [isOpenCart, setIsOpenCart] = React.useState<boolean>(false);

  const handleProfile = () => {
    // if (!isLoggedIn) {
    //   router.push('/login');
    // }
    setIsOpenProfile((prev) => {
      return !prev;
    })
    if (isOpenCart) {
      setIsOpenCart(false);
    }
  }

  const handleCart = () => {
    setIsOpenCart((prev) => {
      return !prev;
    });
    if (isOpenProfile) {
      setIsOpenProfile(false);
    }
  }
  return (
    <div className='flex flex-row items-center gap-4 xl:gap-6 relative'>
      <FaUser className='h-5 w-5 cursor-pointer' onClick={handleProfile} />
      {isOpenProfile && <div className='absolute p-4 rounded-md top-11 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20'>
        <Link href={'/'}>Profile</Link>
        <div className='mt-2 cursor-pointer'>Logout</div>
      </div>}
      <IoMdNotificationsOutline className='h-6 w-6 cursor-pointer' />
      <div className='relative'>
        <IoCart className='h-6 w-6 cursor-pointer' onClick={handleCart} />
        <div className='absolute -top-4 -right-4 w-6 h-6 bg-green-500 text-white 
        rounded-full text-sm flex items-center justify-center'>
          2
        </div>
      </div>
      {
        isOpenCart && <CartModal />
      }
    </div>
  )
}

export default NavIcons