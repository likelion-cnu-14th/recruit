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

/**
 * 환경 변수에서 Notion 데이터베이스 ID를 반환합니다.
 */
export async function getDatabaseId(): Promise<string> {
  return NOTION_DATABASE_ID;
}
