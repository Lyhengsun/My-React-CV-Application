import { SectionProvider, useCanvas, useCanvasDispatch } from "../../Contexts";
import InfoSectionInput from "../InfoInput/InfoSectionInput";
import InfoTitleInput from "../InfoInput/InfoTitleInput";
import styles from "./EditMenu.module.css";

export default EditMenu;

function EditMenu() {
  const canvas = useCanvas();
  const sections = canvas.sections;
  const dispatch = useCanvasDispatch();

  function handleOnAdd() {
    dispatch({
      type: "added_section",
      sectionTitle: "Title",
      sectionInfo: [],
    });
  }

  //console.log(sections);

  return (
    <div className={styles.EditMenuContainer}>
      {sections.map((section) => {
        if (section.type === "title") {
          return (
            <SectionProvider key={section.id} section={section}>
              <InfoTitleInput />
            </SectionProvider>
          );
        }
        return (
          <SectionProvider key={section.id} section={section}>
            <InfoSectionInput />
          </SectionProvider>
        );
      })}
      <button onClick={handleOnAdd}>Add</button>
    </div>
  );
}
