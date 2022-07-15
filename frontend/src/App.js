import { BrowserRouter } from "react-router-dom";
import { ItemsProvider } from "./contexts/ItemsContext";
import { AlertProvider } from "./contexts/alertContext";
import { AuthProvider } from "./contexts/authContext";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <AlertProvider>
        <ItemsProvider>
          <AuthProvider>
            <div className="App">
              <Main />
            </div>
          </AuthProvider>
        </ItemsProvider>
      </AlertProvider>
    </BrowserRouter>
  );
}

export default App;
