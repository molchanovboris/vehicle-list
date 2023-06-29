import { ScrollView, StyleSheet } from "react-native";
import MapView from "react-native-maps";

interface IMapProps {
    children: any;
}
export const Map = (props: IMapProps) => {
    const { children } = props;
    return (
        <ScrollView>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 54.993384030225585,
                    longitude: 83.03633440235578,
                    latitudeDelta: 0.8,
                    longitudeDelta: 0.8,
                }}>
                {children}
            </MapView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    map: {
        marginTop: 30,
        width: 350,
        height: 500,
        borderRadius: 10,
    },
});
