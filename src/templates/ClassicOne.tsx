import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

export default function ClassicOne() {
  const resumeData = useSelector((state: RootState) => state.resume);
  const color = useSelector((state: RootState) => state.resume.color);
  return (
    <div className="w-full p-10 font-serif ">
      <h2
        className="capitalize text-3xl text-center font-medium mb-2"
        style={{ color }}
      >
        {resumeData.personalInfo.fullName}
      </h2>
      <div className="flex justify-center items-center gap-2 text-center">
        <a
          href={resumeData.personalInfo.email}
          target="_blank"
          className="hover:bg-amber-50"
        >
          {resumeData.personalInfo.email}
        </a>
        <span className="h-3 w-px bg-black"></span>
        <span>{resumeData.personalInfo.email}</span>
        <span className="h-3 w-px bg-black"></span>
        <a
          href={`https://${resumeData.personalInfo.website}`}
          target="_blank"
          className="hover:bg-amber-50"
        >
          {resumeData.personalInfo.website}
        </a>
      </div>

      <div>
        <h2 className="uppercase font-semibold text-xl" style={{ color }}>
          Profile
        </h2>
        <div
          className="w-full h-0.5 rounded-sm mt-3 mb-6"
          style={{ backgroundColor: color }}
        ></div>
        <p className="mb-6 text-[16px]">{resumeData.summary}</p>
      </div>
      <div>
        <h2 className="uppercase font-semibold text-xl" style={{ color }}>
          EDUCATION
        </h2>
        <div
          className="w-full h-0.5 rounded-sm mt-3 mb-6"
          style={{ backgroundColor: color }}
        ></div>

        {resumeData.education.map((edu) => {
          return (
            <div key={edu.id}>
              <h3 className="flex justify-between text-[16px] font-semibold">
                <span>{edu.institution}</span>{" "}
                <span className="font-medium">
                  {edu.startDate} {edu.startDate && edu.endDate && " - "}
                  {edu.endDate !== "" ? edu.endDate : " - Present"}
                </span>
              </h3>
              <h4 className="text-[14px] my-0.5">{edu.degree}</h4>
              <h4 className="text-[14px]">Cumulative GPA: {edu.gpa}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
