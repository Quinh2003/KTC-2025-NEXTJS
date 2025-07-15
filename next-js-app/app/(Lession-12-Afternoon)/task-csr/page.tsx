"use client";

import { useEffect, useState } from "react";
import { Monitor } from "lucide-react";
import { getTasks } from "../types/api";
import { Task } from "../types/task";

export default function TaskTablePage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (error) {
        console.error("Lỗi khi tải tasks:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const statusColor = (status: string) => {
    switch (status) {
      case "done":
        return "bg-green-100 text-green-700";
      case "in_progress":
        return "bg-blue-100 text-blue-700";
      case "to_do":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const priorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-700";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl">
          <Monitor className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-orange-600">
          Client-Side Rendering Task
        </h1>
      </div>

      {loading ? (
        <p>Đang tải dữ liệu...</p>
      ) : (
        <div className="overflow-auto rounded-xl shadow border">
          <table className="w-full text-sm text-left">
            <thead className="bg-orange-300 text-orange-900 uppercase text-xs">
              <tr>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Priority</th>
                <th className="px-4 py-3">Due Date</th>
                <th className="px-4 py-3">Assignee</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr
                  key={task.id}
                  className="bg-white border-b hover:bg-gray-50"
                >
                  <td className="px-4 py-3 font-semibold">{task.id}</td>
                  <td className="px-4 py-3">{task.title}</td>
                  <td className="px-4 py-3">{task.description}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor(
                        task.status.toLowerCase()
                      )}`}
                    >
                      {task.status
                        .replace("_", " ")
                        .replace(/\b\w/g, (c) => c.toUpperCase())}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColor(
                        task.priority.toLowerCase()
                      )}`}
                    >
                      {task.priority.charAt(0).toUpperCase() +
                        task.priority.slice(1)}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {new Date(task.due_date).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">{task.assignee_id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
