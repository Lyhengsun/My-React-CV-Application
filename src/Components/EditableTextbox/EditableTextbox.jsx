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
    e.target.style.height = `${e.target.scrollHeight + 5}px`;
  }

  return (
    <div style={{ display: "flex" }}>
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
    </div>
  );
}
