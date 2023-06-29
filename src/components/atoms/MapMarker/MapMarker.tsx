import { Marker } from "react-native-maps";

import { IAuto } from "../../../interfaces/autopark.dto";

interface IMapMarkerProps {
    vehicle: IAuto;
    navigateToVehicle?: (id: string) => void;
}

export const MapMarker = (props: IMapMarkerProps) => {
    const { vehicle, navigateToVehicle } = props;

    const colorMarker = () => {
        if (!vehicle.type) {
            return "#aaa";
        }

        if (vehicle.type === "special") {
            return "#02904c";
        } else if (vehicle.type === "passenger") {
            return "#d6cc08";
        } else if (vehicle.type === "truck") {
            return "#d60808";
        } else {
            return "#fff";
        }
    };

    return (
        <Marker
            onPress={() => {
                navigateToVehicle && navigateToVehicle(vehicle.id);
            }}
            pinColor={colorMarker()}
            key={vehicle.id}
            draggable
            coordinate={{
                latitude: vehicle.location.latitude,
                longitude: vehicle.location.longitude,
            }}
        />
    );
};
