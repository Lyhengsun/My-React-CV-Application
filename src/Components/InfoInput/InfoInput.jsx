import { useRef } from "react";
import { useSection } from "../../Contexts";
import { infoType } from "../../Models/InfoModel";
import styles from "../../styles/InfoInput.module.css";
import FontSize from "../../Theme/FontSize";
import { capitalize, tempListId } from "../../Utils/utils";
import EditableTextbox from "../EditableTextbox/EditableTextbox";
import InfoSectionInputDesc from "./InfoSectionInputDesc";
import InfoSectionInputList from "./InfoSectionInputList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faTrash } from "@fortawesome/free-solid-svg-icons";
import { MyButton } from "../MyButton";
export default InfoInput;

const componentTempListId = new tempListId();

function InfoInput({
  handleOnSectionMoveUp = () => {},
  handleOnDeleteSection = () => {},
  handleOnTitleEdit = () => {},
  handleOnAddInfo = () => {},
  handleOnDeleteInfo = () => {},
  handleOnBoldInfoDesc = () => {},
  handleOnEditInfoDesc = () => {},
  handleOnAddInfoList = () => {},
  handleOnEditInfoList = () => {},
  handleOnDeleteInfoList = () => {},
  addInfoBtn = true,
  moveSectionUpBtn = true,
  deleteSectionBtn = true,
  deleteTitleBtn = true,
  deleteDescBtn = true,
  deleteListBtn = true,
  infoDescBoldBtn = true,
  style = {},
}) {
  const section = useSection();
  const id = section.id;
  const type = section.type;
  const title = section.title;
  const infos = section.infos;

  const listId = componentTempListId.getTempListId(infos);

  const infoInputTypeSelect = useRef("Desc");

  return (
    <div className={styles.InfoInput} style={style}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={FontSize.h1Styles}>{capitalize(type)}</p>
        <div>
          {moveSectionUpBtn && (
            <MyButton
              style={{ padding: "0px 4px" }}
              onClick={handleOnSectionMoveUp}
            >
              <FontAwesomeIcon icon={faChevronUp} />
            </MyButton>
          )}
          {deleteSectionBtn && (
            <MyButton
              style={{ padding: "0px 4px", marginLeft: "4px" }}
              onClick={handleOnDeleteSection}
            >
              <FontAwesomeIcon icon={faTrash} />
            </MyButton>
          )}
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <span style={{ display: "inline-block", marginRight: "5px" }}>
          Title:
        </span>
        <div style={{ width: "100%" }}>
          <EditableTextbox
            infoText={title}
            handleOnTextboxEdit={handleOnTitleEdit}
            boldLetterButton={false}
            deleteButton={deleteTitleBtn}
          />
        </div>
      </div>
      {addInfoBtn && (
        <div style={{ display: "flex" }}>
          <select
            name=""
            id=""
            defaultValue={infoInputTypeSelect.current}
            onChange={(e) => {
              infoInputTypeSelect.current = e.target.value;
              //console.log(infoInputTypeSelect.current);
            }}
          >
            <option value="Desc">Description</option>
            <option value="List">Info List</option>
          </select>{" "}
          <div style={{ width: "4px" }}></div>
          <MyButton
            onClick={() => {
              handleOnAddInfo(
                infoInputTypeSelect.current === "Desc"
                  ? infoType.INFO_DESCRIPTION
                  : infoType.INFO_LIST,
              );
            }}
          >
            Add Info
          </MyButton>
        </div>
      )}
      <div>
        {infos.map((info, index) => {
          if (info.type === infoType.INFO_DESCRIPTION) {
            return (
              <InfoSectionInputDesc
                key={listId[index]}
                infos={info}
                handleOnDeleteDesc={() => handleOnDeleteInfo(index)}
                handleOnEditInfoDesc={(newInfo) =>
                  handleOnEditInfoDesc(index, newInfo)
                }
                handleOnBoldInfoDesc={() => handleOnBoldInfoDesc(index)}
                boldDescBtn={infoDescBoldBtn}
                deleteDescBtn={deleteDescBtn}
              />
            );
          } else {
            return (
              <InfoSectionInputList
                key={listId[index]}
                infos={info}
                handleOnDeleteList={() => handleOnDeleteInfo(index)}
                handleOnAddInfoList={() => handleOnAddInfoList(index)}
                handleOnEditInfoList={(listIndex, newInfo) =>
                  handleOnEditInfoList(index, listIndex, newInfo)
                }
                handleOnDeleteInfoList={(listIndex) =>
                  handleOnDeleteInfoList(index, listIndex)
                }
                deleteListBtn={deleteListBtn}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
