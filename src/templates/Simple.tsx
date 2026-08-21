"use client";
import { RootState } from "@/lib/store";
import React from "react";
import { useSelector } from "react-redux";

export default function Simple() {
  const resumeData = useSelector((state: RootState) => state.resume);
  const color = useSelector((state: RootState) => state.resume.color);
  return (
    <div className="w-full p-10 template">
      <h2
        className="text-[28px] font-bold uppercase mb-2 text-center"
        style={{ color }}
      >
        {resumeData.personalInfo.fullName}
      </h2>
      <div className="text-center">
        <div className="flex gap-2 justify-center items-center text-[#1e1e1e]">
          <span>{resumeData.personalInfo.address}</span>
          {resumeData.personalInfo.address.length > 1 &&
            resumeData.personalInfo.phone && (
              <span className="bg-black size-1.25 rounded-full"></span>
            )}
          <span>{resumeData.personalInfo.phone}</span>

          {resumeData.personalInfo.phone.length > 1 &&
            resumeData.personalInfo.email && (
              <span className="bg-black size-1.25 rounded-full"></span>
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

      <div>
        {resumeData.summary && (
          <>
            <div
              className="w-full h-px my-3"
              style={{ backgroundColor: color }}
            ></div>
            <h2
              className="text-xl uppercase font-semibold my-2"
              style={{ color }}
            >
              SUMMARY
            </h2>
            <p className="text-[#1e1e1e] text-[14.3px] my-1">
              {resumeData.summary}
            </p>
            <div
              className="w-full h-px my-3"
              style={{ backgroundColor: color }}
            ></div>
          </>
        )}
      </div>

      <div>
        {resumeData.experience.length > 0 && (
          <h2
            className="text-xl uppercase font-semibold my-2"
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
                  {exp.startDate} -
                  {exp.endDate !== "" ? exp.endDate : "Present"}
                </p>
              </div>

              <ul className="pl-8 my-2">
                {exp.points.map((desc) => {
                  return (
                    <li key={desc} className="list-disc text-[15.2px]">
                      {desc}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div>
        {resumeData.education.length > 0 && (
          <h2
            className="text-xl uppercase font-semibold my-2"
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
              <ul className="pl-8 my-2">
                {edu.points.map((desc) => {
                  return (
                    <li key={desc} className="list-disc text-[15.2px]">
                      {desc}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      {(resumeData.skills.length > 0 ||
        resumeData.certifications.length > 0 ||
        resumeData.languages.length > 0) && (
        <>
          <h2
            className="text-xl uppercase font-semibold my-2"
            style={{ color }}
          >
            additional information
          </h2>
        </>
      )}
      <ul className="list-disc">
        {resumeData.skills.length > 0 && (
          <li className="list-disc text-[14px] ml-8">
            <h4 className="font-semibold inline">Technical Skills: </h4>
            {resumeData.skills.map((skill) => skill.name).join(", ")}
          </li>
        )}
        {resumeData.languages.length > 0 && (
          <li className="list-disc text-[14px] ml-8">
            <h4 className="font-semibold inline">Languages: </h4>
            {resumeData.languages.map((lang) => lang.name).join(", ")}
          </li>
        )}
        {resumeData.certifications.length > 0 && (
          <li className="list-disc text-[14px] ml-8">
            <h4 className="font-semibold inline">Certifications: </h4>
            {resumeData.certifications.map((cert) => cert.name).join(", ")}
          </li>
        )}
      </ul>
    </div>
  );
}
