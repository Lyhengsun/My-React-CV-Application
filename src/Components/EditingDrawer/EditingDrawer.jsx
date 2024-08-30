import { useState } from "react";
import styles from "./EditingDrawer.module.css";
import { primaryColor, secondaryColor } from "../../Theme/Colors";
import EditMenu from "../EditMenu/EditMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

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
      <div className={styles.ToggleBtnContainer}>
        <div className={styles.ToggleBtnBorder}>
          <div className={styles.ToggleBtnBorderLeft}></div>
          <div className={styles.ToggleBtnBorderRight}></div>
        </div>
        <div
          className={styles.ToggleBtn}
          onClick={handleOnToggleClick}
          style={{
            backgroundColor: secondaryColor(),
            borderColor: primaryColor,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {toggle ? (
            <FontAwesomeIcon icon={faChevronLeft} />
          ) : (
            <FontAwesomeIcon icon={faChevronRight} />
          )}
        </div>
      </div>
      {toggle && <EditMenu />}
    </div>
  );
}
