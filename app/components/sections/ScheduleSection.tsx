import { scheduleList } from "@/app/lib/scheduleList";
import Container from "../layout/Container";

export default function ScheduleSection() {
  return (
    <section className="py-20">
      <Container>
        <h2 className="text-4xl font-bold text-center mb-16">
          <span>イベントスケジュール</span>
        </h2>
        <div className="max-w-3xl mx-auto mb-4">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="space-y-4">
              {scheduleList.map((schedule, index) => (
                <div
                  key={index}
                  className="flex space-x-6 items-center p-4 border-b border-gray-200"
                >
                  <div className="w-24 text-orange-500 font-bold">
                    {schedule.date}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold">{schedule.event}</div>
                    <div className="text-gray-600">{schedule.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
