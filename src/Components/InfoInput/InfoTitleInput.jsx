import { useSection } from "../../Contexts";
import InfoInput from "./InfoInput";

export default InfoTitleInput;

function InfoTitleInput() {
  const section = useSection();
  const id = section.id;
  const title = section.title;
  const infos = section.infos;
  const type = section.type;
  const userImg = section.useImg;

  hand

  return (
    <InfoInput
      deleteTitleBtn={false}
      deleteDescBtn={false}
      deleteListBtn={false}
    />
  );
}
