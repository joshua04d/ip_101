"use client"; // Add this line at the top of your file

import { UserButton } from '@clerk/nextjs'
import React, { useEffect } from 'react'
import AddCourse from './_components/AddCourse'
import { CourseList } from '@/configs/schema'
import UserCourseList from './_components/UserCourseList'
import { db } from '@/configs/db'

function Dashboard() {
  return (
    <div>
      <AddCourse />
      {/* Display list of courses */}
      
    </div>
  )
}

export default Dashboard;
