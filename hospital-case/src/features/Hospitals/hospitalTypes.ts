import { Patient } from "../Patients/patientTypes";

export interface Hospital {
    id: string,
    name: string,
    address: string,
    category: string,
    patientList?: Patient[]
}

export interface HospitalsState {
    hospitalList: Hospital[],
}