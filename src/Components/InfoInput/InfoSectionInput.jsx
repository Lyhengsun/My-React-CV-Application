import SectionModel from "../../Models/SectionModel";
import { InfoModel, infoType } from "../../Models/InfoModel";
import InfoInput from "./InfoInput";
import { useCanvasDispatch, useSection } from "../../Contexts";

export default InfoSectionInput;

function InfoSectionInput() {
  const dispatch = useCanvasDispatch();
  const section = useSection();
  const id = section.id;
  const type = section.type;
  const title = section.title;
  const infos = section.infos;

  //console.log(infos);

  function handleOnEdit(newSection) {
    const id = newSection.id;
    dispatch({
      type: "edited_section",
      sectionId: id,
      newSection: newSection,
    });
  }

  function handleOnTitleEdit(newTitle) {
    handleOnEdit(new SectionModel(id, newTitle, infos));
  }

  function handleOnEditInfoDesc(infoIndex, newInfo) {
    handleOnEdit(
      new SectionModel(
        id,
        title,
        infos.map((info, index) => {
          if (index === infoIndex) {
            return new InfoModel([newInfo], infoType.INFO_DESCRIPTION);
          } else {
            return info;
          }
        }),
      ),
    );
  }

  function handleOnEditInfoList(infoIndex, listIndex, newInfo) {
    handleOnEdit(
      new SectionModel(
        id,
        title,
        infos.map((info, index) => {
          if (index === infoIndex) {
            return new InfoModel(
              info.infos.map((info, index) => {
                if (index === listIndex) {
                  return newInfo;
                }
                return info;
              }),
              infoType.INFO_LIST,
            );
          }
          return info;
        }),
      ),
    );
  }

  return (
    <InfoInput
      handleOnTitleEdit={handleOnTitleEdit}
      handleOnEditInfoDesc={handleOnEditInfoDesc}
      handleOnEditInfoList={handleOnEditInfoList}
    />
  );
}
