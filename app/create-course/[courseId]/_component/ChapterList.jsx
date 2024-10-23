import React from 'react';
import { HiCheckCircle } from "react-icons/hi";

function ChapterList({ course }) {
  // Use optional chaining and fallback to an empty array if chapters are not available
  const chapters = course?.courseOutput?.chapters || [];

  // Log course and chapters for debugging
  console.log("Course Object: ", course);
  console.log("Chapters: ", chapters);

  return (
    <div className='mt-3'>
      <h2 className='text-white'>Chapters</h2>
      <div className='mt-4'>
        {chapters.length > 0 && (
          chapters.map((chapter, index) => (
            <div key={index} className='chapter-item bg-white border rounded-lg p-4 mb-4 flex justify-between items-center'>
              <div className=''> {/* White text for chapter info */}
                <h1>{`Chapter ${index + 1}: ${chapter?.chapterName || 'Untitled Chapter'}`}</h1>
                <p>{chapter?.about || 'No description available'}</p>
                <p>{`Duration: ${chapter?.duration || 'No duration available'}`}</p>
              </div>
              <HiCheckCircle className='2xl text-grey-100'/>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ChapterList;
