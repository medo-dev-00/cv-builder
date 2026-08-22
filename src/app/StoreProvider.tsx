"use client";
import { useState } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../lib/store";

// Wraps the app with a client-side Redux store (Next.js App Router requires this split)
export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [store] = useState<AppStore>(makeStore);
  return <Provider store={store}>{children}</Provider>;
}
