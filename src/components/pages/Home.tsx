import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, StyleSheet, View } from "react-native";
import { Card, Text } from "react-native-paper";

import AUTOPARK from "../../../autopark.json";
import { IAuto } from "../../interfaces/autopark.dto";
import { MapMarker } from "../atoms/MapMarker/MapMarker";
import { HeaderButtons, Map } from "../molecules";

const autoParkList: IAuto[] = AUTOPARK;

export const Home = () => {
    let IVehicleType: string;
    const navigation = useNavigation();
    const [vehicle, setVehicle] = useState<typeof IVehicleType>("All");
    const [isOpenMap, setIsOpenMap] = useState(false);
    const { t } = useTranslation();

    // Unique vehicle type's list
    const vehicleTypesList = Array.from(
        new Set(autoParkList.map(item => item.type)).add("All"),
    );

    const navigateToVehicle = (id: string) => {
        return navigation.navigate("VehiclePage", { id });
    };

    // Filter autopark list
    const filterList =
        vehicle !== "All"
            ? autoParkList.filter(item => item.type === vehicle)
            : autoParkList;

    const toggleSwitch = () => setIsOpenMap(previousState => !previousState);

    return (
        <View style={styles.container}>
            <HeaderButtons
                isOpenMap={isOpenMap}
                navigateTo={() => {
                    navigation.navigate("Settings");
                }}
                vehicle={vehicle}
                setVehicle={setVehicle}
                toggleSwitch={toggleSwitch}
                vehicleTypesList={vehicleTypesList}
            />
            {isOpenMap ? (
                <Map>
                    {filterList.map(item => (
                        <View key={item.id}>
                            <MapMarker
                                vehicle={item}
                                navigateToVehicle={navigateToVehicle}
                            />
                        </View>
                    ))}
                </Map>
            ) : (
                <ScrollView style={styles.cardList}>
                    {filterList.map(item => (
                        <Card
                            style={styles.cardContainer}
                            key={item.id}
                            onPress={() => navigateToVehicle(item.id)}>
                            <Card.Content>
                                <Text variant="titleLarge">
                                    {t("nameVehicle")}: {item.vehicleName}
                                </Text>
                                <Text variant="bodyMedium">
                                    {t("driverName")}: {item.driverName}
                                </Text>
                                <Text variant="bodyMedium">
                                    {t("typeVehicle")}: {item.type}
                                </Text>
                            </Card.Content>
                        </Card>
                    ))}
                </ScrollView>
            )}
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    cardList: {
        marginTop: 30,
    },
    cardContainer: {
        marginBottom: 40,
        width: 350,
    },
});
