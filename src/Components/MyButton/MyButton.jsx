import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../Theme/Colors";

export default MyButton;

function MyButton({ style = {}, onClick = () => {}, children }) {
  const btnStyle = {
    border: "1px solid grey",
    borderRadius: "8px",
    backgroundColor: secondaryColor(40),
    color: primaryColor,
    fontWeight: "bold",
    paddingRight: "5px",
    paddingLeft: "5px",
  };

  const Button = styled.div`
    &:active {
      background: orange;
    }
  `;

  return (
    <button style={{ ...style, ...btnStyle }} onClick={onClick}>
      {children}
    </button>
  );
}
