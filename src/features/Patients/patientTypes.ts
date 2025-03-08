export interface Patient {
    id: string,
    name: string,
    surname: string,
    gender: string,
    age: number,
    turkishCitizenshipId: number,
    address: string,
    complaint: string,
    hospitalId: string
}

export interface PatientsState {
    patientList: Patient[]
}