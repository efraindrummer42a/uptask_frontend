import api from "@/lib/axios";
import { dashboardProjectSchema, Project, ProjectFormData } from "../types";
import { isAxiosError } from "axios";


export async function createProject(formData: ProjectFormData) {
    console.log('createProject....')

    try {
        const { data } = await api.post('/projects', formData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function getProjects() {
    console.log('getProjects....')

    try {
        const { data } = await api.get('/projects')
        const response = dashboardProjectSchema.safeParse(data)
        if(response.success){
            return response.data
        }
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function getProjectById(id: Project['_id']) {
    console.log('getProjetById....')

    try {
        const { data } = await api.get(`/projects/${id}`)
        console.log(data)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}