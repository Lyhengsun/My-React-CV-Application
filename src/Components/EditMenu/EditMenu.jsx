import { useCanvas, useCanvasDispatch } from "../../Contexts/CanvasContext";
import InfoSectionInput from "../InfoSectionInput/InfoSectionInput";
import styles from "./EditMenu.module.css";

export default EditMenu;

function EditMenu() {
  const sections = useCanvas();
  const dispatch = useCanvasDispatch();

  function handleOnAdd() {
    const newId = sections[sections.length - 1].id + 1;

    dispatch({
      type: "added_section",
      sectionId: newId,
      sectionTitle: "Title",
      sectionInfo: [],
    });
  }

  return (
    <div className={styles.EditMenuContainer}>
      {sections.map((section) => {
        return <InfoSectionInput key={section.id} section={section} />;
      })}
      <button onClick={handleOnAdd}>Add</button>
    </div>
  );
}
