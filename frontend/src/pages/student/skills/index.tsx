import { Brain, Code2, MessageSquare, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { PageShell, SectionCard } from "@/components/dashboard/page-shell";

const skills = [
  { name: "DSA", score: 76, icon: Code2, tag: "Core" },
  { name: "SQL & Analytics", score: 82, icon: Brain, tag: "Strong" },
  { name: "Communication", score: 71, icon: MessageSquare, tag: "Growing" },
  { name: "Collaboration", score: 84, icon: Users, tag: "Strong" },
];

export default function SkillsPage() {
  return (
    <PageShell
      eyebrow="Skills Matrix"
      title="A clearer picture of what you can already prove."
      description="Your technical and professional skills mapped to readiness so you can prioritize development with intent."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map(({ name, score, icon: Icon, tag }) => (
          <SectionCard
            key={name}
            title={name}
            description="Measured from coursework, projects, and activity participation."
            badge={tag}
          >
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-slate-100 p-3 dark:bg-slate-900">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-2xl font-semibold">{score}%</p>
                  <p className="text-sm text-muted-foreground">
                    Current competency score
                  </p>
                </div>
              </div>
              <Progress value={score} className="h-2.5" />
              <Badge variant="secondary" className="rounded-full">
                Suggested focus: +10% in 4 weeks
              </Badge>
            </div>
          </SectionCard>
        ))}
      </div>
    </PageShell>
  );
}
