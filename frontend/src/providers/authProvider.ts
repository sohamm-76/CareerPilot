import type { AuthProvider } from "@refinedev/core";

export const authProvider: AuthProvider = {
  login: async ({ email, password }: { email: string; password: string }) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        return {
          success: false,
          error: new Error(data.message || "Invalid credentials"),
        };
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      const role = data.user?.role;
      const redirectTo =
        role === "faculty"
          ? "/faculty/dashboard"
          : role === "admin"
          ? "/admin/dashboard"
          : "/dashboard";

      return { success: true, redirectTo };
    } catch {
      return {
        success: false,
        error: new Error("Network error. Is the backend running?"),
      };
    }
  },

  logout: async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return { success: true, redirectTo: "/login" };
  },

  check: async () => {
    const token = localStorage.getItem("token");
    return token
      ? { authenticated: true }
      : { authenticated: false, redirectTo: "/login" };
  },

  getIdentity: async () => {
    const userStr = localStorage.getItem("user");
    if (!userStr) return null;
    const user = JSON.parse(userStr);
    return {
      id: user._id || user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatar: undefined,
    };
  },

  onError: async ({ status }: { status?: number }) => {
    if (status === 401) return { logout: true };
    return { error: new Error("Something went wrong") };
  },
};
