import { createContext, useContext, useReducer } from "react";
import SectionModel, { TitleSectionModel } from "../Models/SectionModel";

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
        ),
      ];
    case "deleted_section":
      return canvas.filter((section) => section.id != action.sectionId);
    case "edited_section":
      return canvas.map((section) => {
        if (section.id === action.sectionId) {
          return action.newSection;
        } else {
          return section;
        }
      });

    default:
      throw Error(`Unknown action type: ${action.type}`);
  }
}

const initialCanvas = [
  new TitleSectionModel(0, "Guest", "A Student", [
    "I'm gay",
    "I am hardworking",
  ]),
  new SectionModel(
    1,
    "Education",
    "",
    ["Got bachelor's degree in computer science from my university"],
    "section",
  ),
  new SectionModel(
    2,
    "Experience",
    "",
    ["Got work on an important project once for google"],
    "section",
  ),
];
