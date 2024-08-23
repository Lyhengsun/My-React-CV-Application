import { useLayoutEffect, useRef, useState } from "react";
import { useCanvasDispatch } from "../../Contexts/CanvasContext";
import FontSize from "../../Theme/FontSize";
import { capitalize } from "../../Utils/utils";
import styles from "./InfoSectionInput.module.css";
import SectionModel from "../../Models/SectionModel";
import ListItemInput from "./ListItemInput";
import EditableTextbox from "../EditableTextbox/EditableTextbox";
import NewInfoInput from "./NewInfoInput";

export default InfoSectionInput;

const listId = [];

function InfoSectionInput({ section }) {
  const dispatch = useCanvasDispatch();
  const id = section.id;
  const type = section.type;
  const title = section.title;
  const infos = section.infos;

  while (listId.length < infos.length) {
    if (listId.length <= 0) {
      listId.push(0);
    } else {
      listId.push(listId[listId.length - 1] + 1);
    }
  }

  function handleOnEdit(newSection) {
    const id = newSection.id;
    dispatch({
      type: "edited_section",
      sectionId: id,
      newSection: newSection,
    });
  }

  function handleOnTitleEdit(newTitle) {
    handleOnEdit(new SectionModel(id, newTitle, "", infos));
  }

  function handleOnInfoEdit(infoIndex, newInfo) {
    handleOnEdit(
      new SectionModel(
        id,
        title,
        "",
        infos.map((info, index) => {
          if (index === infoIndex) {
            return newInfo;
          } else {
            return info;
          }
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
        <span style={{ marginRight: "5px" }}>Title:</span>
        <EditableTextbox
          infoText={title}
          handleOnTextboxEdit={handleOnTitleEdit}
        />
      </div>
      <p style={FontSize.h2Styles}>Info</p>
      <NewInfoInput handleOnInfoAdd={handleOnInfoAdd} />
      <div>
        {infos.map((info, index) => (
          <ListItemInput
            key={listId[index]}
            infoText={info}
            infoIndex={index}
            handleOnInfoEdit={handleOnInfoEdit}
          />
        ))}
      </div>
    </div>
  );
}
