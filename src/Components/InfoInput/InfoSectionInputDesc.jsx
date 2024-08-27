import FontSize from "../../Theme/FontSize";
import EditableTextbox from "../EditableTextbox/EditableTextbox";

export default InfoSectionInputDesc;

function InfoSectionInputDesc({
  infos,
  handleOnDeleteDesc = () => {},
  handleOnEditInfoDesc = () => {},
}) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "4px",
        }}
      >
        <p style={FontSize.h2Styles}>Description</p>
        <div>
          <button onClick={handleOnDeleteDesc}>Delete Description</button>
        </div>
      </div>
      <div style={FontSize.p2Styles}>
        <EditableTextbox
          infoText={infos.infos[0]}
          handleOnTextboxEdit={handleOnEditInfoDesc}
          deleteButton={false}
        />
      </div>
    </div>
  );
}
