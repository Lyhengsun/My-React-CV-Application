import { useCanvasDispatch } from "../../Contexts/CanvasContext";
import FontSize from "../../Theme/FontSize";
import { capitalize, tempListId } from "../../Utils/utils";
import styles from "./InfoSectionInput.module.css";
import SectionModel from "../../Models/SectionModel";
import EditableTextbox from "../EditableTextbox/EditableTextbox";
import { InfoModel, infoType } from "../../Models/InfoModel";
import InfoSectionInputList from "./InfoSectionInputList";
import InfoSectionInputDesc from "./InfoSectionInputDesc";

export default InfoSectionInput;

const componentTempListId = new tempListId();

function InfoSectionInput({ section }) {
  const dispatch = useCanvasDispatch();
  const id = section.id;
  const type = section.type;
  const title = section.title;
  const infos = section.infos;

  //console.log(infos);

  const listId = componentTempListId.getTempListId(infos);

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

  function handleOnInfoAdd(newInfo) {
    handleOnEdit(new SectionModel(id, title, "", [...infos, newInfo]));
  }

  return (
    <div className={styles.InfoSectionInput}>
      <p style={FontSize.h1Styles}>{capitalize(type)}</p>
      <div style={{ display: "flex" }}>
        <span style={{ display: "inline-block", marginRight: "5px" }}>
          Title:
        </span>
        <div style={{ width: "100%" }}>
          <EditableTextbox
            infoText={title}
            handleOnTextboxEdit={handleOnTitleEdit}
          />
        </div>
      </div>

      <div>
        {infos.map((info, index) => {
          if (info.type === infoType.INFO_DESCRIPTION) {
            return (
              <InfoSectionInputDesc
                key={listId[index]}
                infos={info}
                handleOnEditInfoDesc={(newInfo) =>
                  handleOnEditInfoDesc(
                    componentTempListId.getIndexOfId(listId[index]),
                    newInfo,
                  )
                }
              />
            );
          } else {
            return (
              <InfoSectionInputList
                key={listId[index]}
                infos={info}
                handleOnEditInfoList={(listIndex, newInfo) =>
                  handleOnEditInfoList(index, listIndex, newInfo)
                }
              />
            );
          }
        })}
      </div>
    </div>
  );
  //return (
  //  <div className={styles.InfoSectionInput}>
  //    <p style={FontSize.h1Styles}>{capitalize(type)}</p>
  //    <div style={{ display: "flex" }}>
  //      <span style={{ marginRight: "5px" }}>Title:</span>
  //      <EditableTextbox
  //        infoText={title}
  //        handleOnTextboxEdit={handleOnTitleEdit}
  //      />
  //    </div>
  //    <p style={FontSize.h2Styles}>Info</p>
  //    <NewInfoInput handleOnInfoAdd={handleOnInfoAdd} />
  //    <div>
  //      {infos[0].map((info, index) => (
  //        <ListItemInput
  //          key={listId[index]}
  //          infoText={info}
  //          infoIndex={index}
  //          handleOnInfoEdit={handleOnInfoEdit}
  //        />
  //      ))}
  //    </div>
  //  </div>
  //);
}
