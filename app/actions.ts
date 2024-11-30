'use server'

import { revalidatePath } from 'next/cache'
import { Task, TaskPriority, TaskStatus } from '@/types/task'
import prisma from '@/lib/db'

// This is a mock database
let tasks: Task[] = []

export async function createTask(formData: FormData) {
  const title = formData.get('title') as string
  const priority = formData.get('priority') as TaskPriority
  const status = formData.get('status') as TaskStatus

  if (!title) throw new Error('Title is required')

  const newTask: Task = {
    id: Math.random().toString(36).substring(7),
    title,
    priority,
    status,
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  tasks.push(newTask)
  revalidatePath('/tasks')
  return newTask
}

export async function updateTask(taskId: string, formData: FormData) {
  const title = formData.get('title') as string
  const priority = formData.get('priority') as TaskPriority
  const status = formData.get('status') as TaskStatus

  if (!title) throw new Error('Title is required')

  const taskIndex = tasks.findIndex(task => task.id === taskId)
  if (taskIndex === -1) throw new Error('Task not found')

  tasks[taskIndex] = {
    ...tasks[taskIndex],
    title,
    priority,
    status,
    updatedAt: new Date(),
  }

  revalidatePath('/tasks')
  return tasks[taskIndex]
}

export async function deleteTask(taskId: string) {
  tasks = tasks.filter(task => task.id !== taskId)
  revalidatePath('/tasks')
}

export async function getTasks(): Promise<Task[]> {
const tasks = await prisma.task.findMany()
  return tasks
}

