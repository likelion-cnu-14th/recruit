import { NextResponse } from "next/server";
import { applicationFormSchema } from "@/lib/schema";
import {
  notion,
  getDatabaseId,
  PART_LABELS,
} from "@/lib/notion";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const parseResult = applicationFormSchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: "입력값이 올바르지 않습니다.",
          errors: parseResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = parseResult.data;

    const databaseId = await getDatabaseId();

    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        이름: {
          title: [{ text: { content: data.name } }],
        },
        성별: {
          select: { name: data.gender === "male" ? "남" : "여" },
        },
        학과: {
          rich_text: [{ text: { content: data.major } }],
        },
        학번: {
          rich_text: [{ text: { content: data.studentNumber } }],
        },
        학년: {
          select: { name: data.grade },
        },
        연락처: {
          phone_number: data.phone,
        },
        이메일: {
          email: data.email,
        },
        희망파트: {
          select: { name: PART_LABELS[data.part] || data.part },
        },
        "자기소개 및 지원 동기": {
          rich_text: [{ text: { content: data.selfIntroduction } }],
        },
        "AI 툴 활용 경험": {
          rich_text: [{ text: { content: data.aiToolExperience } }],
        },
        "활동 목표 및 서비스 아이디어": {
          rich_text: [{ text: { content: data.activityGoals } }],
        },
        "트랙 선택 이유": {
          rich_text: [{ text: { content: data.partReason } }],
        },
        "협업 경험 에세이": {
          rich_text: [{ text: { content: data.collaborationEssay } }],
        },
        "코딩 및 결과물 제작 경험": {
          rich_text: [{ text: { content: data.codingExperience } }],
        },
        "기술 스택 및 포트폴리오": {
          rich_text: [{ text: { content: data.portfolio || "" } }],
        },
      },
    });

    return NextResponse.json(
      { success: true, message: "지원서가 성공적으로 제출되었습니다." },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("Notion API Error:", error);

    if (error && typeof error === "object" && "code" in error) {
      const notionError = error as { code: string; message: string };

      if (notionError.code === "validation_error") {
        return NextResponse.json(
          {
            success: false,
            message: "데이터 형식에 오류가 있습니다. 다시 시도해주세요.",
          },
          { status: 400 }
        );
      }

      if (notionError.code === "unauthorized") {
        return NextResponse.json(
          {
            success: false,
            message: "서버 설정 오류입니다. 관리자에게 문의해주세요.",
          },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      {
        success: false,
        message: "제출 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
      },
      { status: 500 }
    );
  }
}
