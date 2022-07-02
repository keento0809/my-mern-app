import { BrowserRouter } from "react-router-dom";
import { ItemsProvider } from "./contexts/ItemsContext";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <ItemsProvider>
        <div className="App">
          <Main />
        </div>
      </ItemsProvider>
    </BrowserRouter>
  );
}

export default App;
