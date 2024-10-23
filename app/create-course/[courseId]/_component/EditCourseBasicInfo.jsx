import React, { useState, useEffect } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { DialogClose } from '@radix-ui/react-dialog';
import { Button } from '@/components/ui/button';
import { db } from '@/configs/db';  // Import your db config
import { CourseList } from '@/configs/schema'; // Import your CourseList schema

function EditCourseBasicInfo({ course, onUpdate = () => console.warn('No update handler provided') }) {  // Fallback
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (course) {
      setName(course?.courseOutput?.courseName || '');
      setDescription(course?.courseOutput?.description || '');
    }
  }, [course]);

  const onUpdateHandler = async () => {
    const updatedCourse = {
      ...course,
      courseOutput: {
        ...course.courseOutput,
        courseName: name,
        description: description,
      },
    };

    try {
      // Update the course in the database
      const result = await db.update(CourseList)
        .set({ courseOutput: updatedCourse.courseOutput })
        .where(CourseList.id.eq(course.id)) // Assuming course.id is the identifier
        .returning(CourseList.id);  // Returning the updated id
      console.log("Database Update Result: ", result);
    } catch (error) {
      console.error("Error updating the course: ", error);
    }

    console.log("Updated Course Object: ", updatedCourse);
    onUpdate(updatedCourse);  // Safely call the update function
  };

  return (
    <Dialog>
      <DialogTrigger>
        <HiOutlinePencilAlt />
      </DialogTrigger>
      <DialogContent className="bg-white text-black">
        <DialogHeader>
          <DialogTitle>Edit Course Title & Description</DialogTitle>
          <DialogDescription>
            <div className='mt-3'>
              <label htmlFor="courseTitle">Course Title</label>
              <Input
                id="courseTitle"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className='mt-3'>
              <label htmlFor="courseDescription">Course Description</label>
              <Textarea
                className='h-40'
                id="courseDescription"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={onUpdateHandler}>Update</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
        
  );
}

export default EditCourseBasicInfo;
