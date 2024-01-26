import { toast } from "react-toastify"
import { axiosInstance } from "../request/request"



const getStudentDetails = async () => {
    try {
        const response = await axiosInstance.get('/students/')
        return response
    } catch (error) {
        throw error
    }
}

const updateStudentDetails = async (body: any) => {
    try {
        const response = await axiosInstance.put('/students/update', body)
        return response
    } catch (error) {
        throw error
    }
}

const getInstituteDetails = async () => {
    try {
        const response = await axiosInstance.get('/institutions/')
        return response
    } catch (error) {
        throw error
    }
}

const updateInstitutionDetails = async (body: any) => {
    try {
        const response = await axiosInstance.put('/institutions/update', body)
        return response
    } catch (error) {
        throw error
    }
}

const getAdminDetails = async () => {
    try {
        const response = await axiosInstance.get('/career-ambassadors/')
        return response
    } catch (error) {
        throw error
    }
}

const upateAdminDetails = async (body: any) => {
    try {
        const response = await axiosInstance.put('/career-ambassadors/update', body)
        return response
    } catch (error) {
        throw error
    }
}

export const form = { getStudentDetails, updateStudentDetails, getInstituteDetails, updateInstitutionDetails, getAdminDetails, upateAdminDetails }