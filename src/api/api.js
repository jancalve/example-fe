import axios from 'axios';

const instance = axios.create({baseURL: 'http://localhost:8080'})



export function createAgreement (firstName, lastName, email, bonus, socialSecurityNumber, vehicleNumber) {
     return instance.post('/agreement', {
        'email': email,
        'bonus': bonus,
        'firstName':firstName,
        'lastName': lastName,
        'socialSecurityNumber': socialSecurityNumber,
        'vehicleRegistrationNumber': vehicleNumber // TODO -- Use same names
    })
}
