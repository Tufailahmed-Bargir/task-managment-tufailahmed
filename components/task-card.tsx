'use client'

import { useState } from 'react'
import { Task } from '@/types/task'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { deleteTask } from '@/app/actions'
import TaskForm from './task-form'
import prisma from '@/lib/db'

interface TaskCardProps {
  task: Task
}

export default function TaskCard({ task }: TaskCardProps) {
  const [isEditing, setIsEditing] = useState(false)

  const handleDelete = async () => {
    const deletePost = await prisma.task.delete({
      where:{
        id:task.id
      }
    })
    // await deleteTask(task.id)
  }

  const priorityColors = {
    low: 'bg-green-500',
    medium: 'bg-yellow-500',
    high: 'bg-red-500',
  }

  if (isEditing) {
    return <TaskForm task={task} onComplete={() => setIsEditing(false)} />
  }

  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">{task.title}</h3>
          <div className="flex items-center gap-2">
            <Badge variant="outline">Status: {task.status}</Badge>
            <Badge className={priorityColors[task.priority]}>
              {task.priority}
            </Badge>
          </div>
          <div className="flex justify-end gap-2 mt-2">
            <Button
              variant="destructive"
              onClick={handleDelete}
              className="w-24"
            >
              Delete
            </Button>
            <Button
              variant="secondary"
              onClick={() => setIsEditing(true)}
              className="w-24"
            >
              Edit
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

