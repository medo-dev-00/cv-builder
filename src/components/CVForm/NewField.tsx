import {
  NewSection,
  updateSection,
  updateSectionBody,
} from "@/lib/features/resumeSlice";
import { useState } from "react";
import { CgCheck } from "react-icons/cg";
import { FaRegTrashAlt } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { TbTrash } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
export default function NewField({ info }: { info: NewSection }) {
  const dispatch = useDispatch();

  const [showSections, setShowSection] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  // Draft inputs for tag-style skill and language fields

  const [title, setTitle] = useState<string>("");
  const [sectionName, setSectionName] = useState<string>("");
  function updateSections(type: "ADD" | "DELETE") {
    dispatch(
      updateSection({ id: info.id, sectionName, body: info.body, type }),
    );
    setIsEdit(false);
  }

  const getPlaceholder = (sectionName: string) => {
    switch (sectionName.toLowerCase()) {
      case "languages":
        return "e.g. English, Arabic, French";

      case "skills":
        return "e.g. React, Next.js, TypeScript";

      case "certifications":
        return "e.g. AWS Certified Developer";

      case "hobbies":
        return "e.g. Reading, Football, Photography";

      case "awards":
        return "e.g. Employee of the Month";

      case "interests":
        return "e.g. Technology, Design, Entrepreneurship";

      case "projects":
        return "e.g. E-commerce Website";

      case "courses":
        return "e.g. Advanced React Course";

      case "volunteering":
        return "e.g. Volunteer at Red Crescent";

      default:
        return `e.g. Enter ${sectionName.toLowerCase()}`;
    }
  };
  return (
    <div
      className={`mt-4 flex-1 basis-sm overflow-hidden border border-[#C3C6D7] rounded-md shadow-lg shadow-gray-300/45 transition-all ${showSections ? "max-h-dvh" : "max-h-11"}`}
    >
      <div className="flex justify-between items-center  border-b border-b-[#C3C6D7] bg-[#F8F9FF] px-4 py-2">
        {isEdit ? (
          <div className="flex justify-between text-lg font-semibold flex-1">
            <input
              type="text"
              id={`sectionName-${info.id}`}
              className="focus:outline-none focus:ring focus:ring-gray-400 indent-2"
              value={sectionName}
              onChange={(event) => setSectionName(event.target.value)}
            />
            <button onClick={() => updateSections("ADD")}>
              <CgCheck size={28} />
            </button>
          </div>
        ) : (
          <>
            <h2 className="flex flex-1 items-center gap-2 text-lg font-semibold">
              {info.sectionName}
              <button
                className="cursor-pointer"
                onClick={() => {
                  setSectionName(info.sectionName);
                  setIsEdit(true);
                }}
              >
                <GoPencil />
              </button>
              <button
                className="cursor-pointer"
                onClick={() => {
                  updateSections("DELETE");
                }}
              >
                <TbTrash />
              </button>
            </h2>
            <button
              className={`cursor-pointer transition-all ${!showSections && "rotate-180"}`}
              onClick={() => setShowSection(!showSections)}
            >
              <IoIosArrowDown size={25} />
            </button>
          </>
        )}
      </div>
      <div className="bg-white p-4">
        {/* Add Language */}
        <div className="flex w-full overflow-hidden rounded-lg border border-gray-300 transition-all focus-within:border-[#0D47A1] focus-within:ring-2 focus-within:ring-[#0D47A1]/10">
          <input
            type="text"
            name="languageName"
            id="languageName"
            placeholder={getPlaceholder(info.sectionName)}
            className="min-w-0 flex-1 px-3 py-2 text-sm text-gray-800 outline-none placeholder:text-gray-400"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

          <button
            type="button"
            className="cursor-pointer px-5 py-2 text-sm font-medium text-white bg-[#0D47A1] transition-colors hover:bg-[#093575]"
            onClick={() => {
              dispatch(
                updateSectionBody({
                  id: info.id,
                  body: { id: uuidv4(), name: title },
                  type: "ADD",
                }),
              );
              setTitle("");
            }}
          >
            Add
          </button>
        </div>

        {/* Languages */}
        {info.body.length > 0 ? (
          <div className="mt-4">
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
              Added Content
            </p>

            <ul className="flex flex-wrap gap-2">
              {info.body.map((name, index) => (
                <li
                  key={index}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#C7DAFA] bg-[#E8F0FE] px-3 py-1.5 text-sm font-medium text-[#173B69] transition-colors hover:bg-[#DCEAFF]"
                >
                  <span>{name.name}</span>

                  <button
                    type="button"
                    className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500"
                    onClick={() => {
                      dispatch(
                        updateSectionBody({
                          id: info.id,
                          body: { id: name.id, name: "" },
                          type: "DELETE",
                        }),
                      );
                    }}
                  >
                    <FaRegTrashAlt size={11} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="mt-4 text-center text-sm text-gray-400">Add Content</p>
        )}
      </div>
    </div>
  );
}
