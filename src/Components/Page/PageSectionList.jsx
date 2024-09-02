import FontSize from "../../Theme/FontSize";
import { tempListId } from "../../Utils/utils";

export default PageSectionList;

const componentTempListId = new tempListId();

function PageSectionList({ infos }) {
  const sectionInfos = infos.infos;
  const listId = componentTempListId.getTempListId(sectionInfos)

  return (
    <ul style={{...FontSize.p2Styles, listStyleType:"disc", marginLeft: "24px"}}>
      {sectionInfos.map((info, index) => (
        <li key={listId[index]}>{info}</li>
      ))}
    </ul>
  );
}
