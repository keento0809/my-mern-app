import { BrowserRouter } from "react-router-dom";
import { ItemsProvider } from "./contexts/ItemsContext";
import { AlertProvider } from "./contexts/alertContext";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <AlertProvider>
        <ItemsProvider>
          <div className="App">
            <Main />
          </div>
        </ItemsProvider>
      </AlertProvider>
    </BrowserRouter>
  );
}

export default App;
