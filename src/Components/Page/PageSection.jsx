import { infoType } from "../../Models/InfoModel";
import FontSize from "../../Theme/FontSize";
import { tempListId } from "../../Utils/utils";
import PageSectionDesc from "./PageSectionDesc";
import PageSectionList from "./PageSectionList";

export default PageSection;

const componentTempListId = new tempListId();

function PageSection({ sectionInfo }) {
  const id = sectionInfo.id;
  const title = sectionInfo.title;
  const infos = sectionInfo.infos;
  const listId = componentTempListId.getTempListId(infos);

  //console.log(infos);
  //console.log(listId);

  const styles = {
    margin: "10px 10px 0",
  };

  return (
    <div style={styles}>
      <p style={FontSize.h2Styles}>{title}</p>
      <ul style={FontSize.p2Styles}>
        {infos.map((info, index) => {
          switch (info.type) {
            case infoType.INFO_LIST:
              return <PageSectionList key={listId[index]} infos={info} />;
            case infoType.INFO_DESCRIPTION:
              return <PageSectionDesc key={listId[index]} infos={info} />;
            default:
              throw Error("Unknown Info Type in Page Section");
          }
        })}
      </ul>
    </div>
  );
}
