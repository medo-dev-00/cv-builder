import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "./features/resumeSlice";

// Creates a fresh Redux store instance (used by StoreProvider on the client)
export const makeStore = () => {
  return configureStore({
    reducer: { resume: resumeReducer },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
