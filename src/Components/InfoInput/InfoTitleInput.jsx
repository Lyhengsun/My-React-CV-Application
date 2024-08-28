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

  return (
    <InfoInput
      handleOnTitleEdit={handleOnTitleEdit}
      addInfoBtn={false}
      deleteTitleBtn={false}
      deleteDescBtn={false}
      deleteListBtn={false}
    />
  );
}
