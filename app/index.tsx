import React from "react";
import configureAppStore from "@/redux";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import LeaderBoard from "./leaderBoard";

const { store, persistor } = configureAppStore();

export default function Home() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LeaderBoard />
      </PersistGate>
    </Provider>
  );
}
