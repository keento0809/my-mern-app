import { BrowserRouter } from "react-router-dom";
import { ItemsProvider } from "./contexts/ItemsContext";
import Main from "./pages/Main";

function App() {
  return (
    // <ItemsProvider>
    <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
    // </ItemsProvider>
  );
}

export default App;
