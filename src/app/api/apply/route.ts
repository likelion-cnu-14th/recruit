import { NextResponse } from "next/server";
import { applicationFormSchema } from "@/lib/schema";
import {
  notion,
  getDatabaseId,
  PART_LABELS,
  COLLABORATION_LABELS,
  GOAL_LABELS,
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
        "파트 선택 이유": {
          rich_text: [{ text: { content: data.partReason } }],
        },
        "협업 경험": {
          multi_select: data.collaborationExperience.map((id) => ({
            name: COLLABORATION_LABELS[id] || id,
          })),
        },
        "협업 에세이": {
          rich_text: [{ text: { content: data.collaborationEssay } }],
        },
        "지원 목표": {
          multi_select: data.motivationGoals.map((id) => ({
            name: GOAL_LABELS[id] || id,
          })),
        },
        "지원 동기 에세이": {
          rich_text: [{ text: { content: data.motivationEssay } }],
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
