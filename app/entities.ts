export interface Location {
    locationId: number;
    locationName: string;
    locationAddress: string;
    LocationLatLng: number[];
    manager?: any;
    region?: any;
    employees?: Employee[];
}

export interface Employee {
    employeeId: number;
    employeeName: string;
    employeeLastName: string;
    employeePhoneNumber: string;
    employeeEmail: string;
    employeePhoto: string;
    location?: Location;
    user?: any;
}