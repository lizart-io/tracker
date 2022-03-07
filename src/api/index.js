import axios from "axios";

const getBaseUrl = () => !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'http://localhost:3001'

export const createLead = async (lead) => {
    return await axios.post(`${getBaseUrl()}/leads`, lead).then(response => response.status)
}

export const readLeads = async () => {
    return await axios.get(`${getBaseUrl()}/leads`).then((response) => response.data)
}

export const updateLead = async (_id, lead) => {
    return await axios.put(`${getBaseUrl()}/leads/${_id}`, lead).then((response) => response.status)
}

export const removeLead = async (_id) => {
    return await axios.delete(`${getBaseUrl()}/leads/${_id}`).then((response) => response.status)
}