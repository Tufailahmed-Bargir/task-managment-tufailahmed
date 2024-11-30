 
import prisma from "@/lib/db";
import { Task } from "@/components/task";
// import { CreateTask } from "@/components/CreateTask";

export default async function Page() {
  // Fetch tasks from the database
  const tasks = await prisma.task.findMany();

  return (<>
  
    {/* < CreateTask /> */}
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Task Manager</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tasks.map((item) => (
          <Task
            key={item.id}
            id={item.id}
            title={item.title}
            // description={item.description}
            status={item.status}
            priority={item.priority}
            // due_date={item.due_date}
          />
        ))}
      </div>
    </div>
    </>
  );
}

