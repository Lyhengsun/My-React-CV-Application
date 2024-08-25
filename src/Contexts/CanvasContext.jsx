import { createContext, useContext, useReducer } from "react";
import SectionModel, { TitleSectionModel } from "../Models/SectionModel";
import { InfoModel, infoType } from "../Models/InfoModel";

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
  new TitleSectionModel(0, "Guest", [
    new InfoModel(["A Student"], infoType.INFO_DESCRIPTION),
    new InfoModel(["I'm gay", "I am hardworking"], infoType.INFO_LIST),
  ]),
  new SectionModel(1, "Education", [
    new InfoModel(["Study at Hogwarts"], infoType.INFO_DESCRIPTION),
    new InfoModel(
      [
        "Got bachelor's degree in computer science from my university",
        "Got bachelor's degree in computer science from other university",
      ],
      infoType.INFO_LIST,
    ),
  ]),
  new SectionModel(2, "Experience", [
    new InfoModel(
      ["Got work on an important project once for google"],
      infoType.INFO_LIST,
    ),
  ]),
];
