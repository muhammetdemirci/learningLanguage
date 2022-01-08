import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./src/hooks/useCachedResources";
import Navigation from "./src/navigation";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./src/constants/config";
import { useEffect } from "react";

export default function App() {
  const isLoadingComplete = useCachedResources();

  useEffect(() => {
    initializeApp(firebaseConfig);
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    );
  }
}
