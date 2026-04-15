import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
import { DocumentationPage } from "Pages/DocumentationPage";
import store, { persistor } from "StateManager/store";
import "Styles/common.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Theme preset={presetGpnDefault}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<DocumentationPage />} />
            </Routes>
          </BrowserRouter>
        </Theme>
      </PersistGate>
    </Provider>
  );
}

export default App;
