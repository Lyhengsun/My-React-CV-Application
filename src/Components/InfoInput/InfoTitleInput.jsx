import { useCanvasDispatch, useSection } from "../../Contexts";
import InfoInput from "./InfoInput";

export default InfoTitleInput;

function InfoTitleInput() {
  const section = useSection();
  const dispatch = useCanvasDispatch();
  const id = section.id;
  const title = section.title;
  const infos = section.infos;
  const type = section.type;
  const userImg = section.useImg;

  function handleOnTitleEdit() {}

  return (
    <InfoInput
      deleteTitleBtn={false}
      deleteDescBtn={false}
      deleteListBtn={false}
    />
  );
}
