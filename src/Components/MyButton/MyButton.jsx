import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../Theme/Colors";

export default MyButton;

function MyButton({ style = {}, onClick = () => {}, children }) {
  const Button = styled.button`
    border: 1px solid grey;
    background-color: ${secondaryColor(40)};
    color: ${primaryColor};
    border-radius: 4px;
    font-size: 12px;
    font-weight: bold;
    padding-right: 4px;
    padding-left: 4px;
    transition: all linear 150ms;

    &:hover {
      background-color: ${secondaryColor()};
    }

    &:active {
      background-color: orange;
    }
  `;

  return (
    <Button style={{ ...style }} onClick={onClick}>
      {children}
    </Button>
  );
}
