import { useState } from "react";
import AlertDismissable from "./components/AlertDismissable";
import Button from "./components/Button";

function AppAlertButton() {
  const [alertVisible, setAlertVisibility] = useState(false); // [variable, setter]

  return (
    <div>
      {alertVisible && (
        <AlertDismissable onClose={() => setAlertVisibility(false)}>
          Hello World
        </AlertDismissable>
      )}
      <Button
        color="secondary"
        onClick={() => {
          setAlertVisibility(true);
        }}
      >
        <i>Button</i>
      </Button>
    </div>
  );
}

export default AppAlertButton;
