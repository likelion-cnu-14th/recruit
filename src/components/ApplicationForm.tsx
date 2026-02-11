"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { applicationFormSchema, type ApplicationFormData } from "@/lib/schema";
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
import { motion } from "framer-motion";
import { 
  Palette, 
  Code, 
  Server, 
  MessageSquare, 
  MoreHorizontal,
  CheckCircle2,
  Trophy,
  Users,
  Target,
  Rocket
} from "lucide-react";
import { cn } from "@/lib/utils";


export default function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const form = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationFormSchema),
    defaultValues: {
      part: "plan_design",
      partReason: "",
      selfIntroduction: "",
      aiToolExperience: "",
      activityGoals: "",
      collaborationEssay: "",
      codingExperience: "",
      portfolio: "",
      name: "",
      gender: "male",
      major: "",
      studentNumber: "",
      grade: "",
      phone: "",
      email: "",
    },
  });

  async function onSubmit(values: ApplicationFormData) {
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setSubmitResult({
          success: false,
          message: result.message || "제출 중 오류가 발생했습니다.",
        });
        return;
      }

      setSubmitResult({
        success: true,
        message: result.message,
      });

      form.reset();
    } catch {
      setSubmitResult({
        success: false,
        message: "네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">

        {/* Section 1: Personal Info */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Card className="glass-panel border-0 shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-orange-50 to-white p-6 border-b border-orange-100">
               <CardTitle className="text-xl md:text-2xl font-bold flex items-center text-gray-900">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 text-sm font-black">1</span>
                개인 정보
              </CardTitle>
            </div>
            <CardContent className="p-6 md:p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">이름</FormLabel>
                      <FormControl>
                        <Input placeholder="" className="bg-white border-gray-200 focus:border-primary h-12" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-gray-700">성별</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex space-x-4"
                        >
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="male" />
                            </FormControl>
                            <FormLabel className="font-normal text-gray-700">남</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="female" />
                            </FormControl>
                            <FormLabel className="font-normal text-gray-700">여</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="major"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">학과 (부/복수전공 포함)</FormLabel>
                      <FormControl>
                        <Input placeholder="" className="bg-white border-gray-200 focus:border-primary h-12" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="studentNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">학번</FormLabel>
                      <FormControl>
                        <Input placeholder="" className="bg-white border-gray-200 focus:border-primary h-12" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="grade"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">학년</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white border-gray-200 focus:border-primary h-12">
                            <SelectValue placeholder="학년을 선택해주세요" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-white">
                          <SelectItem value="1학년">1학년</SelectItem>
                          <SelectItem value="2학년">2학년</SelectItem>
                          <SelectItem value="3학년">3학년</SelectItem>
                          <SelectItem value="4학년">4학년</SelectItem>
                          <SelectItem value="5학년 이상">5학년 이상</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">연락처</FormLabel>
                      <FormControl>
                        <Input placeholder="010-1234-5678" className="bg-white border-gray-200 focus:border-primary h-12" {...field} />
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
                      <FormLabel className="text-gray-700">이메일</FormLabel>
                      <FormControl>
                        <Input placeholder="" className="bg-white border-gray-200 focus:border-primary h-12" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        {/* Q1: Self Introduction & Motivation */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <Card className="glass-panel border-0 shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-orange-50 to-white p-6 border-b border-orange-100">
              <CardTitle className="text-xl md:text-2xl font-bold flex items-center text-gray-900">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 text-sm font-black">1</span>
                자기소개 및 지원 동기
              </CardTitle>
            </div>
            <CardContent className="p-6 md:p-8 space-y-6">
              <FormField
                control={form.control}
                name="selfIntroduction"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-900 font-semibold text-base">자기소개와 멋쟁이사자처럼 14기에 지원하게 된 동기를 작성해 주세요.</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="자유롭게 본인을 소개하고 지원 동기를 들려주세요."
                        className="min-h-[200px] resize-none bg-gray-50/50 border-gray-200 focus:bg-white focus:border-primary focus:ring-primary transition-all rounded-xl p-4"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
        </motion.div>

        {/* Q2: AI Tool Experience */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <Card className="glass-panel border-0 shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-orange-50 to-white p-6 border-b border-orange-100">
              <CardTitle className="text-xl md:text-2xl font-bold flex items-center text-gray-900">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 text-sm font-black">2</span>
                AI 툴 활용 경험
              </CardTitle>
            </div>
            <CardContent className="p-6 md:p-8 space-y-6">
              <FormField
                control={form.control}
                name="aiToolExperience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-900 font-semibold text-base">평소 ChatGPT, Gemini 등 생성형 AI를 어떤 식으로 활용하고 있는지 본인만의 구체적인 사례를 들려주세요.</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="구체적인 활용 사례와 경험을 작성해주세요."
                        className="min-h-[200px] resize-none bg-gray-50/50 border-gray-200 focus:bg-white focus:border-primary focus:ring-primary transition-all rounded-xl p-4"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
        </motion.div>

        {/* Q3: Activity Goals */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <Card className="glass-panel border-0 shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-orange-50 to-white p-6 border-b border-orange-100">
              <CardTitle className="text-xl md:text-2xl font-bold flex items-center text-gray-900">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 text-sm font-black">3</span>
                활동 목표 및 서비스 아이디어
              </CardTitle>
            </div>
            <CardContent className="p-6 md:p-8 space-y-6">
              <FormField
                control={form.control}
                name="activityGoals"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-900 font-semibold text-base">이번 활동을 통해 본인이 달성하고자 하는 목표와 직접 만들어보고 싶은 서비스 아이디어를 적어주세요.</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="달성하고 싶은 목표와 서비스 아이디어를 자유롭게 작성해주세요."
                        className="min-h-[200px] resize-none bg-gray-50/50 border-gray-200 focus:bg-white focus:border-primary focus:ring-primary transition-all rounded-xl p-4"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
        </motion.div>

        {/* Q4: Track Selection */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <Card className="glass-panel border-0 shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-orange-50 to-white p-6 border-b border-orange-100">
              <CardTitle className="text-xl md:text-2xl font-bold flex items-center text-gray-900">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 text-sm font-black">4</span>
                트랙 선택 이유 및 열정
              </CardTitle>
              <CardDescription className="text-gray-500 mt-2 ml-11">
                지원하신 트랙을 선택하고, 선택한 이유와 활동에 임하는 각오를 적어주세요.
              </CardDescription>
            </div>
            <CardContent className="p-6 md:p-8 space-y-8">
              <FormField
                control={form.control}
                name="part"
                render={({ field }) => (
                  <FormItem className="space-y-4">
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      >
                        {[
                          { value: "plan_design", label: "기획/디자인", icon: MessageSquare, desc: "서비스 기획 및 UI/UX 디자인" },
                          { value: "frontend", label: "프론트엔드", icon: Code, desc: "웹 클라이언트 개발" },
                          { value: "backend", label: "백엔드", icon: Server, desc: "서버 및 인프라 구축" },
                        ].map((item) => (
                          <FormItem key={item.value} className="space-y-0">
                            <FormControl>
                              <RadioGroupItem value={item.value} className="peer sr-only" />
                            </FormControl>
                            <FormLabel className="flex items-center p-4 border-2 border-gray-100 rounded-xl cursor-pointer transition-all hover:bg-orange-50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-orange-50/50">
                              <div className={cn(
                                "w-10 h-10 rounded-lg flex items-center justify-center mr-4 transition-colors",
                                field.value === item.value ? "bg-primary text-white" : "bg-gray-100 text-gray-400"
                              )}>
                                <item.icon size={20} />
                              </div>
                              <div className="flex-1">
                                <div className="font-bold text-gray-900">{item.label}</div>
                                <div className="text-xs text-gray-500">{item.desc}</div>
                              </div>
                              <div className={cn(
                                "w-4 h-4 rounded-full border-2 flex items-center justify-center",
                                field.value === item.value ? "border-primary" : "border-gray-300"
                              )}>
                                {field.value === item.value && <div className="w-2 h-2 rounded-full bg-primary" />}
                              </div>
                            </FormLabel>
                          </FormItem>
                        ))}
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
                    <FormLabel className="text-gray-900 font-semibold text-base">트랙 선택 이유와 매주 활동에 어느 정도의 시간을 할애할 수 있는지 솔직하게 적어주세요.</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="이 파트를 선택한 이유와 활동 가능 시간을 작성해주세요."
                        className="min-h-[150px] resize-none bg-gray-50/50 border-gray-200 focus:bg-white focus:border-primary focus:ring-primary transition-all rounded-xl p-4"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
        </motion.div>

        {/* Q5: Collaboration */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <Card className="glass-panel border-0 shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-orange-50 to-white p-6 border-b border-orange-100">
              <CardTitle className="text-xl md:text-2xl font-bold flex items-center text-gray-900">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 text-sm font-black">5</span>
                협업 및 소통 역량
              </CardTitle>
            </div>
            <CardContent className="p-6 md:p-8 space-y-6">
              <FormField
                control={form.control}
                name="collaborationEssay"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-900 font-semibold text-base">팀 프로젝트나 단체 활동 중 의견 차이가 생겼을 때, 본인만의 방식으로 문제를 해결했던 구체적인 경험을 들려주세요.</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="구체적인 상황, 본인의 행동, 그리고 결과를 포함하여 작성해주세요."
                        className="min-h-[200px] resize-none bg-gray-50/50 border-gray-200 focus:bg-white focus:border-primary focus:ring-primary transition-all rounded-xl p-4"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
        </motion.div>

        {/* Q6: Coding Experience */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <Card className="glass-panel border-0 shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-orange-50 to-white p-6 border-b border-orange-100">
              <CardTitle className="text-xl md:text-2xl font-bold flex items-center text-gray-900">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 text-sm font-black">6</span>
                코딩 및 결과물 제작 경험
              </CardTitle>
            </div>
            <CardContent className="p-6 md:p-8 space-y-6">
              <FormField
                control={form.control}
                name="codingExperience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-900 font-semibold text-base">코딩을 통해 목표한 결과물을 제작한 경험이 있다면 기술해 주시고, 없다면 배우기 위해 어떤 노력을 해왔는지 작성해 주세요.</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="프로젝트 경험 또는 학습 노력에 대해 작성해주세요."
                        className="min-h-[200px] resize-none bg-gray-50/50 border-gray-200 focus:bg-white focus:border-primary focus:ring-primary transition-all rounded-xl p-4"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
        </motion.div>

        {/* Q7: Portfolio (Optional) */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <Card className="glass-panel border-0 shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-orange-50 to-white p-6 border-b border-orange-100">
              <CardTitle className="text-xl md:text-2xl font-bold flex items-center text-gray-900">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 text-sm font-black">7</span>
                [선택] 기술 스택 및 증빙 자료
              </CardTitle>
            </div>
            <CardContent className="p-6 md:p-8 space-y-6">
              <FormField
                control={form.control}
                name="portfolio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-900 font-semibold text-base">사용해 본 툴(기술)을 적어주시거나, 본인의 노력을 시각적으로 보여줄 수 있는 자료(포트폴리오, 깃허브 등)가 있다면 자유롭게 첨부해 주세요.</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={`Github 주소, 포트폴리오 링크, 또는 사용 가능한 기술 스택을 작성해주세요.\n ex) https://github.com/likelion/likelion-14th, Figma, Python, Java, C`}
                        className="min-h-[150px] resize-none bg-gray-50/50 border-gray-200 focus:bg-white focus:border-primary focus:ring-primary transition-all rounded-xl p-4"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
        </motion.div>

        {submitResult && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "p-4 rounded-xl text-center font-medium",
              submitResult.success
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-700 border border-red-200"
            )}
          >
            {submitResult.message}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="sticky bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-gray-200 shadow-lg z-50 flex justify-center -mx-4 md:static md:bg-transparent md:border-t-0 md:shadow-none md:p-0 md:mx-0"
        >
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full md:w-auto md:min-w-[300px] h-14 text-xl font-bold bg-gradient-to-r from-[#FF9E0B] to-[#FF5F0B] hover:shadow-lg hover:shadow-orange-500/30 transition-all rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                제출 중...
                <svg className="ml-2 w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                  <path d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" fill="currentColor" className="opacity-75" />
                </svg>
              </>
            ) : (
              <>
                지원서 제출하기 <Rocket className="ml-2 w-5 h-5" />
              </>
            )}
          </Button>
        </motion.div>
      </form>
    </Form>
  );
}
