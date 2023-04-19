import axios from "axios";
import configURL from "../Configurations/configURL"
const {addEHRURL, fetchPatientRecordsURL} = configURL

const addRecord = async (healthRecord) => {
    let token = window.localStorage.getItem('BearerToken')
    token=token.substring(1,token.length-1);
    const response = await axios.post(addEHRURL, healthRecord, {
        headers: {
        'Authorization': `Bearer ${token}`
        }
       })
    return response.data
}

const fetchRecords = async (reqParams) => {
    let token = window.localStorage.getItem('BearerToken')
    token=token.substring(1,token.length-1);
    const response = await axios.get(`${fetchPatientRecordsURL}?consentId=${reqParams.consentId}&doctorId=${reqParams.doctorId}&hospitalId=${reqParams.hospitalId}`, {
        headers: {
        'Authorization': `Bearer ${token}`
        }
       })
    return response.data
}
const exportObject = { addRecord, fetchRecords}
export default exportObject