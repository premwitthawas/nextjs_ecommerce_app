'use client';
import Link from 'next/link';
import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'

const Menu = () => {
    const [isOpenMenu, setIsOpenMenu] = React.useState<boolean>(false);
    return (
        <div>
            <RxHamburgerMenu
                className='w-[28px] h-[28px] cursor-pointer'
                onClick={() => setIsOpenMenu((prev) => !prev)}
            />
            {isOpenMenu && (
                <div 
                className='absolute bg-slate-900 text-slate-100 left-0 top-20 w-full 
                h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl
                z-10'
                >
                    <Link href="/">Homepage</Link>
                    <Link href="/">Shop</Link>
                    <Link href="/">Deals</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                    <Link href="/">Logout</Link>
                    <Link href="/">Cart(1)</Link>
                </div>
            )}
        </div>
    )
}

export default Menu