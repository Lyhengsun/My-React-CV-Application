import { useState } from "react";
import { Canvas } from "../Canvas";
import { EditingDrawer } from "../EditingDrawer";

export default AppScreen;

function AppScreen() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <Canvas toggle={toggle} />
      <EditingDrawer toggle={toggle} setToggle={setToggle} />
    </div>
  );
}
