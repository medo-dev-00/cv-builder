import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// --- Types ---

export interface Education {
  id: string;
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  points: string[];
}
export interface Experience {
  id: string;
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  points: string[];
}
export type ResumeState = {
  color: string;

  personalInfo: {
    fullName: string;
    job?: string;
    email: string;
    phone: string;
    address: string;
    website: string;
  };

  summary: string;

  experience: Experience[];

  education: Education[];

  skills: Single[];

  languages: Single[];

  certifications: Single[];
};

export type Single = {
  id: string;
  name: string;
};

// --- Initial state ---

const initialState: ResumeState = {
  color: "#8055a2",
  personalInfo: {
    fullName: "",
    email: "",
    phone: "",
    address: "",
    website: "",
  },

  summary: "",

  experience: [],

  education: [],

  skills: [],

  languages: [],

  certifications: [],
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    // Theme
    setColor: (state, action: PayloadAction<Partial<ResumeState["color"]>>) => {
      state.color = action.payload;
    },
    // Bulk replace — used when hydrating from localStorage
    setResume: (state, action: PayloadAction<ResumeState>) => {
      return action.payload;
    },
    updatePersonalInfo: (
      state,
      action: PayloadAction<Partial<ResumeState["personalInfo"]>>,
    ) => {
      state.personalInfo = {
        ...state.personalInfo,
        ...action.payload,
      };
    },

    // Experience
    addExperience: (state, action: PayloadAction<Experience>) => {
      state.experience.push(action.payload);
    },
    addEducation: (state, action: PayloadAction<Education>) => {
      state.education.push(action.payload);
    },
    addEducationPoint: (
      state,
      action: PayloadAction<{
        id: string;
        point: string;
      }>,
    ) => {
      const education = state.education.find(
        (edu) => edu.id === action.payload.id,
      );
      if (education) {
        education.points.push(action.payload.point);
      }
    },
    updateEducationPoint: (
      state,
      action: PayloadAction<{
        id: string;
        pointIndex: number;
        value: string;
      }>,
    ) => {
      const education = state.education.find(
        (edu) => edu.id === action.payload.id,
      );

      if (education) {
        education.points[action.payload.pointIndex] = action.payload.value;
      }
    },

    removeEducationPoint: (
      state,
      action: PayloadAction<{
        id: string;
        pointIndex: number;
      }>,
    ) => {
      const education = state.education.find(
        (edu) => edu.id === action.payload.id,
      );

      if (education) {
        education.points.splice(action.payload.pointIndex, 1);
      }
    },
    addExperiencePoint: (
      state,
      action: PayloadAction<{
        id: string;
        point: string;
      }>,
    ) => {
      const experience = state.experience.find(
        (exp) => exp.id === action.payload.id,
      );
      if (experience) {
        experience.points.push(action.payload.point);
      }
    },
    updateExperiencePoint: (
      state,
      action: PayloadAction<{
        id: string;
        pointIndex: number;
        value: string;
      }>,
    ) => {
      const experience = state.experience.find(
        (exp) => exp.id === action.payload.id,
      );

      if (experience) {
        experience.points[action.payload.pointIndex] = action.payload.value;
      }
    },

    removeExperiencePoint: (
      state,
      action: PayloadAction<{
        id: string;
        pointIndex: number;
      }>,
    ) => {
      const experience = state.experience.find(
        (exp) => exp.id === action.payload.id,
      );

      if (experience) {
        experience.points.splice(action.payload.pointIndex, 1);
      }
    },
    // List items (skills, languages, certifications)
    setSkills: (state, action: PayloadAction<Single>) => {
      state.skills.push(action.payload);
    },
    setLanguages: (state, action: PayloadAction<Single>) => {
      state.languages.push(action.payload);
    },
    setCertifications: (state, action: PayloadAction<Single>) => {
      state.certifications.push(action.payload);
    },

    updateSummary: (state, action: PayloadAction<string>) => {
      state.summary = action.payload;
    },
    updateExperience: (
      state,
      action: PayloadAction<{
        id: string;
        field: keyof Omit<Experience, "id" | "points">;
        value: string;
      }>,
    ) => {
      const { id, field, value } = action.payload;

      const experience = state.experience.find((exp) => exp.id === id);

      if (experience) {
        experience[field] = value;
      }
    },
    updateEducation: (
      state,
      action: PayloadAction<{
        id: string;
        field: keyof Omit<Education, "id" | "points">;
        value: string;
      }>,
    ) => {
      const { id, field, value } = action.payload;
      const education = state.education.find((edu) => edu.id === id);
      if (education) {
        education[field] = value;
      }
    },
    removeExperience: (state, action: PayloadAction<string>) => {
      state.experience = state.experience.filter(
        (exp) => exp.id !== action.payload,
      );
    },

    removeEducation: (state, action: PayloadAction<string>) => {
      state.education = state.education.filter(
        (edu) => edu.id !== action.payload,
      );
    },
    removeSkill: (state, action: PayloadAction<string>) => {
      state.skills = state.skills.filter(
        (skill) => skill.id !== action.payload,
      );
    },
    removeLanguage: (state, action: PayloadAction<string>) => {
      state.languages = state.languages.filter(
        (lang) => lang.id !== action.payload,
      );
    },
    removeCertificate: (state, action: PayloadAction<string>) => {
      state.certifications = state.certifications.filter(
        (cert) => cert.id !== action.payload,
      );
    },
  },
});

export const {
  updatePersonalInfo,
  updateSummary,
  addExperience,
  removeExperience,
  addEducation,
  removeEducation,
  setSkills,
  setLanguages,
  setCertifications,
  updateExperience,
  removeSkill,
  removeLanguage,
  setResume,
  setColor,
  updateEducation,
  addEducationPoint,
  removeCertificate,
  removeEducationPoint,
  updateEducationPoint,
  addExperiencePoint,
  removeExperiencePoint,
  updateExperiencePoint,
} = resumeSlice.actions;

export default resumeSlice.reducer;
