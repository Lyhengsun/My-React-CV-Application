import { useState } from "react";
import styles from "./EditingDrawer.module.css";
import { primaryColor, secondaryColor } from "../../Theme/Colors";
import EditMenu from "../EditMenu/EditMenu";

export default EditingDrawer;

function EditingDrawer({ toggle = false, setToggle = () => {} }) {
  function handleOnToggleClick() {
    setToggle((t) => !t);
  }

  return (
    <div
      className={toggle ? styles.ActiveDrawerContainer : styles.DrawerContainer}
      style={{ backgroundColor: primaryColor }}
    >
      {toggle && <EditMenu />}
      <div
        className={styles.ToggleBtn}
        onClick={handleOnToggleClick}
        style={{ backgroundColor: secondaryColor(), borderColor: primaryColor }}
      ></div>
    </div>
  );
}
