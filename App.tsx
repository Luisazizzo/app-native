import * as React from "react";
import RouterProvider from "./screens/routing/RouterProvider";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { registerRootComponent } from "expo";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <RouterProvider />
      </PersistGate>
    </Provider>
  );
}
registerRootComponent(App);
