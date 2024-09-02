import FontSize from "../../Theme/FontSize";
import { tempListId } from "../../Utils/utils";
import EditableTextbox from "../EditableTextbox/EditableTextbox";
import { MyButton } from "../MyButton";

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

  function handleOnDelete(index) {
    handleOnDeleteInfoList(index);
    componentTempListId.removeId(index);
  }

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
            <MyButton onClick={handleOnAddInfoList}>Add Info to list</MyButton>{" "}
            {deleteListBtn && (
              <MyButton onClick={handleOnDeleteList}>Delete List</MyButton>
            )}
          </div>
        </div>
        {infos.infos.map((info, index) => (
          <ListItemInput
            key={listId[index]}
            infoText={info}
            handleOnInfoEdit={(newInfo) => handleOnEditInfoList(index, newInfo)}
            handleOnInfoDelete={() => handleOnDelete(index)}
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
          boldLetterButton={false}
        />
      </div>
    </li>
  );
}
