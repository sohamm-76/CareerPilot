import { BarChart3, Briefcase, Goal, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  InfoList,
  MetricCard,
  MetricGrid,
  PageShell,
  SectionCard,
} from "@/components/dashboard/page-shell";

export default function StudentDashboard() {
  return (
    <PageShell
      eyebrow="Student Workspace"
      title="Turn academic progress into a clearer career plan."
      description="Track your semester momentum, close skill gaps, and prioritize the next actions that improve placement readiness."
      actions={
        <>
          <Button className="rounded-full bg-white text-slate-950 hover:bg-slate-100">
            Explore recommendations
          </Button>
          <Button
            variant="outline"
            className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10"
          >
            Update profile
          </Button>
        </>
      }
    >
      <MetricGrid>
        <MetricCard
          label="Current CGPA"
          value="8.42"
          hint="+0.18 from last term"
          icon={Goal}
          tone="blue"
        />
        <MetricCard
          label="Placement readiness"
          value="78%"
          hint="Strong upward trend"
          icon={Briefcase}
          tone="emerald"
        />
        <MetricCard
          label="Skill coverage"
          value="14 / 18"
          hint="4 high-priority skills to strengthen"
          icon={Sparkles}
          tone="violet"
        />
        <MetricCard
          label="Mock interview score"
          value="86"
          hint="Top quartile in your cohort"
          icon={BarChart3}
          tone="amber"
        />
      </MetricGrid>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
        <SectionCard
          title="Roadmap snapshot"
          description="What deserves attention this week"
          badge="Week 6"
        >
          <div className="space-y-5">
            {[
              { label: "Core CS mastery", value: 82, note: "DBMS and OS are stable." },
              { label: "Problem solving", value: 71, note: "Push consistency in DSA." },
              { label: "Project portfolio", value: 64, note: "Add one measurable case study." },
              { label: "Communication", value: 76, note: "Mock presentation improved." },
            ].map((item) => (
              <div key={item.label} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{item.label}</span>
                  <span className="text-muted-foreground">{item.value}%</span>
                </div>
                <Progress value={item.value} className="h-2.5" />
                <p className="text-xs text-muted-foreground">{item.note}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          title="Priority actions"
          description="Small steps with high placement impact"
          badge="3 focused moves"
        >
          <InfoList
            items={[
              {
                label: "Complete SQL joins revision",
                value: "45 mins",
                helper: "Improves backend interview confidence",
              },
              {
                label: "Ship portfolio update",
                value: "Tonight",
                helper: "Add impact metrics to your resume project",
              },
              {
                label: "Solve 3 medium DSA problems",
                value: "Daily",
                helper: "Maintains consistency before tests",
              },
            ]}
          />
        </SectionCard>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {[
          {
            title: "Most aligned roles",
            description: "Your strengths match data analyst, backend trainee, and business intelligence internships.",
          },
          {
            title: "Faculty feedback trend",
            description: "Feedback is strongest on reliability and delivery. Presentation polish is the next growth area.",
          },
          {
            title: "Resume health",
            description: "Good project depth, but quantify outcomes more clearly and tighten the skills section.",
          },
        ].map((item) => (
          <SectionCard
            key={item.title}
            title={item.title}
            description={item.description}
            className="h-full"
          >
            <Badge variant="secondary" className="rounded-full">
              Insight ready
            </Badge>
          </SectionCard>
        ))}
      </div>
    </PageShell>
  );
}
