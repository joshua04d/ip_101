"use client"
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import React, { useContext, useEffect, useState } from "react";
import { HiClipboardDocumentCheck, HiLightBulb, HiMiniSquares2X2 } from "react-icons/hi2";
import SelectCategory from "./_components/SelectCategory";
import TopicDescription from "./_components/TopicDescription";
import SelectOptions from "./_components/SelectOptions";
import { UserInputContext } from "../_context/UserINputContext";
import { GenerateCourseLayout_AI } from "@/configs/AiModel";
import LoadingDialog from "./_components/LoadingDialog";
import { CourseList } from "@/configs/schema";
import { db } from "@/configs/db";
import uuid4 from "uuid4";
import { useUser } from "@clerk/nextjs";
// import { useRouter } from "next/router";

function CreateCourse() {
  const routero= useRouter();
  const {user}=useUser();
  const [loading, setLoading]=useState(false);
  const checkStatus=()=>{
    if(userCourseInput?.length==0)
    {
      return true;
    }
    if(activeIndex==0&&(userCourseInput?.category?.length==0||userCourseInput?.category==undefined))
    {
      return true;
    }
    if(activeIndex==1&&(userCourseInput?.topic?.length==0||userCourseInput?.topic==undefined))
    {
      return true ; 
    }
    else if(activeIndex==2&&(userCourseInput?.level==undefined||userCourseInput?.duration==undefined||userCourseInput?.displayVideo==undefined ||userCourseInput?.noOfChapters==undefined))
    {
      return true;
    }
      return false;  
  }

const GenerateCourseLayout=async()=>{
  setLoading(true) 
  
  const BASIC_PROMPT = 'Generate a course Tutorial on Following details with field as Course Name, Description, Along with Chapter Name, About, Duration:'
   const USER_INPUT_PROMPT ='Category: '+userCourseInput?.category+', Topic: '+ userCourseInput?.topic+' , Level: '+userCourseInput?.level+', Duration: '+userCourseInput?.duration+', NoOfChapters:'+userCourseInput?.noOfChapters+', in JSON format'
   const FINAL_PROMPT = BASIC_PROMPT+USER_INPUT_PROMPT
   console.log(FINAL_PROMPT);

   const result = await GenerateCourseLayout_AI.sendMessage(FINAL_PROMPT);
   console.log(result.response?.text());
   console.log(JSON.parse(result.response?.text()))

   setLoading(false);
   SaveCourseLayoutInDb(JSON.parse(result.response?.text()));
  }
  
  const SaveCourseLayoutInDb=async(courseLayout)=>{
    var id =uuid4();
     setLoading(true)

    const result= await db.insert(CourseList).values({
      courseId:id,
      name:userCourseInput?.topic,
      level:userCourseInput?.level,
      category:userCourseInput?.category,
      courseOutput:courseLayout,
      createdBy:user?.primaryEmailAddress?.emailAddress,
      userName:user?.fullName,
      userProfileImage:user?.imageUrl   
    });

    console.log("Finish");
    routero.replace('/create-course/'+id);
    setLoading(false);
  }

  const StepperOptions = [
    {
      id: 1,
      name: "Category",
      icon: <HiMiniSquares2X2 />,
    },
    {
      id: 2,
      name: "Topic & Desc",
      icon: <HiLightBulb />,
    },
    {
      id: 3,
      name: "Options",
      icon: <HiClipboardDocumentCheck />,
    },
  ];

  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);

  const [activeIndex, SetActiveIndex] = useState (0);

useEffect(()=>{
  console.log(userCourseInput);
},[userCourseInput])

  return (
    <div>
      {/* Stepper */}
      <div>
        <div className="flex flex-col justify-center items-center mt-10">
          <h2 className="text-3xl text-primary font-medium"> Create Course </h2>
          <div className='flex m-10'>
            {StepperOptions.map((item,index)=>(
              <div className='flex items-center '>
                <div className='flex flex-col items-center w-[50px] md:w-[100px]'>
                  <div className={`bg-gray-200 p-3 rounded-full text-white ${activeIndex>=index&&'bg-primary'}`}>
                  {item.icon}
                  </div>
                  <h2 className='hidden md:block md:text-sm'>{item.name}</h2>
                </div>
                {index !== StepperOptions?.length-1 && <div className={`h-1 w-[50px] md:w-[100px] rounded-full lg:w-[170px] bg-gray-300 ${activeIndex-1>=index&&'bg-primary'}`}></div>
              }
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className='px-10 md:px-20 lg:px-44 mt-10'>
      {/* Component  */}

            {activeIndex ==0? < SelectCategory/> : activeIndex==1?<TopicDescription/>: activeIndex==2?<SelectOptions/>: null }
      {/* Next Previous Button  */}
      
      <div className='flex justify-between mt-10'>
        <Button variant='outline' disabled={activeIndex==0} onClick={()=>SetActiveIndex(activeIndex-1)}>Previous</Button>
       
       {activeIndex<2 && <Button disabled={checkStatus()} onClick={()=>SetActiveIndex(activeIndex+1)} >Next</Button>}
       {activeIndex==2 && <Button disabled={checkStatus()} onClick={()=>GenerateCourseLayout()}>Generate Course Layout</Button>}
        </div>
      </div>
      <LoadingDialog loading={loading}/>
    </div>
  );
}

export default CreateCourse;
