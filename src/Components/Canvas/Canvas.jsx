import { secondaryColor } from "../../Theme/Colors";
import { Page } from "../Page";
import styles from "./Canvas.module.css";

export default Canvas;

function Canvas({ toggle = false }) {
  return (
    <div
      className={toggle ? styles.ActiveCanvasContainer : styles.CanvasContainer}
      style={{ backgroundColor: secondaryColor(60) }}
    >
      <Page />
    </div>
  );
}
