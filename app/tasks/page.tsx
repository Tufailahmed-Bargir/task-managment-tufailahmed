import { getTasks } from '../actions'
import TaskCard from '@/components/task-card'
import TaskForm from '@/components/task-form'

export default async function TasksPage() {
  const tasks = await getTasks()

  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold">Task Management</h1>
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Create New Task</h2>
          <TaskForm />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Your Tasks</h2>
          {tasks.length === 0 ? (
            <p className="text-muted-foreground">No tasks yet. Create one above!</p>
          ) : (
            <div className="grid gap-4">
              {tasks.map((task) => (
                <TaskCard key={task.id} task={task}  />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

