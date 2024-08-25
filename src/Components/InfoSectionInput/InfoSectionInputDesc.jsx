import FontSize from "../../Theme/FontSize";
import EditableTextbox from "../EditableTextbox/EditableTextbox";

export default InfoSectionInputDesc;

function InfoSectionInputDesc({ infos, handleOnEditInfoDesc = () => {} }) {
  return (
    <div>
      <p style={FontSize.h2Styles}>Description</p>
      <div style={FontSize.p2Styles}>
        <EditableTextbox
          infoText={infos.infos[0]}
          handleOnTextboxEdit={handleOnEditInfoDesc}
        />
      </div>
    </div>
  );
}
