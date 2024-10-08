import { createContext, useContext, useReducer } from "react";
import SectionModel, { TitleSectionModel } from "../Models/SectionModel";
import { InfoModel, infoType } from "../Models/InfoModel";
import PropTypes from "prop-types";

export default CanvasProvider;

export function useCanvas() {
  return useContext(CanvasContext);
}

export function useCanvasDispatch() {
  return useContext(CanvasDispatchContext);
}

const CanvasContext = createContext(null);
const CanvasDispatchContext = createContext(null);
const initialCanvas = {
  userImage: null,
  sections: [
    new TitleSectionModel(0, "Guest", [
      new InfoModel(["A Student"], infoType.INFO_DESCRIPTION),
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
  ],
};
let latestId = initialCanvas.sections[initialCanvas.sections.length - 1].id;

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
CanvasProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function canvasReducer(canvas, action) {
  const sections = canvas.sections;
  switch (action.type) {
    case "edited_user_image":
      return {
        userImage: action.newUserImage,
        sections: sections,
      };
    case "added_section":
      latestId += 1;
      //console.log(sections);
      return {
        userImage: canvas.userImage,
        sections: [
          ...sections,
          new SectionModel(latestId, action.sectionTitle, action.sectionInfo),
        ],
      };
    case "moved_up_section":
      const sectionIndex = sections.findIndex(
        (section) => section.id === action.sectionId,
      );
      const oldSection = sections[sectionIndex - 1];
      if (sectionIndex - 1 > 0) {
        const newSections = sections.map((section, index) => {
          if (index === sectionIndex - 1) {
            return sections[sectionIndex];
          }
          if (index === sectionIndex) {
            return oldSection;
          }
          return section;
        });
        return {
          userImage: canvas.userImage,
          sections: newSections,
        };
      }
      return {
        userImage: canvas.userImage,
        sections: sections,
      };
    case "deleted_section":
      return {
        userImage: canvas.userImage,
        sections: sections.filter((section) => section.id != action.sectionId),
      };
    case "edited_section_title":
      return {
        userImage: canvas.userImage,
        sections: sections.map((section) => {
          if (section.id === action.sectionId) {
            return new SectionModel(
              section.id,
              action.newTitle,
              section.infos,
              section.type,
            );
          }
          return section;
        }),
      };
    case "added_section_infos":
      return {
        userImage: canvas.userImage,
        sections: sections.map((section) => {
          if (section.id === action.sectionId) {
            return new SectionModel(
              section.id,
              section.title,
              [
                ...section.infos,
                action.infoType === infoType.INFO_DESCRIPTION
                  ? new InfoModel([""], infoType.INFO_DESCRIPTION)
                  : new InfoModel([], infoType.INFO_LIST),
              ],
              section.type,
            );
          }
          return section;
        }),
      };
    case "edited_section_infos":
      return {
        userImage: canvas.userImage,
        sections: sections.map((section) => {
          if (section.id === action.sectionId) {
            return new SectionModel(
              section.id,
              section.title,
              section.infos.map((info, index) => {
                if (index === action.sectionInfoIndex) {
                  return new InfoModel(
                    info.infos.map((info, index) => {
                      if (index === action.sectionInfoListIndex) {
                        return action.newSectionListInfo;
                      }
                      return info;
                    }),
                    action.infoType,
                    info.bold,
                  );
                }
                return info;
              }),
            );
          }
          return section;
        }),
      };
    case "deleted_section_infos":
      return {
        userImage: canvas.userImage,
        sections: sections.map((section) => {
          if (section.id === action.sectionId) {
            return new SectionModel(
              section.id,
              section.title,
              section.infos.filter((_, index) => index !== action.infoIndex),
              section.type,
            );
          }
          return section;
        }),
      };
    case "edited_section_infos_desc":
      return {
        userImage: canvas.userImage,
        sections: sections.map((section) => {
          if (section.id === action.sectionId) {
            return new SectionModel(
              section.id,
              section.title,
              section.infos.map((info, index) => {
                if (index === action.infoIndex) {
                  return new InfoModel(
                    action.newInfo ? [action.newInfo] : info.infos,
                    infoType.INFO_DESCRIPTION,
                    action.toggleBold ? !info.bold : info.bold,
                  );
                }
                return info;
              }),
              section.type,
            );
          }
          return section;
        }),
      };
    case "added_section_new_list_info":
      return {
        userImage: canvas.userImage,
        sections: sections.map((section) => {
          if (section.id === action.sectionId) {
            return new SectionModel(
              section.id,
              section.title,
              section.infos.map((info, index) => {
                if (index === action.infoIndex) {
                  const oldInfoModel = section.infos[index];
                  return new InfoModel(
                    [...oldInfoModel.infos, ""],
                    oldInfoModel.type,
                    oldInfoModel.bold,
                  );
                }
                return info;
              }),
              section.type,
            );
          }
          return section;
        }),
      };
    case "deleted_section_list_info":
      return {
        userImage: canvas.userImage,
        sections: sections.map((section) => {
          if (section.id === action.sectionId) {
            return new SectionModel(
              section.id,
              section.title,
              section.infos.map((info, index) => {
                if (index === action.infoIndex) {
                  return new InfoModel(
                    info.infos.filter(
                      (_, index) => index !== action.infoListIndex,
                    ),
                    info.type,
                    info.bold,
                  );
                }
                return info;
              }),
              section.type,
            );
          }
          return section;
        }),
      };
    default:
      throw Error(`Unknown action type: ${action.type}`);
  }
}
