import { useLayoutEffect, useRef, useState } from "react";
import { useCanvasDispatch } from "../../Contexts/CanvasContext";
import FontSize from "../../Theme/FontSize";
import { capitalize } from "../../Utils/utils";
import styles from "./InfoSectionInput.module.css";
import SectionModel from "../../Models/SectionModel";

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
    const title = newSection.title;
    const infos = newSection.infos;
    dispatch({
      type: "edited_section",
      sectionId: id,
      newSection: new SectionModel(id, title, "", infos),
    });
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

  return (
    <div className={styles.InfoSectionInput}>
      <p style={FontSize.h1Styles}>{capitalize(type)}</p>
      <div>
        <span>Title: </span>
        <span>{title}</span>
        <button>Edit</button>
      </div>
      <p style={FontSize.h2Styles}>Info</p>
      <div>
        {infos.map((info, index) => (
          <ListInput
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

function ListInput({ infoText = "", infoIndex, handleOnInfoEdit = () => {} }) {
  const [toggleEdit, setToggleEdit] = useState(false);
  const currentInfoText = useRef(infoText);

  function handleOnEdit() {
    if (toggleEdit) {
      handleOnInfoEdit(infoIndex, currentInfoText.current);
    }
    setToggleEdit((e) => !e);
  }

  function handleOnChangeTextInput(e) {
    handleExpandTextArea(e);
    currentInfoText.current = e.target.value;
  }

  function handleExpandTextArea(e) {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight + 5}px`;
  }

  return (
    <li style={{ ...FontSize.p2Styles, display: "flex" }}>
      <div>
        <div
          style={{
            width: "5px",
            height: "5px",
            backgroundColor: "black",
            borderRadius: "50%",
            margin: "8px 5px 0px 5px",
          }}
        ></div>
      </div>
      {toggleEdit ? (
        <textarea
          name=""
          id="text-input"
          defaultValue={currentInfoText.current}
          onChange={handleOnChangeTextInput}
          onMouseDown={handleExpandTextArea}
          onFocus={(e) => (e.target.selectionStart = e.target.value.length)}
        ></textarea>
      ) : (
        currentInfoText.current
      )}{" "}
      <div>
        <button onClick={handleOnEdit}>{toggleEdit ? "Save" : "Edit"}</button>
      </div>
    </li>
  );
}
