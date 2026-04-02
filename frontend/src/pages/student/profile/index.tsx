import { Badge } from "@/components/ui/badge";
import {
  InfoList,
  PageShell,
  SectionCard,
} from "@/components/dashboard/page-shell";

export default function ProfilePage() {
  return (
    <PageShell
      eyebrow="Student Profile"
      title="A compact profile built for academic and career decisions."
      description="Keep your identity, strengths, and visible achievements organized so recommendations stay relevant."
    >
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <SectionCard
          title="Profile summary"
          description="Snapshot used across recommendations and faculty insights"
          badge="Updated today"
        >
          <div className="space-y-4">
            <div className="rounded-3xl border border-border/70 bg-muted/30 p-5">
              <p className="text-lg font-semibold">Aarav Sharma</p>
              <p className="text-sm text-muted-foreground">
                B.Tech Computer Science • 3rd Year • Interested in backend and
                analytics roles
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Java", "SQL", "React", "Node.js", "Problem Solving"].map((item) => (
                <Badge key={item} variant="secondary" className="rounded-full">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </SectionCard>
        <SectionCard title="Highlights" description="Visible strengths in your record">
          <InfoList
            items={[
              {
                label: "Top recent project",
                value: "Campus CRM",
                helper: "Improved workflow for student queries",
              },
              {
                label: "Current internship focus",
                value: "Backend",
                helper: "Preferred for 2026 applications",
              },
              {
                label: "Leadership evidence",
                value: "Tech club coordinator",
                helper: "Strong teamwork signal",
              },
            ]}
          />
        </SectionCard>
      </div>
    </PageShell>
  );
}
