import React from 'react';
import { HiOutlineChartBar } from "react-icons/hi";

function CourseDetail({ course }) {
  return (
    <div className='border p-6 rounded-xl shadow-sm mt-3 bg-white'> {/* Added bg-white here */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
        
        <div className='flex gap-2'>
          <HiOutlineChartBar className='text-4xl text-primary' />
          <div>
            <h2 className='text-xs text-gray-500'>Skill Level</h2>
            <h2 className='font-medium text-lg'>{course?.level || 'Not specified'}</h2> {/* Added default text */}
          </div>
        </div>

        <div className='flex gap-2'>
          <HiOutlineChartBar className='text-4xl text-primary' />
          <div>
            <h2 className='text-xs text-gray-500'>Duration</h2>
            <h2 className='font-medium text-lg'>{course?.courseOutput?.duration || 'Not specified'}</h2> {/* Added default text */}
          </div>
        </div>

        <div className='flex gap-2'>
          <HiOutlineChartBar className='text-4xl text-primary' />
          <div>
            <h2 className='text-xs text-gray-500'>Category</h2>
            <h2 className='font-medium text-lg'>{course?.category || 'Not specified'}</h2> {/* Added default text */}
          </div>
        </div>

        <div className='flex gap-2'>
          <HiOutlineChartBar className='text-4xl text-primary' />
          <div>
            <h2 className='text-xs text-gray-500'>Created By</h2>
            <h2 className='font-medium text-lg'>{course?.courseOutput?.createdBy || 'Not specified'}</h2> {/* Added default text */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
