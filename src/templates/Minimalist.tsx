import { defaultResume } from "@/lib/defaultResume";
import { RootState } from "@/lib/store";
import { Open_Sans } from "next/font/google";
import { useSelector } from "react-redux";

const isEmpty = (value?: string) => !value?.trim();

const getTextClass = (value?: string, hidePlaceholders = false) => {
  if (isEmpty(value) && !hidePlaceholders) {
    return "text-gray-400/50";
  }

  return "";
};

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});
export default function Minimalist({
  hidePlaceholders = false,
}: {
  hidePlaceholders?: boolean;
}) {
  const resumeData = useSelector((state: RootState) => state.resume);
  const color = resumeData.color;

  return (
    <div className={`w-full p-10 ${openSans.className}`}>
      <h2
        className={`text-center text-4xl font-semibold uppercase tracking-widest ${getTextClass(
          resumeData.personalInfo.fullName,
          hidePlaceholders,
        )}`}
        style={resumeData.personalInfo.fullName ? { color } : undefined}
      >
        {resumeData.personalInfo.fullName ||
          (!hidePlaceholders && defaultResume.personalInfo.fullName)}
      </h2>

      <p
        className={`mt-3 mb-2 text-center text-xl uppercase ${getTextClass(
          resumeData.personalInfo.job,
          hidePlaceholders,
        )}`}
      >
        {resumeData.personalInfo.job ||
          (!hidePlaceholders && defaultResume.personalInfo.job)}
      </p>

      <div className="flex items-center justify-center gap-2 text-center">
        <span
          className={getTextClass(
            resumeData.personalInfo.address,
            hidePlaceholders,
          )}
        >
          {resumeData.personalInfo.address ||
            (!hidePlaceholders && defaultResume.personalInfo.address)}
        </span>

        <span className="h-3 w-[0.8px] bg-gray-900" />

        <span
          className={getTextClass(
            resumeData.personalInfo.email,
            hidePlaceholders,
          )}
        >
          {resumeData.personalInfo.email ||
            (!hidePlaceholders && defaultResume.personalInfo.email)}
        </span>

        <span className="h-3 w-[0.8px] bg-gray-900" />

        {(resumeData.personalInfo.website ||
          (!hidePlaceholders && defaultResume.personalInfo.website)) && (
          <a
            href={
              resumeData.personalInfo.website
                ? `https://${resumeData.personalInfo.website}`
                : undefined
            }
            target="_blank"
            className={`hover:bg-amber-50 ${getTextClass(
              resumeData.personalInfo.website,
              hidePlaceholders,
            )}`}
          >
            {resumeData.personalInfo.website ||
              (!hidePlaceholders && defaultResume.personalInfo.website)}
          </a>
        )}
      </div>

      <div
        className="my-5 h-0.5 w-full rounded-sm"
        style={{ backgroundColor: color }}
      ></div>

      <div>
        <h3 className="text-[20px] font-bold uppercase" style={{ color }}>
          SUMMARY
        </h3>

        {(resumeData.summary ||
          (!hidePlaceholders && defaultResume.summary)) && (
          <p
            className={`my-3 leading-5 text-[14px] ${getTextClass(
              resumeData.summary,
              hidePlaceholders,
            )}`}
          >
            {resumeData.summary || (!hidePlaceholders && defaultResume.summary)}
          </p>
        )}
      </div>

      <div>
        <h3 className="text-[20px] font-bold uppercase" style={{ color }}>
          Professional experience
        </h3>

        <div>
          {resumeData.experience.length > 0 ? (
            resumeData.experience.map((exp) => {
              return (
                <div key={exp.id}>
                  <h4 className="mt-4 flex justify-between pr-45 text-[15px] font-semibold">
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
            })
          ) : !hidePlaceholders ? (
            <div className="text-gray-400/50">
              <h4 className="mt-4 flex justify-between pr-45 text-[15px] font-semibold">
                {defaultResume.experience[0].jobTitle}
                {defaultResume.experience[0].jobTitle &&
                  defaultResume.experience[0].company &&
                  ", "}
                {defaultResume.experience[0].company}

                <span>
                  {defaultResume.experience[0].startDate} -{" "}
                  {defaultResume.experience[0].endDate}
                </span>
              </h4>

              <ul className="my-1 pl-8">
                {defaultResume.experience[0].points.map((desc) => {
                  return (
                    <li key={desc} className="list-disc text-[15.2px]">
                      {desc}
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}
        </div>
      </div>

      <div>
        <h3 className="text-[20px] font-bold uppercase" style={{ color }}>
          education
        </h3>

        <div>
          {resumeData.education.length > 0 ? (
            resumeData.education.map((edu) => {
              return (
                <div key={edu.id}>
                  <h4 className="mt-4 flex justify-between pr-45 text-[15px] font-semibold">
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
            })
          ) : !hidePlaceholders ? (
            <div className="text-gray-400/50">
              <h4 className="mt-4 flex justify-between pr-45 text-[15px] font-semibold">
                {defaultResume.education[0].degree}

                <span>
                  {defaultResume.education[0].startDate} -{" "}
                  {defaultResume.education[0].endDate}
                </span>
              </h4>

              <p className="text-[14px]">
                {defaultResume.education[0].institution}
              </p>

              <ul className="my-1 pl-8">
                {defaultResume.education[0].points.map((desc) => {
                  return (
                    <li key={desc} className="list-disc text-[15.2px]">
                      {desc}
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}
        </div>
      </div>

      <div>
        <h3 className="text-[20px] font-bold uppercase" style={{ color }}>
          technical skills
        </h3>

        <ul className="my-1 pl-8">
          {resumeData.skills.length > 0 ? (
            resumeData.skills.map((skill) => {
              return (
                <li key={skill.id} className="list-disc">
                  {skill.name}
                </li>
              );
            })
          ) : !hidePlaceholders ? (
            <div className="text-gray-400/50">
              {defaultResume.skills.map((skill) => {
                return (
                  <li key={skill} className="list-disc">
                    {skill}
                  </li>
                );
              })}
            </div>
          ) : null}
        </ul>

        {resumeData.moreSections.map((sec) => {
          return (
            <div key={sec.id}>
              <h3 className="text-[20px] font-bold uppercase" style={{ color }}>
                {sec.sectionName}
              </h3>

              <ul className="my-1 pl-8">
                {sec.body.map((s) => {
                  return (
                    <li key={s.id} className="list-disc">
                      {s.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
