import { useAuth } from "context/auth-context";
import "./App.css";
import { UnauthenticatedApp } from "./unauthenticated-app/index";
import { AuthenticatedApp } from "authenticated-app";

function App() {
  const { user } = useAuth();
  console.log("8", user);

  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      {/* <AuthenticatedApp />  */}
    </div>
  );
}

export default App;
