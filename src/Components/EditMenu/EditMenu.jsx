import { useCanvas } from "../../Contexts/CanvasContext";
import InfoSectionInput from "../InfoSectionInput/InfoSectionInput";
import styles from "./EditMenu.module.css";

export default EditMenu;

function EditMenu() {
  const sections = useCanvas();

  return (
    <div className={styles.EditMenuContainer}>
      {sections.map((section) => {
        return <InfoSectionInput key={section.id} section={section} />;
      })}
    </div>
  );
}
