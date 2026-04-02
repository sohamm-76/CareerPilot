import {
  BookMarked,
  CheckCircle2,
  GraduationCap,
  TrendingUp,
} from "lucide-react";
import {
  MetricCard,
  MetricGrid,
  PageShell,
  SectionCard,
} from "@/components/dashboard/page-shell";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const marks = [
  { subject: "Data Structures", internal: 28, external: 56, total: 84, trend: "Up" },
  { subject: "Database Systems", internal: 26, external: 52, total: 78, trend: "Stable" },
  { subject: "Operating Systems", internal: 24, external: 49, total: 73, trend: "Up" },
  { subject: "Software Engineering", internal: 29, external: 58, total: 87, trend: "Excellent" },
];

export default function MarksPage() {
  return (
    <PageShell
      eyebrow="Academic Performance"
      title="Marks overview with subject-level clarity."
      description="See where you are outperforming, where marks are slipping, and which courses are driving your overall standing."
    >
      <MetricGrid>
        <MetricCard
          label="Semester average"
          value="80.5%"
          hint="Above department median"
          icon={GraduationCap}
          tone="blue"
        />
        <MetricCard
          label="Best subject"
          value="87"
          hint="Software Engineering"
          icon={CheckCircle2}
          tone="emerald"
        />
        <MetricCard
          label="Course strength"
          value="3 / 4"
          hint="Scoring above 75 in major papers"
          icon={BookMarked}
          tone="violet"
        />
        <MetricCard
          label="Momentum"
          value="+6.2%"
          hint="Compared with previous assessment"
          icon={TrendingUp}
          tone="amber"
        />
      </MetricGrid>

      <SectionCard
        title="Subject breakdown"
        description="Internal, external, and total marks at a glance"
        badge="Latest exam cycle"
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Subject</TableHead>
              <TableHead>Internal</TableHead>
              <TableHead>External</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Trend</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {marks.map((item) => (
              <TableRow key={item.subject}>
                <TableCell className="font-medium">{item.subject}</TableCell>
                <TableCell>{item.internal}</TableCell>
                <TableCell>{item.external}</TableCell>
                <TableCell>{item.total}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="rounded-full">
                    {item.trend}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </SectionCard>
    </PageShell>
  );
}
