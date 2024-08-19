import { createContext, useContext, useReducer } from "react";
import SectionModel from "../Models/SectionModel";

export default CanvasProvider;

export function useCanvas() {
  return useContext(CanvasContext);
}

export function useCanvasDispatch() {
  return useContext(CanvasDispatchContext);
}

const CanvasContext = createContext(null);
const CanvasDispatchContext = createContext(null);

function CanvasProvider({ children }) {
  const [canvas, dispatch] = useReducer(canvasReducer, initialCanvas);
  return (
    <CanvasContext.Provider value={canvas}>
      <CanvasDispatchContext.Provider value={dispatch}>
        {children}
      </CanvasDispatchContext.Provider>
    </CanvasContext.Provider>
  );
}

function canvasReducer(canvas, action) {
  switch (action.type) {
    case "added_section":
      return [
        ...canvas,
        new SectionModel(
          action.sectionId,
          action.sectionTitle,
          action.sectionInfo,
          action.sectionType,
        ),
      ];

    default:
      throw Error(`Unknown action type: ${action.type}`);
  }
}

const initialCanvas = [
  new SectionModel(0, "Guest", ["A Student"], "title"),
  new SectionModel(
    1,
    "Education",
    ["Got bachelor's degree in computer science from my university"],
    "section",
  ),
  new SectionModel(
    2,
    "Experience",
    ["Got work on an important project once for google"],
    "section",
  ),
];
