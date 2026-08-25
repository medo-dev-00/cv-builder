"use client";

import { FaRegUser } from "react-icons/fa6";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { SlGraduation } from "react-icons/sl";
import { FaPlus } from "react-icons/fa";

import { v4 as uuidv4 } from "uuid";
import {
  addEducation,
  addExperience,
  updatePersonalInfo,
  updateSummary,
  setResume,
  addMoreSection,
} from "@/lib/features/resumeSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import NewField from "./CVForm/NewField";
import Skills from "./CVForm/SkillsField";
import EducationJSX from "./CVForm/EducationItem";
import ExperienceJSX from "./CVForm/ExperienceItem";
import Progress from "./CVForm/CVHeader";

// Resume data entry form — dispatches Redux updates and persists to localStorage
export default function CVForm() {
  const state = useSelector((state: RootState) => state.resume);
  const dispatch = useDispatch();

  const [hydrated, setHydrated] = useState(false);
  const {
    education,
    experience,
    languages,
    personalInfo,
    skills,
    summary,
    color,
  } = state;

  // Handlers

  function createNewEducation() {
    dispatch(
      addEducation({
        id: uuidv4(),
        degree: "",
        institution: "",
        startDate: "",
        endDate: "",
        points: [],
      }),
    );
  }

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

  // Constants

  const inputClasses =
    "block w-full mt-0.5 p-1.5 indent-2 border border-gray-300 rounded-sm bg-gray-50/99 transition-all focus:outline-none focus:border-[#0D47A1]";
  const [progress, setProgress] = useState<number>(0);

  // Completion score mapped to a 0–100 percentage (max progress = 320)
  const percentage = (progress * 100) / 320;

  // State — collapsible section visibility
  const [showPersonalInfo, setShowPersonalInfo] = useState<boolean>(false);
  const [showEducations, setShowEducations] = useState<boolean>(false);
  const [showExperineces, setShowExperineces] = useState<boolean>(false);
  const [showSummary, setShowSummary] = useState<boolean>(false);

  // Recalculate profile completion whenever resume fields change
  useEffect(() => {
    function trackingProgress() {
      let newProgress = 0;

      if (personalInfo.fullName.length > 4) {
        newProgress += 5;
      }

      if (personalInfo.address.length > 8) {
        newProgress += 5;
      }

      if (personalInfo.email.length > 1) {
        newProgress += 5;
      }

      if (personalInfo.phone.length > 10) {
        newProgress += 5;
      }

      if (personalInfo.website.length > 2) {
        newProgress += 5;
      }

      if (summary.trim().length > 20) {
        newProgress += 15;
      }

      if (experience.length > 0) {
        newProgress += 25;
      }

      if (education.length > 0) {
        newProgress += 15;
      }

      if (skills.length > 0) {
        newProgress += 10;
      }

      if (languages.length > 0) {
        newProgress += 10;
      }

      setProgress(newProgress);
    }
    trackingProgress();
  }, [personalInfo, summary, experience, education, skills, languages]);

  useEffect(() => {
    function loadData() {
      const savedUser = localStorage.getItem("userInfo");

      if (savedUser) {
        try {
          const data = JSON.parse(savedUser);
          dispatch(setResume(data));
        } catch (error) {
          console.error("Failed to load resume:", error);
        }
      }

      setHydrated(true);
    }
    loadData();
  }, [dispatch]);

  // Persist entire resume state to localStorage after initial hydration
  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem("userInfo", JSON.stringify(state));
  }, [state, hydrated]);

  // Render
  return (
    <>
      <Progress percentage={percentage} color={color} />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex-1 min-w-100 h-[80vh] overflow-auto p-4"
      >
        <div>
          <div
            className={`overflow-hidden border border-[#C3C6D7] rounded-md bg-white shadow-lg shadow-gray-300/45 transition-all ${showPersonalInfo ? "max-h-dvh" : "max-h-11"}`}
          >
            <div className="flex items-center justify-between overflow-hidden border-b border-b-[#C3C6D7] bg-[#F8F9FF] px-4 py-2">
              <div className="relative z-50 flex">
                <h2 className="flex items-center gap-2 text-lg font-semibold text-black">
                  <FaRegUser color="#0D47A1" />
                  Personal Info
                </h2>
              </div>
              <button
                className={`cursor-pointer transition-all ${!showPersonalInfo && "rotate-180"}`}
                onClick={() => setShowPersonalInfo(!showPersonalInfo)}
              >
                <IoIosArrowDown size={25}></IoIosArrowDown>
              </button>
            </div>

            <div className="p-4">
              <div>
                <label className="text-sm font-semibold" htmlFor="fullname">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  className={inputClasses}
                  value={personalInfo.fullName}
                  onChange={(e) => {
                    dispatch(updatePersonalInfo({ fullName: e.target.value }));
                  }}
                />
              </div>
              <div className="flex-1 basis-72 mt-2">
                <label className="text-sm font-semibold" htmlFor="website">
                  Job Title
                </label>
                <input
                  type="text"
                  name="job"
                  id="job"
                  className={inputClasses}
                  value={personalInfo.job}
                  onChange={(e) => {
                    dispatch(updatePersonalInfo({ job: e.target.value }));
                  }}
                />
              </div>

              <div className="flex-1 basis-72 my-2">
                <label className="text-sm font-semibold" htmlFor="address">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className={inputClasses}
                  value={personalInfo.address}
                  onChange={(e) => {
                    dispatch(updatePersonalInfo({ address: e.target.value }));
                  }}
                />
              </div>
              <div className="flex-1 basis-72 my-2">
                <label className="text-sm font-semibold" htmlFor="phoneNumber">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  className={inputClasses}
                  inputMode="numeric"
                  value={personalInfo.phone}
                  onChange={(e) => {
                    dispatch(updatePersonalInfo({ phone: e.target.value }));
                  }}
                />
              </div>

              <div className="flex-1 basis-72 my-2">
                <label className="text-sm font-semibold" htmlFor="email">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className={inputClasses}
                  value={personalInfo.email}
                  onChange={(e) => {
                    dispatch(updatePersonalInfo({ email: e.target.value }));
                  }}
                />
              </div>
              <div className="flex-1 basis-72">
                <label className="text-sm font-semibold" htmlFor="website">
                  Website
                </label>
                <input
                  type="text"
                  name="website"
                  id="website"
                  className={inputClasses}
                  value={personalInfo.website}
                  onChange={(e) => {
                    dispatch(updatePersonalInfo({ website: e.target.value }));
                  }}
                />
              </div>
            </div>
          </div>

          <div>
            <div
              className={`mt-4 overflow-hidden border border-[#C3C6D7] rounded-md shadow-lg shadow-gray-300/45 transition-all ${showSummary ? "max-h-dvh" : "max-h-11"}`}
            >
              <div className="flex items-center justify-between border-b border-b-[#C3C6D7] bg-[#F8F9FF] px-4 py-2">
                <h2 className="flex items-center gap-2 text-lg font-semibold">
                  <AiOutlineAlignLeft color="#0D47A1" />
                  Professional Summary
                </h2>
                <button
                  className={`cursor-pointer transition-all ${!showSummary && "rotate-180"}`}
                  onClick={() => setShowSummary(!showSummary)}
                >
                  <IoIosArrowDown size={25}></IoIosArrowDown>
                </button>
              </div>
              <textarea
                name="summary"
                id="summary"
                className="h-70 w-full resize-none bg-white p-4 focus:outline-none"
                placeholder="Results-oriented Engineering Executive with a proven track..."
                value={summary}
                onChange={(e) => {
                  dispatch(updateSummary(e.target.value));
                }}
              ></textarea>
            </div>
          </div>
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
                  <IoIosArrowDown size={25}></IoIosArrowDown>
                </button>
              </div>
              <div className="bg-white p-4">
                {experience.map((exp) => (
                  <ExperienceJSX
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
          <div>
            <div
              className={`mt-4 overflow-hidden border border-[#C3C6D7] rounded-md shadow-lg shadow-gray-300/45 transition-all ${showEducations ? "max-h-dvh" : "max-h-11"}`}
            >
              <div className="flex items-center justify-between border-b border-b-[#C3C6D7] bg-[#F8F9FF] px-4 py-2">
                <h2 className="flex items-center gap-2 text-lg font-semibold">
                  <SlGraduation color="#0D47A1" />
                  Educations
                </h2>
                <button
                  className={`cursor-pointer transition-all ${!showEducations && "rotate-180"}`}
                  onClick={() => setShowEducations(!showEducations)}
                >
                  <IoIosArrowDown size={25} />
                </button>
              </div>
              <div className="bg-white p-4">
                {education.map((edu) => (
                  <EducationJSX
                    edu={edu}
                    inputClasses={inputClasses}
                    key={edu.id}
                  />
                ))}
                <button
                  className="mt-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-sm border-2 border-dashed border-[#B4C5FF] p-1 text-center text-lg font-semibold text-[#004AC6]"
                  onClick={createNewEducation}
                >
                  <FaPlus size={15} /> Add Education
                </button>
              </div>
            </div>
          </div>
          <Skills dispatch={dispatch} skills={skills} />

          {state.moreSections.length > 0 && <h2>Added Sections</h2> &&
            state.moreSections.map((sec) => (
              <NewField dispatch={dispatch} info={sec} key={sec.id} />
            ))}
          <button
            className="mt-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-sm border-2 border-dashed border-[#B4C5FF] p-1 text-center text-lg font-semibold text-[#004AC6]"
            onClick={() => {
              dispatch(
                addMoreSection({
                  id: uuidv4(),
                  sectionName: "New Section",
                  body: [],
                }),
              );
            }}
          >
            <FaPlus size={15} /> Add Section
          </button>
        </div>
      </form>
    </>
  );
}
