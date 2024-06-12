'use client';
import Image from 'next/image';
import React from 'react'
import { Button } from './ui/button';

function CartModal() {
  const cartItems = [
    {
      id: 1,
      name: 'Product Name',
      price: 49,
      status: 'available',
      imageSrc: '/products/product-modal-cart.webp',
      qty: 2
    },
    // {
    //   id: 2,
    //   name: 'Product Name',
    //   price: 49,
    //   status: 'available',
    //   imageSrc: '/products/product-modal-cart.webp',
    //   qty: 2
    // },
  ]
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  return (
    <div
      className='w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] top-12 right-0 flex flex-col gap-6'
    >
      {
        !cartItems ? (
          <div>Cart Is Empty</div>
        ) : (
          <>
            {
              cartItems.map((item) => {
                return (
                  <div className='flex gap-4' key={item.id}>
                    <Image src={item.imageSrc} width={72} height={96} alt="" className='object-cover rounded-md' />
                    <div className='flex flex-col justify-between w-full'>
                      {/* TOP */}
                      <div>
                        {/* TITLE */}
                        <div className='flex items-center justify-between gap-8'>
                          <h3 className='font-semibold'>{item.name}</h3>
                          <div className='p-1 bg-gray-50 rounded-sm'>${item.price}</div>
                        </div>
                        {/* DESC */}
                        <div className='text-sm text-gray-500'>
                          {item.status}
                        </div>
                      </div>
                      <div className='flex justify-between text-sm'>
                        <span className='text-gray-500'>Qty. {item.qty}</span>
                        <span className='text-blue-500'>Remove</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            {/* BOTTOM */}
            <div className='flex flex-col gap-4'>
              <div className='flex items-center justify-between font-semibold'>
                <span>Subtotal</span>
                <span>${totalPrice}</span>
              </div>
              <p className='text-gray-500 text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nostrum!
              </p>
              <div className='h-px bg-gray-600' />
              <div className='flex items-center justify-between text-sm'>
                <Button className='w-[45%]'>View Cart</Button>
                <Button variant="secondary" className='w-[45%]'>Checkout</Button>
              </div>
            </div>
          </>
        )
      }
    </div>
  )
}

export default CartModal