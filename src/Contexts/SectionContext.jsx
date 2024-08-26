import { createContext, useContext } from "react";

export default SectionProvider;

export function useSection() {
  return useContext(SectionContext);
}

const SectionContext = createContext(null);

function SectionProvider({ section, children }) {
  return (
    <>
      <SectionContext.Provider value={section}>
        {children}
      </SectionContext.Provider>
    </>
  );
}
