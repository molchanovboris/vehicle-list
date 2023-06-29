import { StyleSheet, View } from "react-native";
import IconIonic from "react-native-vector-icons/Ionicons";

export interface IButtonWithIconProps {
    name: string;
    color: string;
    onPress: () => void;
}

export const ButtonWithIcon = (props: IButtonWithIconProps) => {
    const { name, color, onPress } = props;

    return (
        <View style={styles.switchContainer}>
            <IconIonic.Button
                name={name}
                color={color}
                size={30}
                backgroundColor="#fff"
                onPress={onPress}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    switchContainer: {
        alignItems: "center",
    },
});
