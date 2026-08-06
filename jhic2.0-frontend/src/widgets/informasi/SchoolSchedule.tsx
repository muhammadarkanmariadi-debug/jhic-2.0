import { Card } from "@/shared/ui/Card";
import { Clock } from "lucide-react";
import { SchoolScheduleRecord, ScheduleBlock } from "@/services/schoolSchedule";

function formatRange(block: ScheduleBlock) {
  return block.end ? `${block.start} – ${block.end}` : block.start;
}

export function SchoolSchedule({ schedules }: { schedules: SchoolScheduleRecord[] }) {
  if (schedules.length === 0) return null;

  return (
    <div className="space-y-14">
      {schedules.map((schedule) => (
        <section key={schedule.id}>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl font-extrabold text-text-main mb-3">{schedule.title}</h2>
            {schedule.description && (
              <p className="text-text-muted leading-relaxed">{schedule.description}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schedule.days.length === 0 ? (
              <p className="text-text-muted col-span-full text-center py-8">
                Jadwal hari ini belum tersedia. Silakan cek kembali.
              </p>
            ) : (
              schedule.days.map((day) => (
                <Card key={day.name} className="p-6">
                  <div className="flex items-center gap-2.5 mb-4 border-b border-border-light pb-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/10 text-accent">
                      <Clock className="h-4 w-4" />
                    </span>
                    <h3 className="font-extrabold text-text-main">{day.name}</h3>
                  </div>
                  <ul className="divide-y divide-border-light">
                    {day.blocks.length === 0 ? (
                      <li className="py-3 text-sm text-text-muted">Belum ada kegiatan.</li>
                    ) : (
                      day.blocks.map((block, i) => (
                        <li key={i} className="flex items-center justify-between gap-4 py-2.5">
                          <span className="text-sm font-semibold text-text-main">{block.label}</span>
                          <span className="text-sm font-bold text-accent whitespace-nowrap">
                            {formatRange(block)}
                          </span>
                        </li>
                      ))
                    )}
                  </ul>
                </Card>
              ))
            )}
          </div>
        </section>
      ))}
    </div>
  );
}