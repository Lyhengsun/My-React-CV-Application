import FontSize from "../../Theme/FontSize";
import EditableTextbox from "../EditableTextbox/EditableTextbox";

export default InfoSectionInputDesc;

function InfoSectionInputDesc({
  infos,
  handleOnDeleteDesc = () => {},
  handleOnEditInfoDesc = () => {},
  handleOnBoldInfoDesc = () => {},
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
            <button onClick={handleOnDeleteDesc}>Delete Description</button>
          )}
        </div>
      </div>
      <div style={FontSize.p2Styles}>
        <EditableTextbox
          infoText={infos.infos[0]}
          handleOnTextboxEdit={handleOnEditInfoDesc}
          handleOnTextboxBold={handleOnBoldInfoDesc}
          deleteButton={false}
        />
      </div>
    </div>
  );
}
