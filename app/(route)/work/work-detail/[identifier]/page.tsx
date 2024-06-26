import { WorkDetailPage, WorkDetailInterface } from "@/app/components/view/work/WorkDetail";

export function generateStaticParams() {
  return [
    { identifier: "ai_chatbot" },
    { identifier: "attendance" },
    { identifier: "github_battle" },
    { identifier: "motion" },
    { identifier: "realtime_chat" },
    { identifier: "reddot_hair_catalog" },
    { identifier: "streaming" },
    { identifier: "weather_search" },
    { identifier: "quiz_me" },
    { identifier: "portfolio" },
  ];
}

const WorkDetail = ({ params }: WorkDetailInterface) => {
  return <WorkDetailPage params={params} />;
};

export default WorkDetail;
