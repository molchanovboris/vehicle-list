import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";
import { Switch, Text } from "react-native-paper";

export const SettingsPage = () => {
    const { i18n } = useTranslation();
    const [isSwitchOn, setIsSwitchOn] = useState<boolean>(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    // Read language value from storage
    const getLanguage = async () => {
        try {
            const value = await AsyncStorage.getItem("currentLanguage");
            if (value !== null) {
                if (value === "en") {
                    return setIsSwitchOn(false);
                } else {
                    return setIsSwitchOn(true);
                }
            }
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        getLanguage();
    }, []);

    const languages = [
        {
            title: "English",
            type: "en",
        },
        {
            title: "Русский",
            type: "ru",
        },
    ];

    const currentLanguage = isSwitchOn ? languages[0].type : languages[1].type;

    // Change language value
    const changeLanguage = async () => {
        onToggleSwitch();
        i18n.changeLanguage(currentLanguage);
        await AsyncStorage.setItem("currentLanguage", currentLanguage);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.textHeader}>
                Change Language to{" "}
                {isSwitchOn ? languages[0].title : languages[1].title}
            </Text>
            <Switch onValueChange={changeLanguage} value={isSwitchOn} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    textHeader: {
        marginBottom: 30,
    },
});
