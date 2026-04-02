import {
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  Users,
} from "lucide-react";
import {
  MetricCard,
  MetricGrid,
  PageShell,
  SectionCard,
} from "@/components/dashboard/page-shell";

export default function AdminDashboard() {
  return (
    <PageShell
      eyebrow="Admin Overview"
      title="A sharper command center for departments, tracks, and readiness."
      description="See institutional performance at a glance and keep academic strategy aligned with placement outcomes."
    >
      <MetricGrid>
        <MetricCard
          label="Departments"
          value="8"
          hint="Active academic units"
          icon={Building2}
          tone="blue"
        />
        <MetricCard
          label="Career tracks"
          value="15"
          hint="Mapped across programs"
          icon={BriefcaseBusiness}
          tone="violet"
        />
        <MetricCard
          label="Students monitored"
          value="1,248"
          hint="Live readiness signals"
          icon={Users}
          tone="emerald"
        />
        <MetricCard
          label="Placement alignment"
          value="74%"
          hint="Improving quarter over quarter"
          icon={GraduationCap}
          tone="amber"
        />
      </MetricGrid>
      <SectionCard title="Leadership notes" description="Institution-level highlights">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Computer Science is strongest in backend-aligned tracks.",
            "Mechanical needs more project visibility in profiles.",
            "Analytics interest is rising across commerce and CS cohorts.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-border/70 bg-muted/30 p-4 text-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </SectionCard>
    </PageShell>
  );
}
