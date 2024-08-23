import { tempListId } from "../../Utils/utils";

export default PageSectionDesc;

function PageSectionDesc({ infos }) {
  const sectionInfos = infos.infos;
  console.log(sectionInfos);

  return <div>{sectionInfos[0]}</div>;
}
