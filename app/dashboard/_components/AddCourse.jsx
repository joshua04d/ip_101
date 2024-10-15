"use client"
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs'
import Link from 'next/link';
import React from 'react'

function AddCourse() {
  const {user}=useUser();
  return (
    <div className='flex items-center justify-between' style={{ width: 'calc(100% - 250px) '}} >
      <div>
      <h2 className='text-2xl'>Hello, <span className='font-bold'>{user?.firstName}</span></h2>
      <p className='text-sm text-gray-500'>Create a new Course with AI, based on your own pace</p>
    </div>
    <Link href={'/create-course'}>
    <Button> +Create your course</Button>
    </Link>
    
  </div>
    
  )
}

export default AddCourse
