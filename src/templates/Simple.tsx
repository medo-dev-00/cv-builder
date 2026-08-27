import { defaultResume } from "@/lib/defaultResume";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

const isEmpty = (value?: string) => !value?.trim();

const getTextClass = (value?: string) =>
  isEmpty(value) ? "text-gray-400/50" : "text-[#1e1e1e]";

export default function Simple() {
  const resumeData = useSelector((state: RootState) => state.resume);
  const color = resumeData.color;

  const personalInfo = resumeData.personalInfo;

  return (
    <div className="w-full p-10">
      {/* Header */}
      <h2
        className={`mb-2 text-center text-[36px] font-bold uppercase ${
          isEmpty(personalInfo.fullName) ? "text-gray-400/50" : ""
        }`}
        style={isEmpty(personalInfo.fullName) ? undefined : { color }}
      >
        {personalInfo.fullName || defaultResume.personalInfo.fullName}
      </h2>

      <div className="text-center font-medium">
        <div className="flex items-center justify-center gap-2">
          <span className={getTextClass(personalInfo.address)}>
            {personalInfo.address || defaultResume.personalInfo.address}
          </span>

          <span className="h-3 w-[0.8px] bg-gray-900" />

          <span className={getTextClass(personalInfo.phone)}>
            {personalInfo.phone || defaultResume.personalInfo.phone}
          </span>

          <span className="h-3 w-[0.8px] bg-gray-900" />

          <a
            href={
              personalInfo.email ? `mailto:${personalInfo.email}` : undefined
            }
            className={`hover:bg-amber-50 ${
              isEmpty(personalInfo.email) ? "text-gray-400/50" : ""
            }`}
          >
            {personalInfo.email || defaultResume.personalInfo.email}
          </a>
        </div>

        <a
          href={
            personalInfo.website ? `https://${personalInfo.website}` : undefined
          }
          target="_blank"
          className={`hover:bg-amber-50 ${
            isEmpty(personalInfo.website) ? "text-gray-400/50" : ""
          }`}
        >
          {personalInfo.website || defaultResume.personalInfo.website}
        </a>
      </div>

      {/* Summary */}
      <div>
        <div className="my-3 h-px w-full" style={{ backgroundColor: color }} />

        <h2 className="my-2 text-xl font-semibold uppercase" style={{ color }}>
          SUMMARY
        </h2>

        <p className={getTextClass(resumeData.summary)}>
          {resumeData.summary || defaultResume.summary}
        </p>

        <div className="my-3 h-px w-full" style={{ backgroundColor: color }} />
      </div>

      {/* Work Experience */}
      <div>
        <h2 className="my-2 text-xl font-semibold uppercase" style={{ color }}>
          WORK EXPERIENCE
        </h2>

        {resumeData.experience.length > 0 ? (
          resumeData.experience.map((exp) => (
            <div key={exp.id}>
              <div className="flex justify-between font-semibold">
                <h3>
                  {exp.jobTitle}, {exp.company}
                </h3>

                <p>
                  {exp.startDate} {exp.startDate && exp.endDate && "- "}
                  {exp.endDate || "Present"}
                </p>
              </div>

              <ul className="my-2 pl-8">
                {exp.points.map((desc, index) => (
                  <li key={index} className="list-disc text-[15.2px]">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <div className="text-gray-400/50">
            <div className="flex justify-between font-semibold">
              <h3>
                {defaultResume.experience[0].jobTitle},{" "}
                {defaultResume.experience[0].company}
              </h3>

              <p>
                {defaultResume.experience[0].startDate} -{" "}
                {defaultResume.experience[0].endDate}
              </p>
            </div>

            <ul className="my-2 pl-8">
              {defaultResume.experience[0].points.map((point) => (
                <li key={point} className="list-disc text-[15.2px]">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Education */}
      <div>
        <h2 className="my-2 text-xl font-semibold uppercase" style={{ color }}>
          EDUCATION
        </h2>

        {resumeData.education.length > 0 ? (
          resumeData.education.map((edu) => (
            <div key={edu.id}>
              <div className="flex justify-between font-semibold">
                <h3>{edu.degree}</h3>

                <p>
                  {edu.startDate} {edu.startDate && edu.endDate && "- "}
                  {edu.endDate || "Present"}
                </p>
              </div>

              <h4>{edu.institution}</h4>

              <ul className="my-2 pl-8">
                {edu.points.map((desc, index) => (
                  <li key={index} className="list-disc text-[15.2px]">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <div className="text-gray-400/50">
            <div className="flex justify-between font-semibold">
              <h3>{defaultResume.education[0].degree}</h3>

              <p>
                {defaultResume.education[0].startDate} -{" "}
                {defaultResume.education[0].endDate}
              </p>
            </div>

            <h4>{defaultResume.education[0].institution}</h4>

            <ul className="my-2 pl-8">
              {defaultResume.education[0].points.map((point) => (
                <li key={point} className="list-disc text-[15.2px]">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Additional Information */}
      <div>
        <h2 className="my-2 text-xl font-semibold uppercase" style={{ color }}>
          ADDITIONAL INFORMATION
        </h2>

        <ul className="list-disc">
          {resumeData.skills.length > 0 ? (
            <li className="ml-8 text-[14px]">
              <span className="font-semibold">Technical Skills:</span>{" "}
              {resumeData.skills.map((skill) => skill.name).join(", ")}
            </li>
          ) : (
            <li className="ml-8 text-[14px] text-gray-400/50">
              <span className="font-semibold">Technical Skills:</span>{" "}
              {defaultResume.skills.join(", ")}
            </li>
          )}

          {resumeData.moreSections.map((sec) => (
            <li className="ml-8 text-[14px]" key={sec.id}>
              <span className="font-semibold">{sec.sectionName}:</span>{" "}
              {sec.body.map((s) => s.name).join(", ")}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
