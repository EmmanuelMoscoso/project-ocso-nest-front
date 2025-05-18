export interface Location {
    locationId: number;
    locationName: string;
    locationAddress: string;
    locationLatLng: number[];
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
    user?: User;
}

export interface Manager {
    managerId: string;
    managerFullName: string;
    managerSalary: number;
    managerEmail: string;
    managerPhoneNumber: string;
    location: Location;
    user: User;
  }

  export interface Provider {
    providerId: string;
    providerName: string;
    providerEmail: string;
    providerPhoneNumber: string;
    products: Product[]
  }
  
  export interface Product {
    productId: string;
    productName: string;
    price: number;
    countSeal: number;
    provider: Provider
  }

  export interface User{
  userId: string;
  userEmail: string;
  userPassword: string;
  userRoles: string[];
  manager: Manager;
  employee: Employee;
}