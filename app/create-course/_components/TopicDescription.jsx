import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function TopicDescription() {
  return (
    <div className='mx-20  lg:mx-44'>
        {/* Topic */}
            <div className='mt-5'>
                <label> Write the topic for which u wanna generate the code </label>
                <Input placeholder={'Topic'} />          
            </div>
            <div className='mt-5'>
                <label>Tell us more abot your course, and hat u wnana include in your course(Optional)</label>
                <Textarea placeholder="About your course"/>
            </div>
        {/* Text Area Desc  */}
    
    </div>
  )
}

export default TopicDescription
