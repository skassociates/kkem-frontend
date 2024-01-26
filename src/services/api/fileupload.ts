import { axiosInstance } from "../request/request"

const upload = async (body: any) => {
    try {
        const response = await axiosInstance.post('/upload', body)
        return response
    } catch (error) {
        throw error
    }
}

export const files = { upload }