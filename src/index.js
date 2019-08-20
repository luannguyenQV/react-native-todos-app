import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "react-native-elements";

import { store, persistor } from "./store";
import Router from "./routers";
import { themeConfig } from "./configs/theme";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={themeConfig}>
          <Router />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
