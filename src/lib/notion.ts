import { Client } from "@notionhq/client";

export const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID!;

export const PART_LABELS: Record<string, string> = {
  plan_design: "기획/디자인",
  frontend: "프론트엔드",
  backend: "백엔드",
};

export const COLLABORATION_LABELS: Record<string, string> = {
  club_member: "동아리/커뮤니티 부원 활동",
  club_lead: "동아리/커뮤니티 운영 활동",
  study: "스터디/학회 참여",
  tutoring: "과외/멘토링 경험",
};

export const GOAL_LABELS: Record<string, string> = {
  service: "나만의 서비스 제작",
  community: "개발자 커뮤니티",
  hackathon: "해커톤 경험",
  portfolio: "포트폴리오 완성",
  startup: "창업 도전",
  network: "전국 네트워크",
};

/**
 * 환경 변수에서 Notion 데이터베이스 ID를 반환합니다.
 */
export async function getDatabaseId(): Promise<string> {
  return NOTION_DATABASE_ID;
}
