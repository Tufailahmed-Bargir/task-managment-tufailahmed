export type TaskPriority = 'low' | 'medium' | 'high'
export type TaskStatus = 'pending' | 'in-progress' | 'completed'

export interface Task {
  id: string
  title: string
  status: TaskStatus
  priority: TaskPriority
  createdAt: Date
  updatedAt: Date
}

