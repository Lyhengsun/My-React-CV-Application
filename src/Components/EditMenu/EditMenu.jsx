import InfoSectionInput from "../InfoSectionInput/InfoSectionInput";
import styles from "./EditMenu.module.css";

export default EditMenu;

function EditMenu() {
  return (
    <div className={styles.EditMenuContainer}>
      <InfoSectionInput />
    </div>
  );
}
