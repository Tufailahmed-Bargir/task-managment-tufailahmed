"use client"

import prisma from "@/lib/db";
import { useState } from "react";
// import { format } from "date-fns";

type TaskProps = {
  id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  due_date: Date;
};

export function Task({ id, title, description, status, priority, due_date }: TaskProps) {
  const [isEditing, setIsEditing] = useState(false);

  const priorityColors = {
    low: "bg-green-100 text-green-800",
    medium: "bg-yellow-100 text-yellow-800",
    high: "bg-red-100 text-red-800",
  };

  const handleDelete = async() => {
    const deleteTask = await prisma.task.delete({
        where:{
            id
        }
    })
    console.log("Delete task:", id);
  };

  const handleUpdate = async() => {
    // Implement update functionality
    console.log("Update task:", id);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
      {isEditing ? (
        <div className="space-y-4">
          <input
            type="text"
            defaultValue={title}
            className="w-full p-2 border rounded"
          />
          <textarea
            defaultValue={description}
            className="w-full p-2 border rounded"
            rows={3}
          />
          <div className="flex justify-end space-x-2">
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={handleUpdate}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        <>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500">Status: {status}</span>
            <span
              className={`text-sm font-medium px-2 py-1 rounded-full ${
                priorityColors[priority.toLowerCase() as keyof typeof priorityColors]
              }`}
            >
              {priority}
            </span>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            {/* Due: {format(new Date(due_date), "MMM d, yyyy")} */}
          </p>
          <div className="flex justify-end space-x-2">
            <button
              onClick={handleDelete}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
            <button
              onClick={handleEdit}
              className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
            >
              Edit
            </button>
          </div>
        </>
      )}
    </div>
  );
}

