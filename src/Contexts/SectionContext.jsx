import { createContext, useContext, useReducer } from "react";

export default SectionProvider;

export function useSection() {
  return useContext(SectionContext);
}

export function useSectionDispatch() {
  return useContext(SectionDispatchContext);
}

const SectionContext = createContext(null);
const SectionDispatchContext = createContext(null);

function SectionProvider({ section, children }) {
  const [sectionValue, dispatch] = useReducer(sectionReducer, section);
  return (
    <>
      <SectionContext.Provider value={sectionValue}>
        <SectionDispatchContext.Provider value={dispatch}>
          {children}
        </SectionDispatchContext.Provider>
      </SectionContext.Provider>
    </>
  );
}

function sectionReducer(section, action) {
  switch (action.type) {
    case "added_infos":
      return section;

    default:
      throw Error("Section Reducer: Unknown action type");
  }
}
