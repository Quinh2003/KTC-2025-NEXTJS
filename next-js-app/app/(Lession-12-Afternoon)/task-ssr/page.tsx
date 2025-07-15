import { Globe } from "lucide-react";
import { Task } from "../types/task";
import { getTasks } from "../types/api";

export const dynamic = "force-dynamic";

const statusColorMap: Record<string, string> = {
  done: "bg-green-100 text-green-700",
  in_progress: "bg-blue-100 text-blue-700",
  to_do: "bg-yellow-100 text-yellow-800",
};

const priorityColorMap: Record<string, string> = {
  high: "bg-red-100 text-red-700",
  medium: "bg-yellow-100 text-yellow-800",
  low: "bg-gray-100 text-gray-700",
};

const formatText = (text: string) =>
  text.replace("_", " ").replace(/\b\w/g, (c) => c.toUpperCase());

export default async function TaskSSRPage() {
  const tasks: Task[] = await getTasks();

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl">
          <Globe className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-blue-600">
          Server-Side Rendering - Task List
        </h1>
      </div>

      <div className="overflow-auto rounded-xl shadow border bg-white">
        <table className="w-full text-sm text-left">
          <thead className="bg-blue-100 text-blue-900 uppercase text-xs">
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
              <tr key={task.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3 font-semibold">{task.id}</td>
                <td className="px-4 py-3">{task.title}</td>
                <td className="px-4 py-3">{task.description}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      statusColorMap[task.status] || "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {formatText(task.status)}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      priorityColorMap[task.priority] ||
                      "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {formatText(task.priority)}
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
    </div>
  );
}
