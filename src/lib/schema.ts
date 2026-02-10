import * as z from "zod";

export const applicationFormSchema = z.object({
  // Section 1: Part Selection
  part: z.enum(["plan_design", "frontend", "backend"] as const),
  partReason: z
    .string()
    .min(10, { message: "10자 이상 작성해주세요." })
    .max(500, { message: "500자 이내로 작성해주세요." }),

  // Section 2: Collaboration Experience
  collaborationExperience: z
    .array(z.string())
    .refine((value) => value.length > 0, {
      message: "최소 1개 이상의 협업 경험을 선택해주세요.",
    }),
  collaborationEssay: z
    .string()
    .min(10, { message: "10자 이상 작성해주세요." })
    .max(500, { message: "500자 이내로 작성해주세요." }),

  // Section 3: Motivation
  motivationGoals: z
    .array(z.string())
    .refine((value) => value.length > 0, {
      message: "최소 1개 이상의 목표를 선택해주세요.",
    })
    .refine((value) => value.length <= 2, {
      message: "최대 2개까지만 선택할 수 있어요.",
    }),
  motivationEssay: z
    .string()
    .min(10, { message: "지원 동기를 자세히 적어주세요." })
    .max(2000, { message: "2000자 이내로 작성해주세요." }),

  // Section 4: Personal Info
  name: z.string().min(2, { message: "이름을 입력해주세요." }),
  major: z.string().min(1, { message: "소속 학과를 입력해주세요." }),
  studentNumber: z.string().min(1, { message: "학번을 입력해주세요." }),
  grade: z.string().min(1, { message: "학년을 입력해주세요." }),
  phone: z.string().regex(/^010-\d{4}-\d{4}$/, {
    message: "010-0000-0000 형식으로 입력해주세요.",
  }),
  email: z.string().email({ message: "올바른 이메일 주소를 입력해주세요." }),
});

export type ApplicationFormData = z.infer<typeof applicationFormSchema>;
