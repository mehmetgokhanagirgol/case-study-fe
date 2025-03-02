export interface Hospital {
    hospitalId: string,
    name: string,
    address: string,
    category: string
}

export interface HospitalsState {
    hospitalList: Hospital[],
}