import { RefreshCcwDot, Clock } from "lucide-react";
import { Task } from "../../types/task";
import { getTaskById } from "../../types/api";

export const revalidate = 10;

type Props = {
  params: {
    id: string;
  };
};

export default async function TaskDetailPage({ params }: Props) {
  const task: Task = await getTaskById(params.id);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl">
          <RefreshCcwDot className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-purple-600">
          Incremental Static Regeneration - Task Detail
        </h1>
      </div>

      <div className="bg-white p-4 border border-purple-300 rounded-xl shadow-sm transition hover:shadow-md">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold">{task.title}</h2>
          <div className="flex items-center gap-2 text-purple-600 text-sm">
            <Clock size={16} />
            <span>Revalidate: 10s</span>
          </div>
        </div>
        <p className="text-gray-700 mb-4">{task.description}</p>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <p>
            <strong>Status:</strong> {task.status}
          </p>
          <p>
            <strong>Priority:</strong> {task.priority}
          </p>
          <p>
            <strong>Due Date:</strong>{" "}
            {new Date(task.due_date).toLocaleDateString()}
          </p>
          <p>
            <strong>Assignee:</strong> {task.assignee_id}
          </p>
        </div>
      </div>
    </div>
  );
}
