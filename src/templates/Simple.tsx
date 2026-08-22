"use client";
import { RootState } from "@/lib/store";
import React from "react";
import { useSelector } from "react-redux";

// Live preview template — reads resume state from Redux and renders a printable layout
export default function Simple() {
  const resumeData = useSelector((state: RootState) => state.resume);
  const color = useSelector((state: RootState) => state.resume.color);
  return (
    <div className="w-full p-10">
      {/* Header — name and contact details */}
      <h2
        className="mb-2 text-center text-[36px] font-bold uppercase"
        style={{ color }}
      >
        {resumeData.personalInfo.fullName}
      </h2>
      <div className="text-center font-medium">
        <div className="flex items-center justify-center gap-2 text-[#1e1e1e]">
          <span>{resumeData.personalInfo.address}</span>
          {resumeData.personalInfo.address.length > 1 &&
            resumeData.personalInfo.phone && (
              <span className="size-1.25 rounded-full bg-black"></span>
            )}
          <span>{resumeData.personalInfo.phone}</span>

          {resumeData.personalInfo.phone.length > 1 &&
            resumeData.personalInfo.email && (
              <span className="size-1.25 rounded-full bg-black"></span>
            )}
          <a
            href={`mailto:${resumeData.personalInfo.email}`}
            className="hover:bg-amber-50"
          >
            {resumeData.personalInfo.email}
          </a>
        </div>
        <a
          href={`https://${resumeData.personalInfo.website}`}
          target="_blank"
          className="hover:bg-amber-50"
        >
          {resumeData.personalInfo.website}
        </a>
      </div>

      {/* Summary */}
      <div>
        {resumeData.summary && (
          <>
            <div
              className="my-3 h-px w-full"
              style={{ backgroundColor: color }}
            ></div>
            <h2
              className="my-2 text-xl font-semibold uppercase"
              style={{ color }}
            >
              SUMMARY
            </h2>
            <p className="my-1 text-[14.3px] text-[#1e1e1e]">
              {resumeData.summary}
            </p>
            <div
              className="my-3 h-px w-full"
              style={{ backgroundColor: color }}
            ></div>
          </>
        )}
      </div>

      {/* Work experience */}
      <div>
        {resumeData.experience.length > 0 && (
          <h2
            className="my-2 text-xl font-semibold uppercase"
            style={{ color }}
          >
            work experience
          </h2>
        )}
        {resumeData.experience.map((exp, i) => {
          return (
            <div key={i}>
              <div className="flex justify-between font-semibold">
                <h3>
                  {exp.jobTitle}, {exp.company}
                </h3>
                <p>
                  {exp.startDate} {exp.startDate && exp.endDate && "- "}
                  {exp.endDate !== "" ? exp.endDate : "Present"}
                </p>
              </div>

              <ul className="my-2 pl-8">
                {exp.points.map((desc, index) => {
                  return (
                    <li key={index} className="list-disc text-[15.2px]">
                      {desc}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Education */}
      <div>
        {resumeData.education.length > 0 && (
          <h2
            className="my-2 text-xl font-semibold uppercase"
            style={{ color }}
          >
            Education
          </h2>
        )}

        {resumeData.education.map((edu, i) => {
          return (
            <div key={i}>
              <div className="flex justify-between font-semibold">
                <h3>{edu.degree}</h3>

                <p>
                  {edu.startDate} {edu.startDate && edu.endDate && "- "}
                  {edu.endDate !== "" ? edu.endDate : "Present"}
                </p>
              </div>
              <h4>{edu.institution}</h4>
              <ul className="my-2 pl-8">
                {edu.points.map((desc, index) => {
                  return (
                    <li key={index} className="list-disc text-[15.2px]">
                      {desc}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Skills, languages, and certifications */}
      {(resumeData.skills.length > 0 ||
        resumeData.certifications.length > 0 ||
        resumeData.languages.length > 0) && (
        <>
          <h2
            className="my-2 text-xl font-semibold uppercase"
            style={{ color }}
          >
            additional information
          </h2>
        </>
      )}
      <ul className="list-disc">
        {resumeData.skills.length > 0 && (
          <li className="ml-8 list-disc text-[14px]">
            <h4 className="inline font-semibold">Technical Skills: </h4>
            {resumeData.skills.map((skill) => skill.name).join(", ")}
          </li>
        )}
        {resumeData.languages.length > 0 && (
          <li className="ml-8 list-disc text-[14px]">
            <h4 className="inline font-semibold">Languages: </h4>
            {resumeData.languages.map((lang) => lang.name).join(", ")}
          </li>
        )}
        {resumeData.certifications.length > 0 && (
          <li className="ml-8 list-disc text-[14px]">
            <h4 className="inline font-semibold">Certifications: </h4>
            {resumeData.certifications.map((cert) => cert.name).join(", ")}
          </li>
        )}
      </ul>
    </div>
  );
}
