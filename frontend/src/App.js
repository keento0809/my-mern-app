import { BrowserRouter } from "react-router-dom";
import { ItemsProvider } from "./contexts/ItemsContext";
import { AlertProvider } from "./contexts/alertContext";
import { AuthProvider } from "./contexts/authContext";
import Main from "./pages/Main";
import Layout from "./Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <AlertProvider>
        <ItemsProvider>
          <AuthProvider>
            <Layout className="App">
              <Main />
            </Layout>
          </AuthProvider>
        </ItemsProvider>
      </AlertProvider>
    </BrowserRouter>
  );
}

export default App;
