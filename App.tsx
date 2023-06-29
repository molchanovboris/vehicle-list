import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import "./src/app/i18n";

import MyStack from "./src/app/MyStack";

export default function App() {
    return (
        <NavigationContainer>
            <NativeBaseProvider>
                <MyStack />
            </NativeBaseProvider>
        </NavigationContainer>
    );
}
