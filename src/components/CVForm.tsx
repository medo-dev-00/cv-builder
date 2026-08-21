"use client";

import { FaRegUser } from "react-icons/fa6";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";
import { LuBriefcaseBusiness, LuBrain } from "react-icons/lu";
import { SlGraduation } from "react-icons/sl";
import { FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { VscSettingsCompact } from "react-icons/vsc";
import { HiLanguage } from "react-icons/hi2";
import { v4 as uuidv4 } from "uuid";
import {
  addEducation,
  addExperience,
  Education,
  Experience,
  removeEducation,
  removeExperience,
  updatePersonalInfo,
  updateSummary,
  updateExperience,
  setSkills,
  Single,
  removeSkill,
  removeLanguage,
  setLanguages,
  setResume,
  setColor,
  updateEducation,
  removeEducationPoint,
  updateEducationPoint,
  addEducationPoint,
  addExperiencePoint,
  removeExperiencePoint,
  updateExperiencePoint,
} from "@/lib/features/resumeSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";

// Types and Interfaces

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
  // Add New Education Field
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

  // Add New Experience Field
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

  // Add New Skill
  function createNewSkill(skill: string) {
    if (skill.length > 2) {
      dispatch(setSkills({ id: uuidv4(), name: skill }));
      setSkill({ id: uuidv4(), name: "" });
    }
  }
  // Add New Skill
  function createNewLanguage(lang: string) {
    dispatch(setLanguages({ id: uuidv4(), name: lang }));
    setLanguage({ id: uuidv4(), name: "" });
  }
  const inputClasses =
    "border border-gray-300 mt-0.5 bg-gray-50/99 rounded-sm block w-full focus:outline-none p-1.5 indent-2 focus:border-[#0D47A1] transition-all";
  const [progress, setProgress] = useState<number>(0);

  const percentage = (progress * 100) / 320;

  // UI States
  const [showPersonalInfo, setShowPersonalInfo] = useState<boolean>(false);
  const [showEducations, setShowEducations] = useState<boolean>(false);
  const [showExperineces, setShowExperineces] = useState<boolean>(false);
  const [showSummary, setShowSummary] = useState<boolean>(false);
  const [showSkills, setShowSkills] = useState<boolean>(false);
  const [showLanguage, setShowLanguage] = useState<boolean>(false);
  // Temporary States
  const [skill, setSkill] = useState<Single>({ id: uuidv4(), name: "" });
  const [language, setLanguage] = useState<Single>({ id: uuidv4(), name: "" });

  useEffect(() => {
    const savedUser = localStorage.getItem("userInfo");
    if (!savedUser) return;
    try {
      const data = JSON.parse(savedUser);
      dispatch(setResume(data));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);
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
  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem("userInfo", JSON.stringify(state));
  }, [state, hydrated]);
  return (
    <>
      <Progress percentage={percentage} color={color} />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex-1 min-w-100 h-[80vh] overflow-auto p-4"
      >
        <div>
          <div
            className={`shadow-lg shadow-gray-300/45 border border-[#C3C6D7] rounded-md overflow-hidden bg-white ${showPersonalInfo ? "max-h-dvh" : "max-h-11"} transition-all`}
          >
            <div className="flex overflow-hidden bg-[#F8F9FF] px-4 py-2 items-center justify-between border-b border-b-[#C3C6D7]">
              <div className="flex relative z-50">
                <h2 className="flex items-center gap-2 text-lg font-semibold text-black">
                  <FaRegUser color="#0D47A1" />
                  Personal Info
                </h2>
              </div>
              <button
                className={`cursor-pointer ${!showPersonalInfo && "rotate-180"} transition-all`}
                onClick={() => setShowPersonalInfo(!showPersonalInfo)}
              >
                <IoIosArrowDown size={25}></IoIosArrowDown>
              </button>
            </div>

            <div className="p-4">
              <div>
                <label className="font-semibold text-sm" htmlFor="fullname">
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

              <div className="flex gap-2 my-2 flex-wrap">
                <div className="flex-1 basis-72">
                  <label className="font-semibold text-sm" htmlFor="address">
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
                <div className="flex-1 basis-72">
                  <label
                    className="font-semibold text-sm"
                    htmlFor="phoneNumber"
                  >
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
              </div>
              <div className="flex gap-2 w-full flex-wrap">
                <div className="flex-1 basis-72">
                  <label className="font-semibold text-sm" htmlFor="email">
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
                  <label className="font-semibold text-sm" htmlFor="website">
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
          </div>

          <div>
            <div
              className={`shadow-lg shadow-gray-300/45 border border-[#C3C6D7] rounded-md overflow-hidden mt-4 ${showSummary ? "max-h-dvh" : "max-h-11"} transition-all`}
            >
              <div className="flex bg-[#F8F9FF] px-4 py-2 items-center justify-between border-b border-b-[#C3C6D7]">
                <h2 className="flex items-center gap-2 text-lg font-semibold">
                  <AiOutlineAlignLeft color="#0D47A1" />
                  Professional Summary
                </h2>
                <button
                  className={`cursor-pointer ${!showSummary && "rotate-180"} transition-all`}
                  onClick={() => setShowSummary(!showSummary)}
                >
                  <IoIosArrowDown size={25}></IoIosArrowDown>
                </button>
              </div>
              <textarea
                name="summary"
                id="summary"
                className="w-full p-4 resize-none h-70 focus:outline-none bg-white"
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
              className={`shadow-lg shadow-gray-300/45 border border-[#C3C6D7] rounded-md overflow-hidden mt-4 ${showExperineces ? "max-h-dvh" : "max-h-11"} transition-all`}
            >
              <div className="flex bg-[#F8F9FF] px-4 py-2 items-center justify-between border-b border-b-[#C3C6D7]">
                <h2 className="flex items-center gap-2 text-lg font-semibold">
                  <LuBriefcaseBusiness color="#0D47A1" />
                  Work Experience
                </h2>
                <button
                  className={`cursor-pointer ${!showExperineces && "rotate-180"} transition-all`}
                  onClick={() => setShowExperineces(!showExperineces)}
                >
                  <IoIosArrowDown size={25}></IoIosArrowDown>
                </button>
              </div>
              <div className="p-4 bg-white">
                {experience.map((exp) => (
                  <ExperienceJSX
                    exp={exp}
                    inputClasses={inputClasses}
                    key={exp.id}
                  />
                ))}
                <button
                  className="text-lg flex gap-2 justify-center items-center p-1 w-full 
                border-2 font-semibold border-dashed border-[#B4C5FF] rounded-sm text-center
                cursor-pointer text-[#004AC6] mt-4"
                  onClick={createNewExperience}
                >
                  <FaPlus size={15} /> Add Experience
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`shadow-lg  shadow-gray-300/45 border border-[#C3C6D7] rounded-md overflow-hidden mt-4 ${showEducations ? "max-h-dvh" : "max-h-11"} transition-all`}
            >
              <div className="flex bg-[#F8F9FF] px-4 py-2 items-center justify-between border-b border-b-[#C3C6D7]">
                <h2 className="flex items-center gap-2 text-lg font-semibold">
                  <SlGraduation color="#0D47A1" />
                  Educations
                </h2>
                <button
                  className={`cursor-pointer ${!showEducations && "rotate-180"} transition-all`}
                  onClick={() => setShowEducations(!showEducations)}
                >
                  <IoIosArrowDown size={25} />
                </button>
              </div>
              <div className="p-4 bg-white">
                {education.map((edu) => (
                  <EducationJSX
                    edu={edu}
                    inputClasses={inputClasses}
                    key={edu.id}
                  />
                ))}
                <button
                  className="text-lg flex gap-2 justify-center items-center p-1 w-full 
                border-2 font-semibold border-dashed border-[#B4C5FF] rounded-sm text-center
                cursor-pointer text-[#004AC6] mt-4"
                  onClick={createNewEducation}
                >
                  <FaPlus size={15} /> Add Education
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-x-4 flex-wrap">
            <div
              className={`flex-1 basis-sm shadow-lg shadow-gray-300/45 border border-[#C3C6D7] rounded-md overflow-hidden mt-4 ${showLanguage ? "max-h-dvh" : "max-h-11"} transition-all`}
            >
              <div className="flex bg-[#F8F9FF] px-4 py-2 items-center justify-between border-b border-b-[#C3C6D7]">
                <h2 className="flex items-center gap-2 text-lg font-semibold">
                  <HiLanguage color="#0D47A1" />
                  Languages
                </h2>
                <button
                  className={`cursor-pointer ${!showLanguage && "rotate-180"} transition-all`}
                  onClick={() => setShowLanguage(!showLanguage)}
                >
                  <IoIosArrowDown size={25} />
                </button>
              </div>
              <div className="p-4 bg-white">
                {/* Add Language */}
                <div className="flex w-full overflow-hidden border border-gray-300 rounded-lg focus-within:border-[#0D47A1] focus-within:ring-2 focus-within:ring-[#0D47A1]/10 transition-all">
                  <input
                    type="text"
                    name="languageName"
                    id="languageName"
                    placeholder="e.g. English, Arabic, French"
                    className="
        flex-1
        min-w-0
        px-3
        py-2
        text-sm
        text-gray-800
        placeholder:text-gray-400
        outline-none
      "
                    value={language.name}
                    onChange={(e) =>
                      setLanguage((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && language.name.trim()) {
                        createNewLanguage(language.name);
                      }
                    }}
                  />

                  <button
                    type="button"
                    className="
        px-5
        py-2
        bg-[#0D47A1]
        hover:bg-[#093575]
        text-white
        text-sm
        font-medium
        transition-colors
        cursor-pointer
      "
                    onClick={() => createNewLanguage(language.name)}
                  >
                    Add
                  </button>
                </div>

                {/* Languages */}
                {languages.length > 0 ? (
                  <div className="mt-4">
                    <p className="mb-2 text-xs font-medium text-gray-500 uppercase tracking-wide">
                      Added languages
                    </p>

                    <ul className="flex flex-wrap gap-2">
                      {languages.map((lang) => (
                        <li
                          key={lang.id}
                          className="
              inline-flex
              items-center
              gap-1.5
              px-3
              py-1.5
              bg-[#E8F0FE]
              text-[#173B69]
              border border-[#C7DAFA]
              rounded-full
              text-sm
              font-medium
              hover:bg-[#DCEAFF]
              transition-colors
            "
                        >
                          <span>{lang.name}</span>

                          <button
                            type="button"
                            className="
                flex
                items-center
                justify-center
                w-5
                h-5
                rounded-full
                text-gray-400
                hover:text-red-500
                hover:bg-red-50
                transition-colors
                cursor-pointer
              "
                            onClick={() => dispatch(removeLanguage(lang.id))}
                          >
                            <FaRegTrashAlt size={11} />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p className="mt-4 text-center text-sm text-gray-400">
                    Add the languages you speak
                  </p>
                )}
              </div>
            </div>
            <div
              className={`flex-1 basis-sm shadow-md shadow-gray-300/45 border border-[#C3C6D7] rounded-md overflow-hidden mt-4 ${showSkills ? "max-h-dvh" : "max-h-11"} transition-all`}
            >
              <div className="flex bg-[#F8F9FF] px-4 py-2 items-center justify-between border-b border-b-[#C3C6D7]">
                <h2 className="flex items-center gap-2 text-lg font-semibold">
                  <LuBrain color="#0D47A1" />
                  Skills
                </h2>
                <button
                  className={`cursor-pointer ${!showSkills && "rotate-180"} transition-all`}
                  onClick={() => setShowSkills(!showSkills)}
                >
                  <IoIosArrowDown size={25} />
                </button>
              </div>
              <div className="p-4 bg-white">
                {/* Add Skill */}
                <div className="flex w-full overflow-hidden border border-gray-300 rounded-lg focus-within:border-[#0D47A1] focus-within:ring-2 focus-within:ring-[#0D47A1]/10 transition-all">
                  <input
                    type="text"
                    name="skillName"
                    id="skillName"
                    placeholder="e.g. React, TypeScript, Next.js"
                    className="
        flex-1
        min-w-0
        px-3
        py-2
        text-sm
        text-gray-800
        placeholder:text-gray-400
        outline-none
      "
                    value={skill.name}
                    onChange={(e) =>
                      setSkill((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && skill.name.trim()) {
                        createNewSkill(skill.name);
                      }
                    }}
                  />

                  <button
                    type="button"
                    className="
        px-5
        py-2
        bg-[#0D47A1]
        hover:bg-[#093575]
        text-white
        text-sm
        font-medium
        transition-colors
        cursor-pointer
      "
                    onClick={() => createNewSkill(skill.name)}
                  >
                    Add
                  </button>
                </div>

                {/* Skills */}
                {skills.length > 0 ? (
                  <div className="mt-4">
                    <p className="mb-2 text-xs font-medium text-gray-500 uppercase tracking-wide">
                      Added skills
                    </p>

                    <ul className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <li
                          key={skill.id}
                          className="
                            inline-flex
                            items-center
                            gap-1.5
                            px-3
                            py-1.5
                            bg-[#E8F0FE]
                            text-[#173B69]
                            border border-[#C7DAFA]
                            rounded-full
                            text-sm
                            font-medium
                            hover:bg-[#DCEAFF]
                            transition-colors
            "
                        >
                          <span>{skill.name}</span>

                          <button
                            type="button"
                            className="
                flex
                items-center
                justify-center
                w-5
                h-5
                rounded-full
                text-gray-400
                hover:text-red-500
                hover:bg-red-50
                transition-colors
                cursor-pointer
              "
                            onClick={() => dispatch(removeSkill(skill.id))}
                          >
                            <FaRegTrashAlt size={11} />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p className="mt-4 text-center text-sm text-gray-400">
                    Add your technical skills above
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

function EducationJSX({
  edu,
  inputClasses,
}: {
  edu: Education;
  inputClasses: string;
}) {
  const dispatch = useDispatch();

  return (
    <div className="relative mb-4 bg-[#edf0f9a7] p-4 border border-gray-300 rounded-sm">
      {/* Delete Education */}
      <button
        type="button"
        className="absolute right-3 top-3 text-red-600 cursor-pointer"
        onClick={() => {
          dispatch(removeEducation(edu.id));
        }}
      >
        <FaRegTrashAlt size={16} />
      </button>

      {/* Degree */}
      <div>
        <label className="font-semibold text-sm" htmlFor={`degree-${edu.id}`}>
          Degree
        </label>

        <input
          type="text"
          className={inputClasses}
          id={`degree-${edu.id}`}
          value={edu.degree}
          onChange={(e) =>
            dispatch(
              updateEducation({
                id: edu.id,
                field: "degree",
                value: e.target.value,
              }),
            )
          }
        />
      </div>

      {/* Institution + Dates */}
      <div className="mt-4 flex gap-4">
        {/* Institution */}
        <div className="flex-1">
          <label
            className="text-sm font-semibold"
            htmlFor={`institution-${edu.id}`}
          >
            Institution
          </label>

          <input
            type="text"
            className={inputClasses}
            id={`institution-${edu.id}`}
            value={edu.institution}
            onChange={(e) =>
              dispatch(
                updateEducation({
                  id: edu.id,
                  field: "institution",
                  value: e.target.value,
                }),
              )
            }
          />
        </div>

        {/* Start Date */}
        <div className="flex-1">
          <label
            className="text-sm font-semibold"
            htmlFor={`education-start-${edu.id}`}
          >
            Start Date
          </label>

          <input
            type="text"
            className={inputClasses}
            id={`education-start-${edu.id}`}
            value={edu.startDate}
            onChange={(e) =>
              dispatch(
                updateEducation({
                  id: edu.id,
                  field: "startDate",
                  value: e.target.value,
                }),
              )
            }
          />
        </div>

        {/* End Date */}
        <div className="flex-1">
          <label
            className="text-sm font-semibold"
            htmlFor={`education-end-${edu.id}`}
          >
            End Date
          </label>

          <input
            type="text"
            className={inputClasses}
            id={`education-end-${edu.id}`}
            value={edu.endDate}
            onChange={(e) =>
              dispatch(
                updateEducation({
                  id: edu.id,
                  field: "endDate",
                  value: e.target.value,
                }),
              )
            }
          />
        </div>
      </div>

      {/* Description */}
      <div className="mt-5">
        <label className="text-sm font-semibold">Description</label>

        <div className="mt-2 space-y-2">
          {edu.points.map((point, index) => (
            <div key={index} className="flex items-center gap-2">
              <input
                type="text"
                className={inputClasses}
                placeholder="e.g. Graduated with honors..."
                value={point}
                onChange={(e) =>
                  dispatch(
                    updateEducationPoint({
                      id: edu.id,
                      pointIndex: index,
                      value: e.target.value,
                    }),
                  )
                }
              />

              <button
                type="button"
                className="shrink-0 text-red-600 hover:text-red-700"
                onClick={() =>
                  dispatch(
                    removeEducationPoint({
                      id: edu.id,
                      pointIndex: index,
                    }),
                  )
                }
              >
                <FaRegTrashAlt size={15} />
              </button>
            </div>
          ))}
        </div>

        {/* Add Description */}
        <button
          type="button"
          className="mt-3 text-sm font-semibold text-[#0D47A1] hover:underline"
          onClick={() =>
            dispatch(
              addEducationPoint({
                id: edu.id,
                point: "",
              }),
            )
          }
        >
          + Add description
        </button>
      </div>
    </div>
  );
}
function ExperienceJSX({
  exp,
  inputClasses,
}: {
  exp: Experience;
  inputClasses: string;
}) {
  const dispatch = useDispatch();
  return (
    <div
      key={exp.id}
      className="relative mb-4 rounded-sm border border-gray-300 bg-[#edf0f9a7] p-4"
    >
      <button
        type="button"
        className="absolute right-3 top-3 cursor-pointer text-red-600"
        onClick={() => {
          dispatch(removeExperience(exp.id));
        }}
      >
        <FaRegTrashAlt size={16} />
      </button>
      <div>
        <label className="text-sm font-semibold" htmlFor={`jobTitle-${exp.id}`}>
          Job Title
        </label>

        <input
          type="text"
          className={inputClasses}
          id={`jobTitle-${exp.id}`}
          value={exp.jobTitle}
          onChange={(e) =>
            dispatch(
              updateExperience({
                id: exp.id,
                field: "jobTitle",
                value: e.target.value,
              }),
            )
          }
        />
      </div>
      <div className="mt-4 flex gap-4">
        <div>
          <label
            className="text-sm font-semibold"
            htmlFor={`company-${exp.id}`}
          >
            Company
          </label>

          <input
            type="text"
            className={inputClasses}
            id={`company-${exp.id}`}
            value={exp.company}
            onChange={(e) =>
              dispatch(
                updateExperience({
                  id: exp.id,
                  field: "company",
                  value: e.target.value,
                }),
              )
            }
          />
        </div>

        <div>
          <label
            className="text-sm font-semibold"
            htmlFor={`startDate-${exp.id}`}
          >
            Start Date
          </label>

          <input
            type="text"
            className={inputClasses}
            id={`startDate-${exp.id}`}
            value={exp.startDate}
            onChange={(e) =>
              dispatch(
                updateExperience({
                  id: exp.id,
                  field: "startDate",
                  value: e.target.value,
                }),
              )
            }
          />
        </div>

        <div>
          <label
            className="text-sm font-semibold"
            htmlFor={`endDate-${exp.id}`}
          >
            End Date
          </label>

          <input
            type="text"
            className={inputClasses}
            id={`endDate-${exp.id}`}
            value={exp.endDate}
            onChange={(e) =>
              dispatch(
                updateExperience({
                  id: exp.id,
                  field: "endDate",
                  value: e.target.value,
                }),
              )
            }
          />
        </div>
      </div>{" "}
      {/* Description */}
      <div className="mt-5">
        <label className="text-sm font-semibold">Description</label>

        <div className="mt-2 space-y-2">
          {exp.points.map((point, index) => (
            <div key={index} className="flex items-center gap-2">
              <input
                type="text"
                className={inputClasses}
                placeholder="e.g. Graduated with honors..."
                value={point}
                onChange={(e) =>
                  dispatch(
                    updateExperiencePoint({
                      id: exp.id,
                      pointIndex: index,
                      value: e.target.value,
                    }),
                  )
                }
              />

              <button
                type="button"
                className="shrink-0 text-red-600 hover:text-red-700"
                onClick={() =>
                  dispatch(
                    removeExperiencePoint({
                      id: exp.id,
                      pointIndex: index,
                    }),
                  )
                }
              >
                <FaRegTrashAlt size={15} />
              </button>
            </div>
          ))}
        </div>

        {/* Add Description */}
        <button
          type="button"
          className="mt-3 text-sm font-semibold text-[#0D47A1] hover:underline"
          onClick={() =>
            dispatch(
              addExperiencePoint({
                id: exp.id,
                point: "",
              }),
            )
          }
        >
          + Add description
        </button>
      </div>
    </div>
  );
}

function Progress({
  percentage,
  color,
}: {
  percentage: number;
  color: string;
}) {
  const dispatch = useDispatch();
  const [custom, setCustom] = useState<string>("#8055a2");
  const colors = ["#1d1d1d", "#1F3864", "#333333", "#374151", "#7C3AED"];
  return (
    <div className="p-8 shadow shadow-gray-300">
      <h2 className="text-3xl font-semibold">Edit Details</h2>
      <div>
        <h4 className="text-[#004AC6] font-bold text-sm flex justify-between">
          Profile Completion
          <span className="text-[#434655]">{percentage.toFixed()}%</span>
        </h4>
        <div className="relative bg-[#D3E4FE] h-1 rounded-xl overflow-hidden">
          <span
            className="bg-[#004AC6] absolute h-full transition-[width] duration-200 ease"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      <div className="flex gap-2 mt-4">
        {colors.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => dispatch(setColor(item))}
            className={`size-8 rounded-full border-2 ${
              color === item ? "border-slate-700" : "border-transparent"
            }`}
            style={{
              backgroundColor: item,
            }}
          />
        ))}
        <label
          htmlFor="color"
          className="relative overflow-hidden size-8 rounded-full "
        >
          <VscSettingsCompact className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 text-white bg-black/50 w-full h-full rounded-full p-1 opacity-0 hover:opacity-100 cursor-pointer" />
          <input
            key={color}
            type="color"
            id="color"
            onChange={(e) => {
              const value = e.target.value;
              setCustom(value);
              dispatch(setColor(value));
            }}
            value={custom}
            className="size-8 rounded-full border-2"
            style={{
              backgroundColor: color,
            }}
          />{" "}
        </label>
      </div>
    </div>
  );
}
