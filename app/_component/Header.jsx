import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <header className="absolute top-0 left-0 w-full p-5 flex justify-between items-center bg-transparent z-20">
      {/* Logo */}
      <Image src="/logo.svg" width={100} height={121} alt="Logo" />

      {/* Navigation Button */}
      <Link href="/dashboard">
        <Button className="text-white bg-red-600 hover:bg-red-700 focus:ring">
          Get Started
        </Button>
      </Link>
    </header>
  );
}

export default Header;
