import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageShell, SectionCard } from "@/components/dashboard/page-shell";

export default function UploadMarksPage() {
  return (
    <PageShell
      eyebrow="Faculty Workflow"
      title="Upload marks in a cleaner workflow."
      description="A structured screen for adding assessment details, batch notes, and upcoming integration with spreadsheet import."
    >
      <SectionCard
        title="Assessment entry"
        description="Starter UI for internal and external uploads"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="course">Course</Label>
            <Input id="course" placeholder="Database Systems" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="section">Section</Label>
            <Input id="section" placeholder="Section A" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="exam">Assessment</Label>
            <Input id="exam" placeholder="Internal 2" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Upload date</Label>
            <Input id="date" placeholder="2026-04-03" />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="notes">Faculty notes</Label>
            <Textarea
              id="notes"
              placeholder="Mention common mistakes, retest plans, or students who need follow-up."
              className="min-h-28"
            />
          </div>
        </div>
        <div className="mt-5 flex gap-3">
          <Button className="rounded-full">Save draft</Button>
          <Button variant="outline" className="rounded-full">
            Upload sheet later
          </Button>
        </div>
      </SectionCard>
    </PageShell>
  );
}
