import { Badge } from "@/components/ui/badge";
import { PageShell, SectionCard } from "@/components/dashboard/page-shell";

export default function DepartmentsPage() {
  return (
    <PageShell
      eyebrow="Departments"
      title="Department health in one organized view."
      description="Starter cards to compare academic readiness and placement direction by department."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[
          { name: "Computer Science", readiness: "82%", tag: "Leading" },
          { name: "Information Technology", readiness: "77%", tag: "Stable" },
          { name: "Electronics", readiness: "71%", tag: "Improving" },
          { name: "Mechanical", readiness: "66%", tag: "Needs focus" },
        ].map((item) => (
          <SectionCard
            key={item.name}
            title={item.name}
            description="Placement and academic alignment score"
          >
            <div className="flex items-center justify-between">
              <span className="text-3xl font-semibold">{item.readiness}</span>
              <Badge variant="outline" className="rounded-full">
                {item.tag}
              </Badge>
            </div>
          </SectionCard>
        ))}
      </div>
    </PageShell>
  );
}
