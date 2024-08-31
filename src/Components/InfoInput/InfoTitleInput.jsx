import { useCanvas, useCanvasDispatch, useSection } from "../../Contexts";
import { UserProfileImage } from "../UserProfileImage";
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
        <UserProfileImage
          userImage={userImage}
          style={{ border: "1px solid black" }}
        />
        <div
          style={{
            backgroundColor: "lightgray",
            padding: "5px",
            border: "1px solid black",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            marginTop: "5px",
            marginBottom: "8px",
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
        moveSectionUpBtn={false}
        deleteSectionBtn={false}
        deleteTitleBtn={false}
        deleteDescBtn={false}
        deleteListBtn={false}
        style={{ borderTop: "none" }}
      />
    </div>
  );
}
