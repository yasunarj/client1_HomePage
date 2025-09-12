export const dynamic = "force-dynamic";

import Container from "../layout/Container";
import ScheduleTitle from "./ScheduleTitle";
import ScheduleCard from "./ScheduleCard";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

interface ScheduleItem {
  title: string;
  date: string;
  place: string;
  time2: string | null;
}

const parseSchedulePage = (page: PageObjectResponse): ScheduleItem => {
  const props = page.properties;

  const title =
    "イベント内容" in props && props["イベント内容"].type === "title"
      ? props["イベント内容"].title[0]?.plain_text ?? "タイトルなし"
      : "タイトルなし";

  const date =
    "日付" in props && props["日付"].type === "date"
      ? props["日付"].date!.start ?? "日付なし"
      : "日付なし";

  const place =
    "場所" in props && props["場所"].type === "rich_text"
      ? props["場所"].rich_text[0]?.plain_text ?? "場所未設定"
      : "場所未設定";

  const time2 =
    "時間２" in props && props["時間２"].type === "date"
      ? props["時間２"].date?.start ?? null
      : null;

  return { title, date, place, time2 };
};

export default async function ScheduleSection() {
  const res = await fetch(
    `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28",
      },
      body: JSON.stringify({
        sorts: [{ property: "日付", direction: "descending" }],
      }),
      cache: "no-store", // ← これが SSR を保証する
    }
  );

  if (!res.ok) {
    console.error("Notion API fetch failed", res.status, await res.text());
    throw new Error("Failed to fetch Notion data");
  }

  const data = await res.json();
  const scheduleList = (data.results as PageObjectResponse[]).map(
    parseSchedulePage
  );

  return (
    <section
      id="schedule"
      className="relative py-20 bg-gray-50 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/images/pngtree-natural-wood-paneling-lines-the-interior-of-the-sauna-ideal-for-background-or-texture-photo-image_33945628.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/20 z-0"></div>
      <div className="relative z-10">
        <Container>
          <ScheduleTitle />
          <div className="max-w-3xl mx-auto mb-4 h-[380px] overflow-y-scroll">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="space-y-4">
                {scheduleList.map((schedule, index) => (
                  <ScheduleCard key={index} schedule={schedule} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

// ↓SSRの設定ができなかったコード、おそらくNext.jsには対応できない。↓

// export const dynamic = "force-dynamic";

// import Container from "../layout/Container";
// import { Client } from "@notionhq/client";
// import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
// import ScheduleTitle from "./ScheduleTitle";
// import ScheduleCard from "./ScheduleCard";

// interface ScheduleItem {
//   title: string;
//   date: string;
//   place: string;
// }

// const notion = new Client({ auth: process.env.NOTION_TOKEN });

// const parseSchedulePage = (page: PageObjectResponse): ScheduleItem => {
//   const props = page.properties;

//   const title =
//     "イベント内容" in props && props["イベント内容"].type === "title"
//       ? props["イベント内容"].title[0]?.plain_text ?? "タイトルなし"
//       : "タイトルなし";

//   const date =
//     "日付" in props && props["日付"].type === "date"
//       ? props["日付"].date?.start ?? "日付なし"
//       : "日付なし";

//   const place =
//     "場所" in props && props["場所"].type === "rich_text"
//       ? props["場所"].rich_text[0]?.plain_text ?? "場所未設定"
//       : "場所未設定";

//   return { title, date, place };
// };

// export default async function ScheduleSection() {
//   const databaseId = process.env.NOTION_DATABASE_ID!;
//   const response = await notion.databases.query({
//     database_id: databaseId,
//     sorts: [{ property: "日付", direction: "descending" }],
//   });

//   const scheduleList = (response.results as PageObjectResponse[]).map(
//     parseSchedulePage
//   );

//   return (
//     <section id="schedule" className="py-20">
//       <Container>
//         <ScheduleTitle />
//         <div className="max-w-3xl mx-auto mb-4 h-[380px] overflow-y-scroll">
//           <div className="bg-white p-4 rounded-lg shadow-lg">
//             <div className="space-y-4">
//               {scheduleList.map((schedule, index) => (
//                 <ScheduleCard key={index} schedule={schedule} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }
