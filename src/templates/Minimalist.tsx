import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

export default function Minimalist() {
  const resumeData = useSelector((state: RootState) => state.resume);
  const color = useSelector((state: RootState) => state.resume.color);
  return (
    <div className="w-full p-10">
      <h2 className="text-[37px] uppercase tracking-wider" style={{ color }}>
        {resumeData.personalInfo.fullName}
      </h2>
      <p> {resumeData.personalInfo.job}</p>
      <div className="text-center font-medium">
        <div className="flex items-center justify-center gap-2 text-[#1e1e1e]">
          <span>{resumeData.personalInfo.address}</span>
          {resumeData.personalInfo.address.length > 1 &&
            resumeData.personalInfo.email && (
              <span className="h-full w-px bg-black"></span>
            )}
          <span>{resumeData.personalInfo.email}</span>
        </div>
        <a
          href={`https://${resumeData.personalInfo.website}`}
          target="_blank"
          className="hover:bg-amber-50"
        >
          {resumeData.personalInfo.website}
        </a>
      </div>
      <div
        className="w-full h-1.5 rounded-sm my-4"
        style={{ backgroundColor: color }}
      ></div>
      <div>
        <h3 className="font-bold uppercase text-[15px]">SUMMARY</h3>
        <p className="my-4 leading-10 text-[12px]">{resumeData.summary}</p>
      </div>
      <div>
        <h3 className="uppercase font-bold text-[15px]">
          Professional experience
        </h3>
        <div>
          {resumeData.experience.map((exp) => {
            return (
              <div key={exp.id}>
                <h4 className="flex justify-between">
                  {exp.jobTitle}
                  <span>
                    {exp.startDate} {exp.startDate && exp.endDate && " - "}
                    {exp.endDate !== "" ? exp.endDate : "Present"}
                  </span>
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
