import { Hospital } from "../Hospitals/hospitalTypes";

export interface Patient {
    patientId: string,
    name: string,
    surname: string,
    sex: string,
    age: number,
    turkishCitizenshipId: number,
    address: string,
    complaint: string,
    hospital: Hospital
}

export interface PatientsState {
    patients: Patient[]
}