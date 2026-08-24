import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

export default function Minimalist() {
  const resumeData = useSelector((state: RootState) => state.resume);
  const color = useSelector((state: RootState) => state.resume.color);
  return (
    <div className="w-full p-10">
      <h2
        className="text-4xl uppercase tracking-widest text-center font-semibold"
        style={{ color }}
      >
        {resumeData.personalInfo.fullName}
      </h2>
      <p className="text-xl uppercase text-center mt-3 mb-2">
        {resumeData.personalInfo.job}
      </p>
      <div className="flex justify-center items-center gap-2 text-center">
        <span>{resumeData.personalInfo.address}</span>
        {resumeData.personalInfo.address.length > 1 &&
          resumeData.personalInfo.email && (
            <span className="h-3 w-px bg-black"></span>
          )}
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
      <div
        className="w-full h-0.5 rounded-sm my-5"
        style={{ backgroundColor: color }}
      ></div>
      <div>
        <h3 className="font-bold uppercase text-[20px]" style={{ color }}>
          SUMMARY
        </h3>
        <p className="my-3 leading-5 text-[14px]">{resumeData.summary}</p>
      </div>
      <div>
        <h3 className="uppercase font-bold text-[20px]" style={{ color }}>
          Professional experience
        </h3>
        <div>
          {resumeData.experience.map((exp) => {
            return (
              <div key={exp.id}>
                <h4 className="flex justify-between font-semibold pr-45 mt-4 text-[15px]">
                  {exp.jobTitle}
                  {exp.jobTitle && exp.company && ", "}
                  {exp.company}
                  <span>
                    {exp.startDate} {exp.startDate && exp.endDate && " - "}
                    {exp.endDate !== "" ? exp.endDate : " - Present"}
                  </span>
                </h4>
                <ul className="my-1 pl-8">
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
      </div>
      <div>
        <h3 className="uppercase font-bold text-[20px]" style={{ color }}>
          education
        </h3>
        <div>
          {resumeData.education.map((edu) => {
            return (
              <div key={edu.id}>
                <h4 className="flex justify-between font-semibold pr-45 mt-4 text-[15px]">
                  {edu.degree}

                  <span>
                    {edu.startDate} {edu.startDate && edu.endDate && " - "}
                    {edu.endDate !== "" ? edu.endDate : " - Present"}
                  </span>
                </h4>

                <p className="text-[14px]">{edu.institution}</p>
                <ul className="my-1 pl-8">
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
      </div>
      <div>
        <h3 className="uppercase font-bold text-[20px]" style={{ color }}>
          {" "}
          technical skills
        </h3>
        <ul className="my-1 pl-8">
          {resumeData.skills.map((skill) => {
            return (
              <li key={skill.id} className="list-disc">
                {skill.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
