import { secondaryColor } from "../../Theme/Colors";
import styles from "./Canvas.module.css";

export default Canvas;

function Canvas({ toggle = false }) {
  return (
    <div
      className={toggle ? styles.ActiveCanvasContainer : styles.CanvasContainer}
      style={{ backgroundColor: secondaryColor(60) }}
    >
      Canvas
    </div>
  );
}
