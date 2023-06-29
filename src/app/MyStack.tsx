import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { useTranslation } from "react-i18next";

import { Home, SettingsPage, VehiclePage } from "../components/pages";

const Stack = createNativeStackNavigator();

const MyStack = () => {
    const { t } = useTranslation();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ title: t("home.title") }}
            />
            <Stack.Screen
                name="VehiclePage"
                component={VehiclePage}
                options={{ title: t("vehiclePage.title") }}
            />
            <Stack.Screen
                name={"Settings"}
                component={SettingsPage}
                options={{ title: t("settings.title") }}
            />
        </Stack.Navigator>
    );
};

export default MyStack;
