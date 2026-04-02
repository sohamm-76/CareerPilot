import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type PageShellProps = {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
  children: ReactNode;
};

type MetricCardProps = {
  label: string;
  value: string;
  hint: string;
  icon: LucideIcon;
  tone?: "blue" | "emerald" | "amber" | "violet";
};

type SectionCardProps = {
  title: string;
  description?: string;
  badge?: string;
  className?: string;
  children: ReactNode;
};

const toneMap: Record<NonNullable<MetricCardProps["tone"]>, string> = {
  blue: "from-sky-500/15 to-cyan-500/10 text-sky-600 dark:text-sky-300",
  emerald:
    "from-emerald-500/15 to-teal-500/10 text-emerald-600 dark:text-emerald-300",
  amber: "from-amber-500/15 to-orange-500/10 text-amber-600 dark:text-amber-300",
  violet:
    "from-violet-500/15 to-fuchsia-500/10 text-violet-600 dark:text-violet-300",
};

export function PageShell({
  eyebrow,
  title,
  description,
  actions,
  children,
}: PageShellProps) {
  return (
    <div className="flex flex-col gap-6">
      <section className="relative overflow-hidden rounded-[28px] border border-border/70 bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 p-6 text-white shadow-2xl shadow-slate-950/20">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.25),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.22),transparent_36%)]" />
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-3">
            {eyebrow ? (
              <Badge className="rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-slate-200">
                {eyebrow}
              </Badge>
            ) : null}
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {title}
              </h1>
              <p className="max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                {description}
              </p>
            </div>
          </div>
          {actions ? <div className="relative flex flex-wrap gap-3">{actions}</div> : null}
        </div>
      </section>
      {children}
    </div>
  );
}

export function MetricGrid({ children }: { children: ReactNode }) {
  return <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{children}</div>;
}

export function MetricCard({
  label,
  value,
  hint,
  icon: Icon,
  tone = "blue",
}: MetricCardProps) {
  return (
    <Card className="overflow-hidden border-border/70 bg-card/90 shadow-sm">
      <CardContent className="relative p-5">
        <div
          className={cn(
            "absolute inset-x-0 top-0 h-24 bg-linear-to-r opacity-90",
            toneMap[tone]
          )}
        />
        <div className="relative flex items-start justify-between gap-4">
          <div className="space-y-3">
            <p className="text-sm font-medium text-muted-foreground">{label}</p>
            <div className="space-y-1">
              <p className="text-3xl font-semibold tracking-tight">{value}</p>
              <p className="text-sm text-muted-foreground">{hint}</p>
            </div>
          </div>
          <div className="rounded-2xl border border-white/40 bg-white/70 p-3 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
            <Icon className="h-5 w-5" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function SectionCard({
  title,
  description,
  badge,
  className,
  children,
}: SectionCardProps) {
  return (
    <Card className={cn("border-border/70 bg-card/90 shadow-sm", className)}>
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <CardTitle className="text-lg">{title}</CardTitle>
            {description ? <CardDescription>{description}</CardDescription> : null}
          </div>
          {badge ? (
            <Badge variant="outline" className="rounded-full px-3 py-1">
              {badge}
            </Badge>
          ) : null}
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

export function InfoList({
  items,
}: {
  items: Array<{ label: string; value: string; helper?: string }>;
}) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex items-center justify-between gap-4 rounded-2xl border border-border/70 bg-muted/30 px-4 py-3"
        >
          <div>
            <p className="text-sm font-medium">{item.label}</p>
            {item.helper ? (
              <p className="text-xs text-muted-foreground">{item.helper}</p>
            ) : null}
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold">
            <span>{item.value}</span>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      ))}
    </div>
  );
}
