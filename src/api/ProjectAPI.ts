import api from "@/lib/axios";
import { ProjectFormData } from "../types";


export async function createProject(formData: ProjectFormData) {
    try {
        const { data } = await api.post('/projects', formData)
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function readProject() {
    try {
        const { data } = await api.get('/projects')
        console.log(data)
        
    } catch (error) {
        console.log(error)
    }
}

export async function updateProject(project: ProjectFormData, _id: string) {
    try {
        const { data } = await api.put(`/projects/:${_id}`, project)
        console.log(data)
        
    } catch (error) {
        console.log(error)
    }
}