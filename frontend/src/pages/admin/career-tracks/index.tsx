import {
  ArrowRight,
  Database,
  LayoutTemplate,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell, SectionCard } from "@/components/dashboard/page-shell";

export default function CareerTracksPage() {
  return (
    <PageShell
      eyebrow="Career Tracks"
      title="Organize role pathways as visible, understandable tracks."
      description="A more product-like view of how departments can steer students into backend, analytics, and platform roles."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {[
          {
            title: "Backend Engineering",
            description: "Strong fit for students with solid DBMS, systems, and project depth.",
            icon: LayoutTemplate,
          },
          {
            title: "Data Analytics",
            description: "Built for students with SQL confidence and analytical storytelling.",
            icon: Database,
          },
          {
            title: "Cybersecurity Foundations",
            description: "Emerging path for students showing systems and security interest.",
            icon: ShieldCheck,
          },
        ].map(({ title, description, icon: Icon }) => (
          <SectionCard key={title} title={title} description={description} className="h-full">
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-900">
                <Icon className="h-5 w-5" />
              </div>
              <Button variant="outline" className="w-full justify-between rounded-2xl">
                View track
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </SectionCard>
        ))}
      </div>
    </PageShell>
  );
}
