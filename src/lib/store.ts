import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "./features/resumeSlice";
export const makeStore = () => {
  return configureStore({
    reducer: { resume: resumeReducer },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
