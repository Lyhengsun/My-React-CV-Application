import { infoType } from "../../Models/InfoModel";
import InfoInput from "./InfoInput";
import { useCanvasDispatch, useSection } from "../../Contexts";

export default InfoSectionInput;

function InfoSectionInput() {
  const canvasDispatch = useCanvasDispatch();
  const section = useSection();
  const id = section.id;

  function handleOnSectionMoveUp() {
    canvasDispatch({
      type: "moved_up_section",
      sectionId: id,
    });
  }

  function handleOnDeleteSection() {
    canvasDispatch({
      type: "deleted_section",
      sectionId: id,
    });
  }

  function handleOnTitleEdit(newTitle) {
    canvasDispatch({
      type: "edited_section_title",
      sectionId: id,
      newTitle: newTitle,
    });
  }

  function handleOnAddInfo(infoType) {
    canvasDispatch({
      type: "added_section_infos",
      sectionId: id,
      infoType: infoType,
    });
  }

  function handleOnDeleteInfo(infoIndex) {
    canvasDispatch({
      type: "deleted_section_infos",
      sectionId: id,
      infoIndex: infoIndex,
    });
  }

  function handleOnEditInfoDesc(infoIndex, newInfo) {
    canvasDispatch({
      type: "edited_section_infos_desc",
      sectionId: id,
      infoIndex: infoIndex,
      newInfo: newInfo,
    });
  }

  function handleOnBoldInfoDesc(infoIndex) {
    canvasDispatch({
      type: "edited_section_infos_desc",
      sectionId: id,
      infoIndex: infoIndex,
      toggleBold: true,
    });
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
      infoListIndex: listIndex,
    });
  }

  return (
    <InfoInput
      handleOnSectionMoveUp={handleOnSectionMoveUp}
      handleOnDeleteSection={handleOnDeleteSection}
      handleOnTitleEdit={handleOnTitleEdit}
      handleOnAddInfo={handleOnAddInfo}
      handleOnDeleteInfo={handleOnDeleteInfo}
      handleOnEditInfoDesc={handleOnEditInfoDesc}
      handleOnBoldInfoDesc={handleOnBoldInfoDesc}
      handleOnAddInfoList={handleOnAddInfoList}
      handleOnEditInfoList={handleOnEditInfoList}
      handleOnDeleteInfoList={handleOnDeleteInfoList}
    />
  );
}
