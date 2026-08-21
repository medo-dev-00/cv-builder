"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setResume } from "@/lib/features/resumeSlice";

export default function ResumeLoader() {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedResume = localStorage.getItem("resume");

    if (!savedResume) return;

    try {
      const data = JSON.parse(savedResume);

      console.log("LocalStorage:", data);

      dispatch(setResume(data));
    } catch (error) {
      console.error("Failed to load resume:", error);
    }
  }, [dispatch]);

  return null;
}
