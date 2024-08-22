import FontSize from "../../Theme/FontSize";
import EditableTextbox from "../EditableTextbox/EditableTextbox";

export default ListItemInput;

function ListItemInput({
  infoText = "",
  infoIndex,
  handleOnInfoEdit = () => {},
}) {

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
      <EditableTextbox
        infoText={infoText}
        handleOnTextboxEdit={(currentInfoText) =>
          handleOnInfoEdit(infoIndex, currentInfoText)
        }
      />
    </li>
  );
}
