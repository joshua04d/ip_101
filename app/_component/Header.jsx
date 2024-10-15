import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-between p-5 shadow-lg'> 
      <Image src={'/logo.svg'} width={100} height={121}/>
      <Button> Get Started </Button>
    </div>
  )
}

export default Header
