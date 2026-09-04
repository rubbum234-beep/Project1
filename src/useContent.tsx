import { createContext, useContext, type ReactNode } from "react";
import { content, type PortfolioContent } from "./content";

const ContentContext = createContext<PortfolioContent>(content);

export function ContentProvider({ children }: { children: ReactNode }) {
  return <ContentContext.Provider value={content}>{children}</ContentContext.Provider>;
}

export function useContent() {
  return useContext(ContentContext);
}
