import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    // Static Fonts
    "funnel-bold": require("../assets/fonts/FunnelDisplay-Bold.ttf"),
    "inter-extrabold": require("../assets/fonts/Inter_18pt-ExtraBold.ttf"),
    "montserrat-black": require("../assets/fonts/Montserrat-Black.ttf"),
    "opensans-medium": require("../assets/fonts/OpenSans_Condensed-Medium.ttf"),
    "roboto-condensed-bold": require("../assets/fonts/Roboto_Condensed-Bold.ttf"),

    // Variable Fonts
    "funnel-variable": require("../assets/fonts/FunnelDisplay-VariableFont_wght.ttf"),
    "inter-italic-variable": require("../assets/fonts/Inter-Italic-VariableFont_opsz,wght.ttf"),
    "montserrat-italic-variable": require("../assets/fonts/Montserrat-Italic-VariableFont_wght.ttf"),
    "opensans-italic-variable": require("../assets/fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf"),
    "roboto-italic-variable": require("../assets/fonts/Roboto-Italic-VariableFont_wdth,wght.ttf"),
  });

  useEffect(() => {
    if (loaded && !error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return <Stack />;
}