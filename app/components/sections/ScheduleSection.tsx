import Container from "../layout/Container";

export default function ScheduleSection() {
  return (
    <section className="py-20">
      <Container>
        <h2 className="text-4xl font-bold text-center mb-16">
          <span>イベントスケジュール</span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="space-y-4">
              {[
                {
                  date: "2024/04/15",
                  event: "大田原サウナフェスティバル",
                  location: "大田原市文化センター",
                },
                {
                  date: "2024/05/20",
                  event: "企業研修プログラム",
                  location: "栃木県内企業",
                },
                {
                  date: "2024/06/10",
                  event: "熱波師育成講座",
                  location: "大田原熱波協会",
                },
              ].map((schedule, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 border-b border-gray-200"
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
