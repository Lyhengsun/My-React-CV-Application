import { useLayoutEffect, useRef, useState } from "react";
import { useCanvasDispatch } from "../../Contexts/CanvasContext";
import FontSize from "../../Theme/FontSize";
import { capitalize } from "../../Utils/utils";
import styles from "./InfoSectionInput.module.css";

export default InfoSectionInput;

const listId = [];

function InfoSectionInput({ section }) {
  const dispatch = useCanvasDispatch();
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
          <ListInput key={listId[index]} infoText={info} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
}

function ListInput({ infoText = "", dispatch = () => {} }) {
  const [toggleEdit, setToggleEdit] = useState(false);
  const currentInfoText = useRef(infoText);

  function handleOnEdit() {
    if (toggleEdit) {
    }
    setToggleEdit((e) => !e);
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
          id=""
          defaultValue={currentInfoText.current}
        ></textarea>
      ) : (
        currentInfoText.current
      )}{" "}
      <button onClick={handleOnEdit}>{toggleEdit ? "Save" : "Edit"}</button>
    </li>
  );
}
