import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

function SelectOptions() {
  return (
    <div className='px-10 md:px-20 lg:px-44'>
      <div className="grid grid-cols-2 gap-10">
        <div>
          <label className='text-sm'>Difficulty</label>
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advance">Advance</SelectItem>
            </SelectContent>
          </Select>
        </div>


        <div>
          <label className='text-sm'>Course Duration</label>
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1 Hour">1 Hour</SelectItem>
              <SelectItem value="Intermediate">2 Hour</SelectItem>
              <SelectItem value="Advance">More tha 3 hours</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className='text-sm'>Display Video</label>
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yes">Yes</SelectItem>
              <SelectItem value="no">No</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
            <label className='text-sm'>No of chapters</label>
            <Input type="number" />
        </div>


      </div>
    </div>
  );
}

export default SelectOptions;
