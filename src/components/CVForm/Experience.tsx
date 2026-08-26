import { addExperience } from "@/lib/features/resumeSlice";
import { RootState } from "@/lib/store";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import ExperienceItem from "./ExperienceItem";
import { FaPlus } from "react-icons/fa";
export default function Experience({ inputClasses }: { inputClasses: string }) {
  const state = useSelector((state: RootState) => state.resume);
  const dispatch = useDispatch();
  const [showExperineces, setShowExperineces] = useState<boolean>(false);
  function createNewExperience() {
    dispatch(
      addExperience({
        id: uuidv4(),
        jobTitle: "",
        company: "",
        startDate: "",
        endDate: "",
        points: [],
      }),
    );
  }

  return (
    <div>
      <div
        className={`mt-4 overflow-hidden border border-[#C3C6D7] rounded-md shadow-lg shadow-gray-300/45 transition-all ${showExperineces ? "max-h-dvh" : "max-h-11"}`}
      >
        <div className="flex items-center justify-between border-b border-b-[#C3C6D7] bg-[#F8F9FF] px-4 py-2">
          <h2 className="flex items-center gap-2 text-lg font-semibold">
            <LuBriefcaseBusiness color="#0D47A1" />
            Work Experience
          </h2>
          <button
            className={`cursor-pointer transition-all ${!showExperineces && "rotate-180"}`}
            onClick={() => setShowExperineces(!showExperineces)}
          >
            <IoIosArrowDown size={25} />
          </button>
        </div>
        <div className="bg-white p-4">
          {state.experience.map((exp) => (
            <ExperienceItem
              exp={exp}
              inputClasses={inputClasses}
              key={exp.id}
            />
          ))}
          <button
            className="mt-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-sm border-2 border-dashed border-[#B4C5FF] p-1 text-center text-lg font-semibold text-[#004AC6]"
            onClick={createNewExperience}
          >
            <FaPlus size={15} /> Add Experience
          </button>
        </div>
      </div>
    </div>
  );
}
