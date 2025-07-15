import { Task } from "./task";
// Hàm đăng nhập để lấy access_token
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
// Hàm lấy toàn bộ task
export const getTasks = async (): Promise<Task[]> => {
  const token = await login();
  const res = await fetch("https://server.aptech.io/workspaces/tasks", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Không thể tải danh sách task");
  return res.json();
};
// Hàm lấy task theo ID
export const getTaskById = async (id: string): Promise<Task> => {
  const token = await login();
  const res = await fetch(`https://server.aptech.io/workspaces/tasks/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Không thể tải task");
  return res.json();
};
