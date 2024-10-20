import React, { useContext } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { UserInputContext } from "@/app/_context/UserINputContext";

function SelectOptions() {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);

  const handleInputChange = (fieldName, value) => {
    setUserCourseInput((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  return (
    <div className="px-10 md:px-20 lg:px-44">
      <div className="grid grid-cols-2 gap-10">
        {/* Difficulty Selection */}
        <div>
          <label className="text-sm">Difficulty</label>
          <Select
            value={userCourseInput?.level} // Use value instead of defaultValue
            onValueChange={(value) => handleInputChange("level", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Course Duration */}
        <div>
          <label className="text-sm">Course Duration</label>
          <Select
            value={userCourseInput?.duration} // Use value instead of defaultValue
            onValueChange={(value) => handleInputChange("duration", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1 Hour">1 Hour</SelectItem>
              <SelectItem value="2 Hours">2 Hours</SelectItem>
              <SelectItem value="More than 3 Hours">More than 3 Hours</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Display Video Selection */}
        <div>
          <label className="text-sm">Display Video</label>
          <Select
            value={userCourseInput?.displayVideo} // Use value instead of defaultValue
            onValueChange={(value) => handleInputChange("displayVideo", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yes">Yes</SelectItem>
              <SelectItem value="no">No</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Number of Chapters Input */}
        <div>
          <label className="text-sm">Number of Chapters</label>
          <Input
            value={userCourseInput?.noOfChapters} // Use value instead of defaultValue
            type="number"
            onChange={(event) => handleInputChange("noOfChapters", event.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default SelectOptions;
