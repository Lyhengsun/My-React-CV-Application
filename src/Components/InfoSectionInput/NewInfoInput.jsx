import { useRef, useState } from "react";

export default NewInfoInput;

function NewInfoInput({ handleOnInfoAdd = () => {} }) {
  const [newInfo, setNewInfo] = useState("");

  function handleOnChangeTextInput(e) {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight + 5}px`;
    setNewInfo(e.target.value);
  }

  function handleOnClickAddBtn() {
    handleOnInfoAdd(newInfo);
    setNewInfo("");
  }

  return (
    <div style={{ display: "flex" }}>
      <textarea
        name=""
        id=""
        value={newInfo}
        placeholder="new info"
        onChange={handleOnChangeTextInput}
      ></textarea>
      <button onClick={handleOnClickAddBtn}>Add</button>
    </div>
  );
}
