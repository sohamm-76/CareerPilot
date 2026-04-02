import { Progress } from "@/components/ui/progress";
import { PageShell, SectionCard } from "@/components/dashboard/page-shell";

export default function GapAnalysisPage() {
  return (
    <PageShell
      eyebrow="Gap Analysis"
      title="Know exactly what stands between you and your target role."
      description="This view highlights the largest readiness gaps so you can focus on skills that materially improve interview outcomes."
    >
      <SectionCard
        title="Role readiness comparison"
        description="Current standing against backend and data-focused internship expectations"
        badge="Actionable"
      >
        <div className="space-y-5">
          {[
            { label: "Data structures problem solving", score: 68 },
            { label: "System design fundamentals", score: 54 },
            { label: "SQL and data querying", score: 82 },
            { label: "Project storytelling", score: 61 },
          ].map((item) => (
            <div key={item.label} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{item.label}</span>
                <span className="text-muted-foreground">{item.score}%</span>
              </div>
              <Progress value={item.score} className="h-2.5" />
            </div>
          ))}
        </div>
      </SectionCard>
    </PageShell>
  );
}
