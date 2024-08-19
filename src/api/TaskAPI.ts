
import { isAxiosError } from 'axios';
import { Project, Task, TaskFormData } from '../types';
import api from '@/lib/axios';

type TaskAPI = {
    formData: TaskFormData,
    projectId: Project['_id'],
    taskId: Task['_id'],
}


export async function createTask({ formData, projectId} : Pick<TaskAPI, 'formData'|'projectId'>) {
    console.log('createTask...')

    try {
        const url = `/projects/${projectId}/tasks`
        const { data } = await api.post<string>(url, formData)

        console.log(data)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function getTaskById({ projectId, taskId }: Pick<TaskAPI, 'projectId'|'taskId'> ){
    console.log('getTaskById')

    try {
        const url = `/projects/${projectId}/tasks/${taskId}`
        const { data } = await api(url)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function updateTask({ projectId, taskId, formData}: Pick<TaskAPI, 'projectId'|'taskId'|'formData'>){
    console.log('updateTask')

    try {
        const url = `/projects/${projectId}/tasks/${taskId}`
        const { data } = await api.put<string>(url, formData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function deleteTask({ projectId, taskId}: Pick<TaskAPI, 'projectId'|'taskId'>){
    console.log('updateTask')

    try {
        const url = `/projects/${projectId}/tasks/${taskId}`
        const { data } = await api.delete<string>(url)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}