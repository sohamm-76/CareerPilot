import { LineChart, PieChart, Users2 } from "lucide-react";
import {
  MetricCard,
  MetricGrid,
  PageShell,
  SectionCard,
} from "@/components/dashboard/page-shell";

export default function FacultyAnalytics() {
  return (
    <PageShell
      eyebrow="Faculty Analytics"
      title="Readable trends instead of isolated marks."
      description="Visual summaries for department performance, weak concepts, and class-level distribution."
    >
      <MetricGrid>
        <MetricCard
          label="Average pass rate"
          value="92%"
          hint="Across current subjects"
          icon={PieChart}
          tone="emerald"
        />
        <MetricCard
          label="Concept difficulty"
          value="3 topics"
          hint="Need revision push"
          icon={LineChart}
          tone="amber"
        />
        <MetricCard
          label="Engagement score"
          value="81%"
          hint="Healthy classroom participation"
          icon={Users2}
          tone="blue"
        />
        <MetricCard
          label="Top cohort"
          value="Section C"
          hint="Consistent performance lead"
          icon={LineChart}
          tone="violet"
        />
      </MetricGrid>
      <SectionCard title="Narrative insights" description="Quick digest for the week">
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Operating Systems questions caused the biggest score drop.",
            "Sections with project-based reviews are retaining concepts better.",
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
