export interface IAuto {
  id: string;
  type: string;
  driverName: string;
  vehicleName: string;
  location: ILocation;
  telephoneNumber: string;
}

export interface ILocation {
  latitude: number;
  longitude: number;
}
