import { useRef } from "react";
import { useSection } from "../../Contexts";
import { infoType } from "../../Models/InfoModel";
import FontSize from "../../Theme/FontSize";
import { capitalize, tempListId } from "../../Utils/utils";
import EditableTextbox from "../EditableTextbox/EditableTextbox";
import styles from "./InfoSectionInput.module.css";
import InfoSectionInputDesc from "./InfoSectionInputDesc";
import InfoSectionInputList from "./InfoSectionInputList";
export default InfoInput;

const componentTempListId = new tempListId();

function InfoInput({
  handleOnTitleEdit = () => {},
  handleOnAddInfo = () => {},
  handleOnEditInfoDesc = () => {},
  handleOnEditInfoList = () => {},
}) {
  const section = useSection();
  const id = section.id;
  const type = section.type;
  const title = section.title;
  const infos = section.infos;

  const listId = componentTempListId.getTempListId(infos);

  const infoInputTypeSelect = useRef("Desc");

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
      <div style={{ display: "flex" }}>
        <select
          name=""
          id=""
          defaultValue={infoInputTypeSelect.current}
          onChange={(e) => {
            infoInputTypeSelect.current = e.target.value;
            console.log(infoInputTypeSelect.current);
          }}
        >
          <option value="Desc">Description</option>
          <option value="List">Info List</option>
        </select>{" "}
        <div style={{ width: "4px" }}></div>
        <button
          onClick={() => {
            handleOnAddInfo(
              infoInputTypeSelect.current === "Desc"
                ? infoType.INFO_DESCRIPTION
                : infoType.INFO_LIST,
            );
          }}
        >
          Add Info
        </button>
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
}
