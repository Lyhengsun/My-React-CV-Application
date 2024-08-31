import { useRef, useState } from "react";

export default EditableTextbox;

function EditableTextbox({
  infoText = "",
  handleOnTextboxEdit = () => {},
  handleOnTextboxBold = () => {},
  handleOnTextboxDelete = () => {},
  boldLetterButton = true,
  deleteButton = true,
}) {
  const [toggleEdit, setToggleEdit] = useState(false);
  const [bold, setBold] = useState(false);
  const currentInfoText = useRef(infoText);

  function handleOnEdit() {
    if (toggleEdit) {
      handleOnTextboxEdit(currentInfoText.current);
    }
    setToggleEdit((e) => !e);
  }

  function handleOnBold() {
    setBold((b) => !b);
    handleOnTextboxBold();
  }

  function handleOnDelete() {
    handleOnTextboxDelete();
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
        <div style={{ marginLeft: "4px" }}>
          <div style={{ display: "flex", justifyContent: "end" }}>
            {boldLetterButton && (
              <button
                style={{
                  fontWeight: "bold",
                  paddingRight: "4px",
                  paddingLeft: "4px",
                  border: "1px solid grey",
                  borderRadius: "4px",
                  backgroundColor: bold ? "grey" : "",
                }}
                onClick={handleOnBold}
              >
                B
              </button>
            )}
            <button style={{ marginLeft: "5px" }} onClick={handleOnEdit}>
              {toggleEdit ? "Save" : "Edit"}
            </button>
            {deleteButton && (
              <button style={{ marginLeft: "5px" }} onClick={handleOnDelete}>
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
