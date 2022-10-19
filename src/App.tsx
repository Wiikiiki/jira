import React from "react";
import { LoginScreen } from "screens/login";
import "./App.css";
// import { ProjectListScreen } from "screens/project-list";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function App() {
  return (
    <div className="App">
      <LoginScreen />
      {/* <ProjectListScreen /> */}
    </div>
  );
}

export default App;
