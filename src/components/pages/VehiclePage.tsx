import { useTranslation } from "react-i18next";
import { Linking, StyleSheet, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";

import AUTOPARK from "../../../autopark.json";
import { IAuto } from "../../interfaces/autopark.dto";
import { MapMarker } from "../atoms/MapMarker/MapMarker";
import { Map } from "../molecules";

type TVehicleScreen = {
    route: any;
};
export const VehiclePage = (props: TVehicleScreen) => {
    const { route } = props;
    const vehicleId = route.params.id;
    const autoParkList: IAuto[] = AUTOPARK;
    const vehicleData = autoParkList.find(item => item.id === vehicleId);

    const textMessage = `Здравствуйте ${vehicleData?.driverName}`;
    const { t } = useTranslation();

    return (
        <View style={styles.container}>
            {vehicleData ? (
                <View>
                    <Card style={styles.cardContainer}>
                        <Card.Content>
                            <Text variant="titleLarge">
                                {t("typeVehicle")}: {vehicleData.type}
                            </Text>
                            <Text variant="titleLarge">
                                {t("driverName")}: {vehicleData.driverName}
                            </Text>
                            <Text variant="bodyMedium">
                                {t("phoneNumber")}:{" "}
                                {vehicleData.telephoneNumber}
                            </Text>
                        </Card.Content>
                        <Card.Actions>
                            <Button
                                onPress={() =>
                                    Linking.openURL(
                                        `tel:${vehicleData.telephoneNumber}`,
                                    )
                                }>
                                {t("vehiclePage.callButton")}
                            </Button>
                            <Button
                                onPress={() =>
                                    Linking.openURL(
                                        `whatsapp://send?text=${textMessage}&phone=${vehicleData.telephoneNumber}`,
                                    )
                                }>
                                {t("vehiclePage.messageButton")}
                            </Button>
                        </Card.Actions>
                    </Card>
                    <Map>
                        <MapMarker vehicle={vehicleData} />
                    </Map>
                </View>
            ) : (
                <Text>Something went wrong</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    cardList: {
        marginTop: 40,
    },
    cardContainer: {
        marginBottom: 40,
        width: 350,
    },
    map: {
        width: 350,
        height: 300,
    },
});
