import FontSize from "../../Theme/FontSize";
import { capitalize } from "../../Utils/utils";
import styles from "./InfoSectionInput.module.css";

export default InfoSectionInput;

function InfoSectionInput({ type = "" }) {
  return (
    <div className={styles.InfoSectionInput}>
      <p style={FontSize.h1Styles}>{capitalize(type)}</p>
    </div>
  );
}
