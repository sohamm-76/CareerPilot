import { ArrowRight, Briefcase, Lightbulb, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell, SectionCard } from "@/components/dashboard/page-shell";

const recommendations = [
  {
    title: "Backend Developer Path",
    detail: "Strong DBMS and systems marks make backend internships a realistic next target.",
    icon: Briefcase,
  },
  {
    title: "Data Analyst Track",
    detail: "Your SQL and analytics profile is already above average for entry-level data roles.",
    icon: Target,
  },
  {
    title: "Project Showcase Upgrade",
    detail: "Turn your best academic project into a portfolio case study with measurable impact.",
    icon: Lightbulb,
  },
];

export default function RecommendationsPage() {
  return (
    <PageShell
      eyebrow="Career Recommendations"
      title="Best-fit moves based on your current trajectory."
      description="These recommendations blend marks, skill readiness, and role alignment so you know where to invest your effort next."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {recommendations.map(({ title, detail, icon: Icon }) => (
          <SectionCard key={title} title={title} description={detail} className="h-full">
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 dark:bg-slate-900 dark:text-sky-300">
                <Icon className="h-5 w-5" />
              </div>
              <Button variant="outline" className="w-full justify-between rounded-2xl">
                Explore pathway
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </SectionCard>
        ))}
      </div>
    </PageShell>
  );
}
