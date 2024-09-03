import { AppScreen } from "./Components/AppScreen";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "My React CV App";
  }, []);

  return (
    <>
      <AppScreen />
    </>
  );
}

export default App;
