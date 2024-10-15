import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react';

function Header() {
  return (
    <div className='flex justify-between items-center p-5 shadow-sm'>
      <Image src="/logo2.svg" width={50} height={100} alt="Logo" />
      <div className='flex-shrink-0'>
        <UserButton className='max-w-[200px]' />
      </div>
    </div>
  );
}

export default Header;
