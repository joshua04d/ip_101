import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import { HiOutlinePuzzle } from "react-icons/hi";
import EditCourseBasicInfo from './EditCourseBasicInfo';

function CourseBasicInfo({ course }) {
  console.log(course);  // Logs the course object to the console

  return (
    <div className='p-10 border rounded-xl shadow-sm mt-5 bg-white'> {/* Added bg-white here */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div>
          <h2 className='font-bold text-3xl'>
            {course?.courseOutput?.courseName || 'Course Name not found'}
            <EditCourseBasicInfo course={course}/>  
          </h2>
          <p className='text-sm text-gray-400 mt-3'>
            <strong>Description:</strong> {course?.courseOutput?.description || 'No description available'}
          </p>
          <h2 className='font-medium mt-2 flex gap-2 items-center text-primary'>
            <HiOutlinePuzzle />{course?.category || 'Category not available'}
          </h2>
          <Button className='w-full mt-5'>Start</Button>

          {/* 
          <p><strong>Level:</strong> {course?.level || 'Level not specified'}</p>
          <p><strong>Created By:</strong> {course?.courseOutput?.createdBy || 'No creator information available'}</p> */}
        </div>
        <div>
          <Image src={'/image.jpg'} width={100} height={100} className='w-full rounded-xl h-[300px]'/>
        </div>
      </div>
    </div>
  );
}

export default CourseBasicInfo;
