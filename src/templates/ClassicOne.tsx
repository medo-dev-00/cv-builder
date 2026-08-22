import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

export default function ClassicOne() {
  const resumeData = useSelector((state: RootState) => state.resume);
  return (
    <div className="w-full p-10 font-serif">
      <h2 className="capitalize">{resumeData.personalInfo.fullName}</h2>
      <div className="flex justify-center items-center gap-2 text-center">
        <a
          href={resumeData.personalInfo.email}
          target="_blank"
          className="hover:bg-amber-50"
        >
          {resumeData.personalInfo.email}
        </a>
        {resumeData.personalInfo.email.length > 1 &&
          resumeData.personalInfo.phone && (
            <a
              href={`https://${resumeData.personalInfo.website}`}
              target="_blank"
              className="hover:bg-amber-50"
            >
              {resumeData.personalInfo.website}
            </a>
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
    </div>
  );
}
