import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { db } from '@/configs/db';
import { eq } from 'drizzle-orm';
import { CourseList } from '@/configs/schema';

function UserCourseList() {
  const { user } = useUser(); // Get the current user from Clerk
  const [courses, setCourses] = useState([]); // State to hold user courses

  useEffect(() => {
    if (user) {
      getUserCourses(); // Call function to fetch user courses
    }
  }, [user]);

  const getUserCourses = async () => {
    try {
      const result = await db
        .select()
        .from(CourseList)
        .where(eq(CourseList.createdBy, user.primaryEmailAddress.emailAddress));

      setCourses(result); // Set the fetched courses to state
      console.log(result); // Log the result to console
    } catch (error) {
      console.error("Error fetching courses:", error); // Handle any errors
    }
  };

  return (
    <div>
      <h2>User Course List</h2>
      {courses.length > 0 ? (
        <ul>
          {courses.map((course) => (
            <li key={course.id}>{course.title}</li> // Display each course title
          ))}
        </ul>
      ) : (
        <p>No courses found.</p>
      )}
    </div>
  );
}

export default UserCourseList;
