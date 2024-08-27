import FontSize from "../../Theme/FontSize";
import { tempListId } from "../../Utils/utils";
import EditableTextbox from "../EditableTextbox/EditableTextbox";

export default InfoSectionInputList;

const componentTempListId = new tempListId();

function InfoSectionInputList({
  infos,
  handleOnDeleteList = () => {},
  handleOnAddInfoList = () => {},
  handleOnEditInfoList = () => {},
  handleOnDeleteInfoList = () => {},
  deleteListBtn = true,
}) {
  //console.log(infos);

  const listId = componentTempListId.getTempListId(infos.infos);
  return (
    <div style={{ marginTop: "4px" }}>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
            marginBottom: "4px",
          }}
        >
          <p style={FontSize.h2Styles}>Info List</p>
          <div style={{ width: "4px" }}></div>
          <div>
            <button onClick={handleOnAddInfoList}>Add Info to list</button>{" "}
            {deleteListBtn && (
              <button onClick={handleOnDeleteList}>Delete List</button>
            )}
          </div>
        </div>
        {infos.infos.map((info, index) => (
          <ListItemInput
            key={listId[index]}
            infoText={info}
            handleOnInfoEdit={(newInfo) => handleOnEditInfoList(index, newInfo)}
            handleOnInfoDelete={() => handleOnDeleteInfoList(index)}
          />
        ))}
      </div>
    </div>
  );
}

function ListItemInput({
  infoText = "",
  handleOnInfoEdit = () => {},
  handleOnInfoDelete = () => {},
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
      <div style={{ width: "100%" }}>
        <EditableTextbox
          infoText={infoText}
          handleOnTextboxEdit={handleOnInfoEdit}
          handleOnTextboxDelete={handleOnInfoDelete}
        />
      </div>
    </li>
  );
}
