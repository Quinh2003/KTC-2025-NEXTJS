import { Task } from "../types/task";

// Đăng nhập để lấy token
export const login = async (): Promise<string> => {
  const res = await fetch("https://server.aptech.io/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "tungnt@softech.vn",
      password: "123456789",
    }),
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Đăng nhập thất bại");
  }

  const data = await res.json();
  return data.access_token;
};

// Lấy danh sách toàn bộ task
export const getTasks = async (): Promise<Task[]> => {
  const token = await login();
  const res = await fetch("https://server.aptech.io/workspaces/tasks", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Không thể tải danh sách task");

  const data: Task[] = await res.json(); // ✅ ép kiểu rõ
  return data;
};

// Lấy task theo ID
export const getTaskById = async (id: string): Promise<Task> => {
  const token = await login();
  const res = await fetch(`https://server.aptech.io/workspaces/tasks/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Không thể tải task");

  const data: Task = await res.json(); 
  return data;
};
