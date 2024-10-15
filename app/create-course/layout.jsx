import React from 'react'
import Header from './Header'


function CreateCourseLayout({children}) {
  return (
    <div>
       <Header />
      {children}
    </div>
  )
}

export default CreateCourseLayout
