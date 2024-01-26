import { axiosInstance } from "../request/request"

const studentLogin = async (body: any) => {
    try {
        const response = await axiosInstance.post('/auth/student/login', {
            ...body,
            type: 'student'
        })
        return response
    } catch (error) {
        throw error
    }
}

const institutionLogin = async (body: any) => {
    try {
        const response = await axiosInstance.post('/auth/student/login', {
            ...body,
            type: 'institution'
        })
        return response
    } catch (error) {
        throw error
    }
}

const adminLogin = async (body: any) => {
    try {
        const response = await axiosInstance.post('/auth/student/login', {
            ...body,
            type: 'career-ambassador'
        })
        return response
    } catch (error) {
        throw error
    }
}

export const auth = { studentLogin, institutionLogin, adminLogin }