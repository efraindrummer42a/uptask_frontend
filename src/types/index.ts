import { z } from 'zod'

/* projects */
export const projectSchema = z.object({
    _id: z.string(),
    clientName: z.string(),
    description: z.string(),
    projectName: z.string(),
})

export type Project = z.infer<typeof projectSchema>
export type ProjectFormData = Pick<Project, 'clientName' | 'projectName' | 'description'>