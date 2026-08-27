import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

export default function ClassicOne() {
  const resumeData = useSelector((state: RootState) => state.resume);
  const color = useSelector((state: RootState) => state.resume.color);
  return (
    <div className="w-full p-10 classic">
      {/* Personal Info */}
      <h2
        className={`mb-2 text-center text-3xl font-medium capitalize ${
          resumeData.personalInfo.fullName ? "" : "text-gray-400/50"
        }`}
        style={resumeData.personalInfo.fullName ? { color } : undefined}
      >
        {resumeData.personalInfo.fullName || "John Doe"}
      </h2>

      <div className="flex items-center justify-center gap-2 text-center">
        {/* Email */}
        <a
          href={
            resumeData.personalInfo.email
              ? `mailto:${resumeData.personalInfo.email}`
              : undefined
          }
          target="_blank"
          className={`hover:bg-amber-50 ${
            resumeData.personalInfo.email ? "" : "text-gray-400/50"
          }`}
        >
          {resumeData.personalInfo.email || "john.doe@email.com"}
        </a>

        {/* Separator */}
        {(resumeData.personalInfo.email || !resumeData.personalInfo.email) &&
          (resumeData.personalInfo.phone || !resumeData.personalInfo.phone) && (
            <span className="h-3 w-px bg-gray-300" />
          )}

        {/* Phone */}
        <span
          className={resumeData.personalInfo.phone ? "" : "text-gray-400/50"}
        >
          {resumeData.personalInfo.phone || "+20 100 000 0000"}
        </span>

        {/* Separator */}
        <span className="h-3 w-px bg-gray-300" />

        {/* Website */}
        <a
          href={
            resumeData.personalInfo.website
              ? `https://${resumeData.personalInfo.website}`
              : undefined
          }
          target="_blank"
          className={`hover:bg-amber-50 ${
            resumeData.personalInfo.website ? "" : "text-gray-400/50"
          }`}
        >
          {resumeData.personalInfo.website || "www.johndoe.com"}
        </a>
      </div>

      {/* Profile */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold uppercase" style={{ color }}>
          Profile
        </h2>

        <div
          className="mb-6 mt-2 h-[1.3px] w-full rounded-sm"
          style={{ backgroundColor: color }}
        />

        <p
          className={`text-[16px] ${
            resumeData.summary ? "text-gray-900" : "text-gray-400/50"
          }`}
        >
          {resumeData.summary ||
            "Results-oriented professional with strong communication, problem-solving, and project management skills. Passionate about delivering high-quality results and working effectively with cross-functional teams."}
        </p>
      </div>

      {/* Education */}
      <div>
        <h2 className="mt-6 text-xl font-semibold uppercase" style={{ color }}>
          Education
        </h2>

        <div
          className="mb-6 mt-2 h-[1.3px] w-full rounded-sm"
          style={{ backgroundColor: color }}
        />

        {resumeData.education.length > 0 ? (
          resumeData.education.map((edu) => (
            <div key={edu.id}>
              <h3 className="flex justify-between text-[16px] font-semibold">
                <span>{edu.institution}</span>

                <span className="font-medium">
                  {edu.startDate} {edu.startDate && edu.endDate && " - "}
                  {edu.endDate || "Present"}
                </span>
              </h3>

              <h4 className="my-0.5 text-[14px]">{edu.degree}</h4>

              <h4 className="text-[14px]">Cumulative GPA: {edu.gpa}</h4>
            </div>
          ))
        ) : (
          <div className="text-gray-400/50">
            <h3 className="flex justify-between text-[16px] font-semibold">
              <span>University of Engineering</span>
              <span className="font-medium">2020 - 2024</span>
            </h3>

            <h4 className="my-0.5 text-[14px]">Bachelor of Computer Science</h4>

            <h4 className="text-[14px]">Cumulative GPA: 3.8 / 4.0</h4>
          </div>
        )}
      </div>

      {/* Work Experience */}
      <div>
        <h2 className="mt-6 text-xl font-semibold uppercase" style={{ color }}>
          Work Experience
        </h2>

        <div
          className="mb-6 mt-2 h-[1.3px] w-full rounded-sm"
          style={{ backgroundColor: color }}
        />

        {resumeData.experience.length > 0 ? (
          resumeData.experience.map((exp) => (
            <div key={exp.id}>
              <h3 className="flex justify-between text-[16px] font-semibold">
                <span>{exp.company}</span>

                <span className="font-medium">
                  {exp.startDate} {exp.startDate && exp.endDate && " - "}
                  {exp.endDate || "Present"}
                </span>
              </h3>

              <h4 className="my-0.5 text-[14px]">{exp.jobTitle}</h4>

              <ul className="my-2 pl-8">
                {exp.points.map((desc, index) => (
                  <li key={index} className="list-disc text-[14.2px]">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <div className="text-gray-400/50">
            <h3 className="flex justify-between text-[16px] font-semibold">
              <span>Example Company</span>

              <span className="font-medium">2024 - Present</span>
            </h3>

            <h4 className="my-0.5 text-[14px]">Software Engineer</h4>

            <ul className="my-2 pl-8">
              <li className="list-disc text-[14.2px]">
                Developed and maintained modern web applications.
              </li>

              <li className="list-disc text-[14.2px]">
                Collaborated with cross-functional teams to deliver projects on
                time.
              </li>

              <li className="list-disc text-[14.2px]">
                Improved application performance and user experience.
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Additional Information */}
      <div>
        <h2 className="mt-6 text-xl font-semibold uppercase" style={{ color }}>
          Skills
        </h2>

        <div
          className="mb-6 mt-2 h-[1.3px] w-full rounded-sm"
          style={{ backgroundColor: color }}
        />

        <ul
          className={`my-2 list-disc pl-8 ${
            resumeData.skills.length === 0 &&
            resumeData.moreSections.length === 0
              ? "text-gray-400/50"
              : ""
          }`}
        >
          {resumeData.skills.length > 0 ? (
            <li>
              Technical Skills:{" "}
              {resumeData.skills.map((s) => s.name).join(", ")}
            </li>
          ) : (
            <li>Technical Skills: React, Next.js, TypeScript</li>
          )}

          {resumeData.moreSections.map((sec) => (
            <li key={sec.id}>
              {sec.sectionName}: {sec.body.map((s) => s.name).join(", ")}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
