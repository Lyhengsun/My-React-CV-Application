import FontSize from "../../Theme/FontSize";
import EditableTextbox from "../EditableTextbox/EditableTextbox";
import { MyButton } from "../MyButton";

export default InfoSectionInputDesc;

function InfoSectionInputDesc({
  infos,
  handleOnDeleteDesc = () => {},
  handleOnEditInfoDesc = () => {},
  handleOnBoldInfoDesc = () => {},
  boldDescBtn = true,
  deleteDescBtn = true,
}) {
  return (
    <div style={{ marginTop: "4px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "4px",
        }}
      >
        <p style={FontSize.h2Styles}>Description</p>
        <div>
          {deleteDescBtn && (
            <MyButton onClick={handleOnDeleteDesc}>Delete Description</MyButton>
          )}
        </div>
      </div>
      <div style={FontSize.p2Styles}>
        <EditableTextbox
          infoText={infos.infos[0]}
          handleOnTextboxEdit={handleOnEditInfoDesc}
          handleOnTextboxBold={handleOnBoldInfoDesc}
          boldLetterButton={boldDescBtn}
          deleteButton={false}
        />
      </div>
    </div>
  );
}
