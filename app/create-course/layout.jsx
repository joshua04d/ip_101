"use client"
import React, { useState } from 'react'
import Header from './Header'
import { UserInputContext } from '../_context/UserINputContext'


function CreateCourseLayout({children}) {

  const [userCourseInput, setUserCourseInput] = useState([]);
  return (
    <div>
      <UserInputContext.Provider value={{userCourseInput, setUserCourseInput}}>
        <>
        <Header />
        {children}
        </>
      </UserInputContext.Provider>
    </div>
  )
}

export default CreateCourseLayout
