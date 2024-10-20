import { UserInputContext } from '@/app/_context/UserINputContext';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React, { useContext } from 'react';

function TopicDescription() {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);

  const handleInputChange = (fieldName, value) => {
    setUserCourseInput((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  return (
    <div className="mx-20 lg:mx-44">
      {/* Topic Input */}
      <div className="mt-5">
        <label>Write the topic for which you want to generate the code</label>
        <Input
          placeholder="Topic"
          onChange={(e) => handleInputChange('topic', e.target.value)}
        />
      </div>

      {/* Course Description */}
      <div className="mt-5">
        <label>
          Tell us more about your course, and what you want to include (Optional)
        </label>
        <Textarea
          placeholder="About your course"
          onChange={(e) => handleInputChange('description', e.target.value)}
        />
      </div>
    </div>
  );
}

export default TopicDescription;
