import { useState } from "react";
import { Canvas } from "../Canvas";
import { EditingDrawer } from "../EditingDrawer";
import { CanvasProvider } from "../../Contexts";

export default AppScreen;

function AppScreen() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <CanvasProvider>
        <Canvas toggle={toggle} />
        <EditingDrawer toggle={toggle} setToggle={setToggle} />
      </CanvasProvider>
    </div>
  );
}
