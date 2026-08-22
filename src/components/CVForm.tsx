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

  function createNewSkill(skill: string) {
    if (skill.length > 2) {
      dispatch(setSkills({ id: uuidv4(), name: skill }));
      setSkill({ id: uuidv4(), name: "" });
    }
  }

  function createNewLanguage(lang: string) {
    dispatch(setLanguages({ id: uuidv4(), name: lang }));
    setLanguage({ id: uuidv4(), name: "" });
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
  const [showSkills, setShowSkills] = useState<boolean>(false);
  const [showLanguage, setShowLanguage] = useState<boolean>(false);

  // Draft inputs for tag-style skill and language fields
  const [skill, setSkill] = useState<Single>({ id: uuidv4(), name: "" });
  const [language, setLanguage] = useState<Single>({ id: uuidv4(), name: "" });

  // Effects — hydrate from localStorage on mount
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
          <div className="flex flex-wrap gap-x-4">
            <div
              className={`mt-4 flex-1 basis-sm overflow-hidden border border-[#C3C6D7] rounded-md shadow-lg shadow-gray-300/45 transition-all ${showLanguage ? "max-h-dvh" : "max-h-11"}`}
            >
              <div className="flex items-center justify-between border-b border-b-[#C3C6D7] bg-[#F8F9FF] px-4 py-2">
                <h2 className="flex items-center gap-2 text-lg font-semibold">
                  <HiLanguage color="#0D47A1" />
                  Languages
                </h2>
                <button
                  className={`cursor-pointer transition-all ${!showLanguage && "rotate-180"}`}
                  onClick={() => setShowLanguage(!showLanguage)}
                >
                  <IoIosArrowDown size={25} />
                </button>
              </div>
              <div className="bg-white p-4">
                {/* Add Language */}
                <div className="flex w-full overflow-hidden rounded-lg border border-gray-300 transition-all focus-within:border-[#0D47A1] focus-within:ring-2 focus-within:ring-[#0D47A1]/10">
                  <input
                    type="text"
                    name="languageName"
                    id="languageName"
                    placeholder="e.g. English, Arabic, French"
                    className="min-w-0 flex-1 px-3 py-2 text-sm text-gray-800 outline-none placeholder:text-gray-400"
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
                    className="cursor-pointer px-5 py-2 text-sm font-medium text-white bg-[#0D47A1] transition-colors hover:bg-[#093575]"
                    onClick={() => createNewLanguage(language.name)}
                  >
                    Add
                  </button>
                </div>

                {/* Languages */}
                {languages.length > 0 ? (
                  <div className="mt-4">
                    <p className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
                      Added languages
                    </p>

                    <ul className="flex flex-wrap gap-2">
                      {languages.map((lang) => (
                        <li
                          key={lang.id}
                          className="inline-flex items-center gap-1.5 rounded-full border border-[#C7DAFA] bg-[#E8F0FE] px-3 py-1.5 text-sm font-medium text-[#173B69] transition-colors hover:bg-[#DCEAFF]"
                        >
                          <span>{lang.name}</span>

                          <button
                            type="button"
                            className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500"
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
              className={`mt-4 flex-1 basis-sm overflow-hidden border border-[#C3C6D7] rounded-md shadow-md shadow-gray-300/45 transition-all ${showSkills ? "max-h-dvh" : "max-h-11"}`}
            >
              <div className="flex items-center justify-between border-b border-b-[#C3C6D7] bg-[#F8F9FF] px-4 py-2">
                <h2 className="flex items-center gap-2 text-lg font-semibold">
                  <LuBrain color="#0D47A1" />
                  Skills
                </h2>
                <button
                  className={`cursor-pointer transition-all ${!showSkills && "rotate-180"}`}
                  onClick={() => setShowSkills(!showSkills)}
                >
                  <IoIosArrowDown size={25} />
                </button>
              </div>
              <div className="bg-white p-4">
                {/* Add Skill */}
                <div className="flex w-full overflow-hidden rounded-lg border border-gray-300 transition-all focus-within:border-[#0D47A1] focus-within:ring-2 focus-within:ring-[#0D47A1]/10">
                  <input
                    type="text"
                    name="skillName"
                    id="skillName"
                    placeholder="e.g. React, TypeScript, Next.js"
                    className="min-w-0 flex-1 px-3 py-2 text-sm text-gray-800 outline-none placeholder:text-gray-400"
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
                    className="cursor-pointer px-5 py-2 text-sm font-medium text-white bg-[#0D47A1] transition-colors hover:bg-[#093575]"
                    onClick={() => createNewSkill(skill.name)}
                  >
                    Add
                  </button>
                </div>

                {/* Skills */}
                {skills.length > 0 ? (
                  <div className="mt-4">
                    <p className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
                      Added skills
                    </p>

                    <ul className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <li
                          key={skill.id}
                          className="inline-flex items-center gap-1.5 rounded-full border border-[#C7DAFA] bg-[#E8F0FE] px-3 py-1.5 text-sm font-medium text-[#173B69] transition-colors hover:bg-[#DCEAFF]"
                        >
                          <span>{skill.name}</span>

                          <button
                            type="button"
                            className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500"
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

// Single education entry with inline fields and bullet-point descriptions
function EducationJSX({
  edu,
  inputClasses,
}: {
  edu: Education;
  inputClasses: string;
}) {
  const dispatch = useDispatch();

  return (
    <div className="relative mb-4 rounded-sm border border-gray-300 bg-[#edf0f9a7] p-4">
      {/* Delete Education */}
      <button
        type="button"
        className="absolute right-3 top-3 cursor-pointer text-red-600"
        onClick={() => {
          dispatch(removeEducation(edu.id));
        }}
      >
        <FaRegTrashAlt size={16} />
      </button>

      {/* Degree */}
      <div>
        <label className="text-sm font-semibold" htmlFor={`degree-${edu.id}`}>
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

      <div className="flex gap-4 my-2">
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
      <div className="flex-1">
        <label
          className="text-sm font-semibold"
          htmlFor={`education-start-${edu.id}`}
        >
          GPA
        </label>

        <input
          type="text"
          className={inputClasses}
          id={`education-gpa-${edu.id}`}
          value={edu.gpa}
          onChange={(e) =>
            dispatch(
              updateEducation({
                id: edu.id,
                field: "gpa",
                value: e.target.value,
              }),
            )
          }
        />
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
// Single work experience entry with inline fields and bullet-point descriptions
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

// Header bar — profile completion progress and accent color picker
function Progress({
  percentage,
  color,
}: {
  percentage: number;
  color: string;
}) {
  const dispatch = useDispatch();
  const [custom, setCustom] = useState<string>("#4A2C5A");
  const colors = [
    "#1F3864",
    "#000000",
    "#333333",
    "#1E4D2B",
    "#6E1F2E",
    "#168F8B",
  ];
  return (
    <div className="p-8 shadow shadow-gray-300">
      <h2 className="text-3xl font-semibold">Edit Details</h2>
      <div>
        <h4 className="flex justify-between text-sm font-bold text-[#004AC6]">
          Profile Completion
          <span className="text-[#434655]">{percentage.toFixed()}%</span>
        </h4>
        <div className="relative h-1 overflow-hidden rounded-xl bg-[#D3E4FE]">
          <span
            className="absolute h-full bg-[#004AC6] transition-[width] duration-200 ease"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        {colors.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => dispatch(setColor(item))}
            className={`size-8 rounded-full border-2 shadow-xl shadow-blue-500/25 ${
              color === item
                ? "border-slate-700 -translate-y-0.5"
                : "border-transparent shadow-transparent"
            }`}
            style={{
              backgroundColor: item,
            }}
          />
        ))}
        <label
          htmlFor="color"
          className="group relative block size-8 cursor-pointer overflow-hidden rounded-full"
          style={{ backgroundColor: custom }}
        >
          <VscSettingsCompact
            className="
      absolute
      inset-0
      m-auto
      size-full
      rounded-full
      bg-black/50
      p-1
      text-white
      opacity-0
      transition-opacity
      duration-200
      group-hover:opacity-100
    "
          />

          <input
            type="color"
            id="color"
            value={custom}
            onChange={(e) => {
              const value = e.target.value;

              setCustom(value);
              dispatch(setColor(value));
            }}
            className="absolute inset-0 cursor-pointer opacity-0"
          />
        </label>
      </div>
    </div>
  );
}
