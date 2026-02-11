import * as z from "zod";

export const applicationFormSchema = z.object({
  // Section 1: Self Introduction & Motivation
  selfIntroduction: z
    .string()
    .min(10, { message: "10자 이상 작성해주세요." })
    .max(1000, { message: "1000자 이내로 작성해주세요." }),

  // Section 2: AI Tool Experience
  aiToolExperience: z
    .string()
    .min(10, { message: "10자 이상 작성해주세요." })
    .max(1000, { message: "1000자 이내로 작성해주세요." }),

  // Section 3: Activity Goals & Service Ideas
  activityGoals: z
    .string()
    .min(10, { message: "10자 이상 작성해주세요." })
    .max(1000, { message: "1000자 이내로 작성해주세요." }),

  // Section 4: Track Selection & Passion
  part: z.enum(["plan_design", "frontend", "backend"] as const),
  partReason: z
    .string()
    .min(10, { message: "10자 이상 작성해주세요." })
    .max(1000, { message: "1000자 이내로 작성해주세요." }),

  // Section 5: Collaboration & Communication
  collaborationEssay: z
    .string()
    .min(10, { message: "10자 이상 작성해주세요." })
    .max(1000, { message: "1000자 이내로 작성해주세요." }),

  // Section 6: Coding & Output Creation
  codingExperience: z
    .string()
    .min(10, { message: "10자 이상 작성해주세요." })
    .max(1000, { message: "1000자 이내로 작성해주세요." }),

  // Section 7: Tech Stack & Portfolio (Optional)
  portfolio: z
    .string()
    .max(1000, { message: "1000자 이내로 작성해주세요." })
    .optional(),

  // Personal Info (Preserved)
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
