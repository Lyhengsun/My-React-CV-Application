import { secondaryColor } from "../../Theme/Colors";
import { MyButton } from "../MyButton";
import { Page } from "../Page";
import styles from "./Canvas.module.css";

MyButton
export default Canvas;

function Canvas({ toggle = false, setToggle = () => {} }) {
  function handleOnClickPrint() {
    if (toggle) {
      setToggle(false);
      setTimeout(function () {
        window.print();
      }, 500);
    } else {
      window.print();
    }
  }

  return (
    <div
      className={toggle ? styles.ActiveCanvasContainer : styles.CanvasContainer}
      style={{ backgroundColor: secondaryColor(60) }}
    >
      <Page />
      <MyButton
        style={{ position: "absolute", top: "10px", right: "10px" }}
        onClick={handleOnClickPrint}
      >
        Print
      </MyButton>
    </div>
  );
}
