import FontSize from "../../Theme/FontSize";
import { tempListId } from "../../Utils/utils";
import EditableTextbox from "../EditableTextbox/EditableTextbox";

export default InfoSectionInputList;

const componentTempListId = new tempListId();

function InfoSectionInputList({ infos, handleOnEditInfoList = () => {} }) {
  //console.log(infos);

  const listId = componentTempListId.getTempListId(infos.infos);
  return (
    <div>
      <div>
        <p style={FontSize.h2Styles}>Info List</p>
        {infos.infos.map((info, index) => (
          <ListItemInput
            key={listId[index]}
            infoText={info}
            handleOnInfoEdit={(newInfo) => handleOnEditInfoList(index, newInfo)}
          />
        ))}
      </div>
    </div>
  );
}

function ListItemInput({ infoText = "", handleOnInfoEdit = () => {} }) {
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
      <div style={{ width: "100%" }}>
        <EditableTextbox
          infoText={infoText}
          handleOnTextboxEdit={handleOnInfoEdit}
        />
      </div>
    </li>
  );
}
