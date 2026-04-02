import { useGetIdentity, useLogout } from "@refinedev/core";
import { NavLink } from "react-router";
import {
  Bell,
  BookOpen,
  Building,
  LayoutDashboard,
  Lightbulb,
  LogOut,
  Menu,
  Rocket,
  Settings,
  Sparkles,
  Trophy,
  Upload,
  User,
  X,
  BarChart2,
} from "lucide-react";
import { type ReactNode, useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Identity {
  name: string;
  email: string;
  role: "student" | "faculty" | "admin";
}

const studentLinks = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/marks", label: "My Marks", icon: BookOpen },
  { to: "/skills", label: "Skills & Activities", icon: Trophy },
  { to: "/recommendations", label: "Recommendations", icon: Lightbulb },
  { to: "/gap-analysis", label: "Gap Analysis", icon: BarChart2 },
  { to: "/profile", label: "Profile", icon: User },
];

const facultyLinks = [
  { to: "/faculty/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/faculty/upload", label: "Upload Marks", icon: Upload },
  { to: "/faculty/analytics", label: "Analytics", icon: BarChart2 },
];

const adminLinks = [
  { to: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin/departments", label: "Departments", icon: Building },
  { to: "/admin/career-tracks", label: "Career Tracks", icon: Settings },
];

export function CustomLayout({ children }: { children: ReactNode }) {
  const { data: identity } = useGetIdentity<Identity>();
  const { mutate: logout } = useLogout();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const role = identity?.role || "student";
  const links =
    role === "faculty"
      ? facultyLinks
      : role === "admin"
        ? adminLinks
        : studentLinks;

  const initials = identity?.name
    ? identity.name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .toUpperCase()
    : "CP";

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 via-white to-sky-50 text-slate-950 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_30%),radial-gradient(circle_at_top_right,rgba(99,102,241,0.14),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.12),transparent_28%)]" />

      <div className="relative flex min-h-screen overflow-hidden">
        <aside
          className={`${
            sidebarOpen ? "w-72 px-4 py-4" : "w-0 overflow-hidden px-0 py-4"
          } hidden border-r border-slate-200/80 bg-white/80 backdrop-blur-xl transition-all duration-300 lg:flex lg:shrink-0 lg:flex-col dark:border-slate-800 dark:bg-slate-950/70`}
        >
          <div className="rounded-[28px] border border-slate-200/70 bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 p-5 text-white shadow-xl dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-white/10 p-2.5 backdrop-blur">
                <Rocket size={18} className="text-cyan-300" />
              </div>
              <div>
                <span className="font-semibold tracking-tight">Career Pilot</span>
                <p className="text-xs text-slate-400">Academic intelligence hub</p>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                  Active role
                </p>
                <p className="mt-1 text-sm font-medium capitalize">{role}</p>
              </div>
              <Sparkles className="h-4 w-4 text-cyan-300" />
            </div>
          </div>

          <nav className="mt-4 flex-1 space-y-1">
            {links.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-slate-950 text-white shadow-lg shadow-slate-950/15 dark:bg-white dark:text-slate-950"
                      : "text-slate-500 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-white"
                  }`
                }
              >
                <div className="rounded-xl border border-current/10 bg-current/5 p-2">
                  <Icon size={16} />
                </div>
                <span className="flex-1">{label}</span>
              </NavLink>
            ))}
          </nav>

          <div className="rounded-3xl border border-slate-200/80 bg-white/85 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950/80">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-slate-950 text-xs text-white dark:bg-slate-800">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">
                  {identity?.name || "User"}
                </p>
                <p className="truncate text-xs text-slate-500">
                  {identity?.email || ""}
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-xl text-slate-500 hover:text-rose-500"
                onClick={() => logout()}
              >
                <LogOut size={15} />
              </Button>
            </div>
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/75 px-4 py-3 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/65">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-2xl text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
                </Button>
                <div>
                  <p className="text-sm font-semibold tracking-tight">
                    Welcome back, {identity?.name?.split(" ")[0] || "there"}
                  </p>
                  <p className="text-xs text-slate-500">
                    Your academic and career overview is ready.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge
                  variant="outline"
                  className="hidden rounded-full px-3 py-1 text-xs text-slate-600 dark:text-slate-300 sm:inline-flex"
                >
                  Semester progress 78%
                </Badge>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-2xl border border-slate-200/80 bg-white/70 shadow-sm dark:border-slate-800 dark:bg-slate-900/80"
                >
                  <Bell className="h-4 w-4" />
                </Button>
                <Avatar className="h-10 w-10 border border-slate-200 dark:border-slate-800">
                  <AvatarFallback className="bg-sky-100 text-sky-700 dark:bg-slate-800 dark:text-slate-100">
                    {initials}
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          </header>

          <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
