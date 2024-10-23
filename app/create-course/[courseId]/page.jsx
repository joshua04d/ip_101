"use client";
import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import { useUser } from '@clerk/nextjs';
import { and, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import CourseBasicInfo from './_component/CourseBasicInfo';
import CourseDetail from './_component/CourseDetail';
import ChapterList from './_component/ChapterList';
import { Button } from '@/components/ui/button';
import { GenerateChapterContent_AI } from '@/configs/AiModel';
import LoadingDialog from '../_components/LoadingDialog';

function CourseLayout({ params }) {
  const { user } = useUser();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (params) {
      GetCourse();
    }
  }, [params, user]);

  const GetCourse = async () => {
    const result = await db
      .select()
      .from(CourseList)
      .where(
        and(
          eq(CourseList.courseId, params?.courseId),
          eq(CourseList?.createdBy, user?.primaryEmailAddress?.emailAddress)
        )
      );
  
    setCourse(result[0]);
    console.log(result[0]); // Log the fetched course object
  };

  const GenerateChapterContent = async () => {
    setLoading(true);

    const courseName = course?.courseOutput?.courseName || "Unknown Course";
    const chapters = course?.courseOutput?.chapters;
  
    if (chapters && chapters.length > 0) {
      // Using for...of to handle async properly
      for (const [index, chapter] of chapters.entries()) {
        const chapterName = chapter?.chapterName || `Chapter ${index + 1}`;
  
        const PROMPT = `Explain the concept in detail on Topic: ${courseName} - ${chapterName} in JSON format with list of array with fields as title, description in detail, Code Example (Code field in <precode> format) if applicable.`;

        try {
          console.log(PROMPT);

          // Only sending the prompt for the first chapter, change this as needed.
          if (index === 0) {
            const result = await GenerateChapterContent_AI.sendMessage(PROMPT);
            const responseText = await result.response?.text();
            console.log(responseText);

            // Future implementation for generating video URLs or saving chapter content
          }
        } catch (error) {
          console.log(error);
          setLoading(false);  // Stop loading if error occurs
        }
      }
    } else {
      console.log("No chapters available.");
    }

    setLoading(false); // Stop loading after processing all chapters
  };

  return (
    <div className='mt-10 px-7 md:px-20 lg:px-44 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 min-h-screen p-6'>
      <h2 className='font-bold text-center text-2xl text-white'>Course Layout</h2>

      <LoadingDialog loading={loading} />

      {/* Basic Info */}
      {course && <CourseBasicInfo course={course} />}

      {/* Course Details */}
      {course && <CourseDetail course={course} />}

      {/* List of Lessons */}
      {course && <ChapterList course={course} />}

      <Button className='my-10' onClick={GenerateChapterContent}>
        Generate Course Content
      </Button>
    </div>
  );
}

export default CourseLayout;
