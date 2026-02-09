"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  // Section 1: Part Selection
  part: z.enum(["plan", "design", "frontend", "backend", "other"] as const),
  partReason: z.string().min(10, {
    message: "10자 이상 작성해주세요.",
  }).max(500, {
    message: "500자 이내로 작성해주세요.",
  }),

  // Section 2: Collaboration Experience
  collaborationExperience: z.array(z.string()).refine((value) => value.length > 0, {
    message: "최소 1개 이상의 협업 경험을 선택해주세요.",
  }),
  collaborationEssay: z.string().min(10, {
    message: "10자 이상 작성해주세요.",
  }).max(500, {
    message: "500자 이내로 작성해주세요.",
  }),

  // Section 3: Motivation
  motivationGoals: z.array(z.string()).refine((value) => value.length > 0, {
    message: "최소 1개 이상의 목표를 선택해주세요.",
  }).refine((value) => value.length <= 2, {
    message: "최대 2개까지만 선택할 수 있어요.",
  }),
  motivationEssay: z.string().min(10, {
    message: "지원 동기를 자세히 적어주세요.",
  }),

  // Section 4: Personal Info
  name: z.string().min(2, {
    message: "이름을 입력해주세요.",
  }),
  studentId: z.string().min(1, {
     message: "소속 학과를 입력해주세요.",
  }),
  phone: z.string().regex(/^010-\d{4}-\d{4}$/, {
    message: "010-0000-0000 형식으로 입력해주세요.",
  }),
  email: z.string().email({
    message: "올바른 이메일 주소를 입력해주세요.",
  }),

  // Section 5: Consent
  privacyConsent: z.string().refine((val) => val === "yes", {
    message: "개인정보 수집에 동의해야 지원이 가능합니다.",
  }),
});

export default function ApplicationForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      partReason: "",
      collaborationExperience: [],
      collaborationEssay: "",
      motivationGoals: [],
      motivationEssay: "",
      name: "",
      studentId: "",
      phone: "",
      email: "",
      // privacyConsent is intentionally left undefined to force selection
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    alert("지원서가 제출되었습니다! (콘솔 확인)");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Section 1: Part Selection */}
        <Card className="border-white/10 bg-white/5 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-[#CCFF00]">활동 희망 파트</CardTitle>
            <CardDescription className="text-gray-400">어느 파트에 지원하시나요?</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="part"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="plan" />
                        </FormControl>
                        <FormLabel className="font-normal text-white">기획 파트</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="design" />
                        </FormControl>
                        <FormLabel className="font-normal text-white">디자인 파트</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="frontend" />
                        </FormControl>
                        <FormLabel className="font-normal text-white">프론트엔드 파트</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="backend" />
                        </FormControl>
                        <FormLabel className="font-normal text-white">백엔드 파트</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="other" />
                        </FormControl>
                        <FormLabel className="font-normal text-white">기타</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="partReason"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">선택한 파트와 관련하여 이전 경험과 앞으로 기대하는 성장을 작성해 주세요. (500자 이내)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="자유롭게 작성해주세요"
                      className="resize-none bg-black/50 border-white/10 text-white min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Section 2: Collaboration */}
        <Card className="border-white/10 bg-white/5 backdrop-blur-md">
           <CardHeader>
            <CardTitle className="text-[#CCFF00]">협업 경험</CardTitle>
            <CardDescription className="text-gray-400">경험이 있는 활동을 모두 체크해 주세요.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="collaborationExperience"
              render={() => (
                <FormItem>
                  {[
                    { id: "club_member", label: "동아리/커뮤니티 부원 활동" },
                    { id: "club_lead", label: "동아리/커뮤니티 운영 활동" },
                    { id: "study", label: "스터디/학회 참여" },
                    { id: "tutoring", label: "과외" },
                  ].map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="collaborationExperience"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.id
                                        )
                                      )
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal text-white">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="collaborationEssay"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">
                    멋사대학은 협업과 팀워크를 중요한 가치로 생각하는 공동체입니다. 어떤 협업 경험이 있는지, 해당 경험에서 얻은 가치를 이 동아리에 어떻게 적용시켜 볼 수 있을지 작성해 주세요. (500자 이내)
                  </FormLabel>
                  <FormControl>
                    <Textarea
                       placeholder="경험을 구체적으로 작성해주세요"
                      className="resize-none bg-black/50 border-white/10 text-white min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Section 3: Motivation */}
        <Card className="border-white/10 bg-white/5 backdrop-blur-md">
           <CardHeader>
            <CardTitle className="text-[#CCFF00]">지원 동기</CardTitle>
            <CardDescription className="text-gray-400">멋사대학을 통해 얻고 싶은 가치를 선택해주세요 (최대 2개)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="motivationGoals"
              render={() => (
                <FormItem>
                   {[
                    { id: "service", label: "실제 서비스 제작" },
                    { id: "community", label: "협업 및 학습 커뮤니티 구축" },
                    { id: "hackathon", label: "해커톤/프로젝트 경험" },
                    { id: "portfolio", label: "포트폴리오 등 취업 준비" },
                    { id: "startup", label: "창업에 대한 관심" },
                    { id: "network", label: "전국 네트워크 형성" },
                  ].map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="motivationGoals"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.id
                                        )
                                      )
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal text-white">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="motivationEssay"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">
                    멋사대학과 함께 하고 싶은 이유는 무엇인가요? 위 질문에 대한 답변을 토대로 기대하는 활동, 추구하는 가치, 성장하고 싶은 의지 등 지원 동기를 자세하게 알려주세요.
                  </FormLabel>
                   <FormControl>
                    <Textarea
                       placeholder="진정성 있는 답변 부탁드립니다"
                      className="resize-none bg-black/50 border-white/10 text-white min-h-[150px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Section 4: Personal Info */}
         <Card className="border-white/10 bg-white/5 backdrop-blur-md">
           <CardHeader>
            <CardTitle className="text-[#CCFF00]">개인 정보</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">이름</FormLabel>
                  <FormControl>
                    <Input placeholder="홍길동" className="bg-black/50 border-white/10 text-white" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="studentId"
              render={({ field }) => (
                 <FormItem>
                  <FormLabel className="text-white">소속 학과</FormLabel>
                  <FormDescription className="text-gray-400 text-xs">복수/부/심화 전공도 함께 적어주세요. (예: 경영학과/컴퓨터공학과)</FormDescription>
                  <FormControl>
                    <Input placeholder="컴퓨터공학과" className="bg-black/50 border-white/10 text-white" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                 <FormItem>
                  <FormLabel className="text-white">핸드폰 번호</FormLabel>
                  <FormControl>
                    <Input placeholder="010-0000-0000" className="bg-black/50 border-white/10 text-white" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                 <FormItem>
                  <FormLabel className="text-white">개인 이메일 주소</FormLabel>
                   <FormDescription className="text-gray-400 text-xs">학교 이메일이 아닌 개인적으로 활용하는 이메일 주소를 작성해 주세요!</FormDescription>
                  <FormControl>
                    <Input placeholder="likelion@example.com" className="bg-black/50 border-white/10 text-white" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Section 5: Consent */}
        <Card className="border-white/10 bg-white/5 backdrop-blur-md">
           <CardHeader>
            <CardTitle className="text-[#CCFF00]">개인정보 수집 동의</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="h-40 overflow-y-auto rounded-md border border-white/10 bg-black/50 p-4 text-xs text-gray-400 space-y-2">
                <p><strong>[개인정보 수집·이용 동의서]</strong></p>
                <p>주식회사 멋쟁이 사자처럼은 「정보통신망 이용촉진 및 정보보호에 관한 법률」 및 「개인정보보호법」 등 관련 법령상의 개인정보보호 규정을 준수하여...</p>
                <p>(중략 - 제공된 개인정보 처리방침 전문)</p>
                <p><strong>가. 개인 정보의 수집· 이용에 관한 사항</strong></p>
                <p>수집 항목: 성명, 연락처, 이메일, 소속 등</p>
                <p>보유 기간: 사업종료 이후 5년간 보존</p>
                <p><strong>나. 개인 정보 제3자 제공에 관한 사항</strong></p>
                <p>제공받는 자: 주식회사 멋쟁이사자처럼</p>
            </div>
             <FormField
              control={form.control}
              name="privacyConsent"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-white">개인정보 수집에 동의하십니까?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="yes" />
                        </FormControl>
                        <FormLabel className="font-normal text-white">예</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="no" />
                        </FormControl>
                        <FormLabel className="font-normal text-white">아니오</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Button type="submit" size="lg" className="w-full bg-[#FF9E0B] hover:bg-[#FF9E0B]/90 text-black font-bold text-lg">
          지원하기
        </Button>
      </form>
    </Form>
  );
}
