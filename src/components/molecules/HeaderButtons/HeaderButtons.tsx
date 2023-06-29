import { Select } from "native-base";
import { SetStateAction } from "react";
import { StyleSheet, View } from "react-native";

import { ButtonWithIcon } from "../../atoms";

interface IHeaderButtonsProps {
    isOpenMap: boolean;
    navigateTo: () => void;
    vehicle: string;
    setVehicle: (value: SetStateAction<string>) => void;
    toggleSwitch: () => void;
    vehicleTypesList: string[];
}

export const HeaderButtons = (props: IHeaderButtonsProps) => {
    const {
        isOpenMap,
        navigateTo,
        vehicle,
        setVehicle,
        toggleSwitch,
        vehicleTypesList,
    } = props;

    return (
        <View style={styles.headerButtons}>
            <ButtonWithIcon
                name="settings-outline"
                color="#111"
                onPress={navigateTo}
            />
            <Select
                selectedValue={vehicle}
                minWidth="150"
                height="30"
                accessibilityLabel="Choose vehicle type"
                placeholder="Choose vehicle type"
                _selectedItem={{
                    bg: "teal.600",
                }}
                mt={1}
                onValueChange={(itemValue: SetStateAction<string>) =>
                    setVehicle(itemValue)
                }>
                {vehicleTypesList.map((i, key) => (
                    <Select.Item key={key} label={i} value={i} />
                ))}
            </Select>
            <ButtonWithIcon
                name={isOpenMap ? "map" : "map-outline"}
                color="#111"
                onPress={toggleSwitch}
            />
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
        marginTop: 40,
    },
    cardContainer: {
        marginBottom: 40,
        width: 350,
    },
    map: {
        marginTop: 20,
        width: 350,
        height: 550,
        borderRadius: 10,
    },
    headerButtons: {
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    switchContainer: {
        alignItems: "center",
    },
    switchContainerText: {
        marginBottom: 10,
    },
});
