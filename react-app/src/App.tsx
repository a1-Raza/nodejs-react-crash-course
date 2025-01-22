import { useState } from "react";
import AlertDismissable from "./components/AlertDismissable";
import Button from "./components/Button"

function App() {

  let alertButtonClicked = useState(false);

  const CreateAlert = ( showAlert: boolean ) => {
    return (
      <>
        { showAlert &&
          <AlertDismissable>
            Hello World
          </AlertDismissable>
        }
      </>
    )
  };

  return (
    <div>
      {CreateAlert(false)}
      <Button color="secondary" onClick={() => {alertButtonClicked = true}}><i>Button</i></Button>
    </div>
  );
}

export default App;
