import Link from "next/link";
import { RefreshCcwDot, ExternalLink } from "lucide-react";
import { Task } from "../types/task";
import { getTasks } from "../services/api";

export const revalidate = 60;

export default async function TaskISRPage() {
  const tasks: Task[] = await getTasks();

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl">
          <RefreshCcwDot className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-purple-600">
          Incremental Static Regeneration - Task List
        </h1>
      </div>

      <div className="grid gap-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white p-4 border border-purple-300 rounded-xl shadow-sm transition hover:shadow-md"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-base font-semibold text-gray-800 mb-1">
                  {task.title}
                </h2>
                <p className="text-sm text-gray-500">{task.description}</p>
              </div>

              <Link
                href={`/task-isr/${task.id}`}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200"
              >
                <span>Chi tiết</span>
                <ExternalLink size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
