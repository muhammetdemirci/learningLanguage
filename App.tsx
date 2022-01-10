import { SafeAreaProvider } from "react-native-safe-area-context";
import React, { useEffect } from "react";

import useCachedResources from "./src/hooks/useCachedResources";
import Navigation from "./src/navigation";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./src/constants/config";

// redux
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./src/redux/store";

export default function App() {
  const isLoadingComplete = useCachedResources();

  useEffect(() => {
    initializeApp(firebaseConfig);
  }, []);

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
