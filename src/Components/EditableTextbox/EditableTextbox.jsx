import { useRef, useState } from "react";

export default EditableTextbox;

function EditableTextbox({ infoText = "", handleOnTextboxEdit = () => {} }) {
  const [toggleEdit, setToggleEdit] = useState(false);
  const currentInfoText = useRef(infoText);
  function handleOnEdit() {
    if (toggleEdit) {
      handleOnTextboxEdit(currentInfoText.current);
    }
    setToggleEdit((e) => !e);
  }

  function handleOnChangeTextInput(e) {
    handleExpandTextArea(e);
    currentInfoText.current = e.target.value;
  }

  function handleExpandTextArea(e) {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight + 2}px`;
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {toggleEdit ? (
          <textarea
            name=""
            id="text-input"
            defaultValue={currentInfoText.current}
            onChange={handleOnChangeTextInput}
            onMouseDown={handleExpandTextArea}
            onFocus={(e) => (e.target.selectionStart = e.target.value.length)}
            style={{ width: "80%" }}
          ></textarea>
        ) : (
          <div style={{ width: "auto" }}>{currentInfoText.current}</div>
        )}{" "}
        <div style={{ width: "70px" }}>
          <div style={{ display: "flex" }}>
            <button style={{ marginRight: "5px" }} onClick={handleOnEdit}>
              {toggleEdit ? "Save" : "Edit"}
            </button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
