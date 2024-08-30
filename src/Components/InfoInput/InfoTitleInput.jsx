import { useCanvas, useCanvasDispatch, useSection } from "../../Contexts";
import InfoInput from "./InfoInput";

export default InfoTitleInput;

function InfoTitleInput() {
  const section = useSection();
  const canvas = useCanvas();
  const canvasDispatch = useCanvasDispatch();
  const id = section.id;
  //const title = section.title;
  //const infos = section.infos;
  //const type = section.type;
  //const userImg = section.useImg;

  const userImage = canvas.userImage;

  function handleOnTitleEdit(newTitle) {
    canvasDispatch({
      type: "edited_section_title",
      sectionId: id,
      newTitle: newTitle,
    });
  }

  function handleOnEditInfoDesc(infoIndex, newInfo) {
    canvasDispatch({
      type: "edited_section_infos_desc",
      sectionId: id,
      infoIndex: infoIndex,
      newInfo: newInfo,
    });
  }

  function handleOnChangeUserImage(newUserImage) {
    canvasDispatch({
      type: "edited_user_image",
      newUserImage: newUserImage,
    });
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            backgroundColor: "red",
            overflow: "hidden",
          }}
        >
          {userImage && (
            <img
              src={URL.createObjectURL(userImage)}
              alt=""
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "cover" }}
            />
          )}
        </div>
        <div
          style={{
            backgroundColor: "lightgray",
            padding: "5px",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            marginTop: "5px",
          }}
        >
          <div style={{ width: "70%", overflow: "clip" }}>
            <input
              type="file"
              onChange={(e) => handleOnChangeUserImage(e.target.files[0])}
            />
          </div>
          <button onClick={() => handleOnChangeUserImage(null)}>Remove</button>
        </div>
      </div>
      <InfoInput
        handleOnTitleEdit={handleOnTitleEdit}
        handleOnEditInfoDesc={handleOnEditInfoDesc}
        addInfoBtn={false}
        deleteTitleBtn={false}
        deleteDescBtn={false}
        deleteListBtn={false}
        style={{ borderTop: "none" }}
      />
    </div>
  );
}
