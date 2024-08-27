import SectionModel from "../../Models/SectionModel";
import { InfoModel, infoType } from "../../Models/InfoModel";
import InfoInput from "./InfoInput";
import { useCanvasDispatch, useSection } from "../../Contexts";

export default InfoSectionInput;

function InfoSectionInput() {
  const canvasDispatch = useCanvasDispatch();
  const section = useSection();
  const id = section.id;
  const title = section.title;
  const infos = section.infos;

  //console.log(infos);

  function handleOnEdit(newSection) {
    const id = newSection.id;
    canvasDispatch({
      type: "edited_section",
      sectionId: id,
      newSection: newSection,
    });
  }

  function handleOnTitleEdit(newTitle) {
    handleOnEdit(new SectionModel(id, newTitle, infos));
  }

  function handleOnAddInfo(infoType) {
    canvasDispatch({
      type: "added_section_infos",
      sectionId: id,
      infoType: infoType,
    });
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

  function handleOnAddInfoList(infoIndex) {
    canvasDispatch({
      type: "added_section_new_list_info",
      sectionId: id,
      infoIndex: infoIndex,
    });
  }

  function handleOnEditInfoList(infoIndex, listIndex, newInfo) {
    canvasDispatch({
      type: "edited_section_infos",
      sectionId: id,
      sectionInfoIndex: infoIndex,
      sectionInfoListIndex: listIndex,
      newSectionListInfo: newInfo,
      infoType: infoType.INFO_LIST,
    });
  }

  function handleOnDeleteInfoList(infoIndex, listIndex) {
    canvasDispatch({
      type: "deleted_section_list_info",
      sectionId: id,
      infoIndex: infoIndex,
      infoListIndex: listIndex
    })
  }

  return (
    <InfoInput
      handleOnTitleEdit={handleOnTitleEdit}
      handleOnAddInfo={handleOnAddInfo}
      handleOnEditInfoDesc={handleOnEditInfoDesc}
      handleOnAddInfoList={handleOnAddInfoList}
      handleOnEditInfoList={handleOnEditInfoList}
      handleOnDeleteInfoList={handleOnDeleteInfoList}
    />
  );
}
