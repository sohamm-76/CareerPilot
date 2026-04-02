import {
  ClipboardCheck,
  GraduationCap,
  TrendingUp,
  Users,
} from "lucide-react";
import {
  MetricCard,
  MetricGrid,
  PageShell,
  SectionCard,
} from "@/components/dashboard/page-shell";

export default function FacultyDashboard() {
  return (
    <PageShell
      eyebrow="Faculty Console"
      title="Monitor class performance without digging through raw sheets."
      description="Track assessment completion, identify at-risk students, and review cohort trends from one place."
    >
      <MetricGrid>
        <MetricCard
          label="Students tracked"
          value="182"
          hint="Across 4 sections"
          icon={Users}
          tone="blue"
        />
        <MetricCard
          label="Uploads completed"
          value="91%"
          hint="Current internal cycle"
          icon={ClipboardCheck}
          tone="emerald"
        />
        <MetricCard
          label="Average class score"
          value="74.6"
          hint="Up by 3.8 points"
          icon={GraduationCap}
          tone="violet"
        />
        <MetricCard
          label="Risk watchlist"
          value="12"
          hint="Need intervention this week"
          icon={TrendingUp}
          tone="amber"
        />
      </MetricGrid>
      <SectionCard
        title="Teaching snapshot"
        description="Keep feedback and interventions visible"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Section A improving in DBMS",
            "Section B needs DSA revision",
            "Attendance strongest in Section C",
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
