import { useCanvasDispatch, useSection } from "../../Contexts";
import InfoInput from "./InfoInput";

export default InfoTitleInput;

function InfoTitleInput() {
  const section = useSection();
  const canvasDispatch = useCanvasDispatch();
  const id = section.id;
  const title = section.title;
  const infos = section.infos;
  const type = section.type;
  const userImg = section.useImg;

  function handleOnTitleEdit(newTitle) {
    canvasDispatch({
      type: "edited_section_title",
      sectionId: id,
      newTitle: newTitle,
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

  return (
    <InfoInput
      handleOnTitleEdit={handleOnTitleEdit}
      handleOnEditInfoDesc={handleOnEditInfoDesc}
      addInfoBtn={false}
      deleteTitleBtn={false}
      deleteDescBtn={false}
      deleteListBtn={false}
    />
  );
}
