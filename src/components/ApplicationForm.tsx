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
      partReason: "",
      collaborationExperience: [],
      collaborationEssay: "",
      motivationGoals: [],
      motivationEssay: "",
      name: "",
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
                        <Input placeholder="홍길동" className="bg-white border-gray-200 focus:border-primary h-12" {...field} />
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
                      <FormLabel className="text-gray-700">학과</FormLabel>
                      <FormControl>
                        <Input placeholder="컴퓨터공학과" className="bg-white border-gray-200 focus:border-primary h-12" {...field} />
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
                        <Input placeholder="202400000" className="bg-white border-gray-200 focus:border-primary h-12" {...field} />
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
                      <FormControl>
                        <Input placeholder="3학년" className="bg-white border-gray-200 focus:border-primary h-12" {...field} />
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
                      <FormLabel className="text-gray-700">연락처</FormLabel>
                      <FormControl>
                        <Input placeholder="010-0000-0000" className="bg-white border-gray-200 focus:border-primary h-12" {...field} />
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
                        <Input placeholder="name@example.com" className="bg-white border-gray-200 focus:border-primary h-12" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        {/* Section 2: Part Selection */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <Card className="glass-panel border-0 shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-orange-50 to-white p-6 border-b border-orange-100">
              <CardTitle className="text-xl md:text-2xl font-bold flex items-center text-gray-900">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 text-sm font-black">2</span>
                활동 희망 파트
              </CardTitle>
              <CardDescription className="text-gray-500 mt-2 ml-11">
                가장 열정적으로 참여할 수 있는 파트를 선택해주세요.
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
                    <FormLabel className="text-gray-900 font-semibold text-base">선택 이유 및 성장 기대 (500자 이내)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="이 파트를 선택한 이유와 활동을 통해 얻고 싶은 성장에 대해 이야기해주세요."
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

        {/* Section 3: Collaboration */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <Card className="glass-panel border-0 shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-orange-50 to-white p-6 border-b border-orange-100">
              <CardTitle className="text-xl md:text-2xl font-bold flex items-center text-gray-900">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 text-sm font-black">3</span>
                협업 경험
              </CardTitle>
            </div>
            <CardContent className="p-6 md:p-8 space-y-8">
              <FormField
                control={form.control}
                name="collaborationExperience"
                render={() => (
                  <FormItem>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { id: "club_member", label: "동아리/커뮤니티 부원 활동" },
                        { id: "club_lead", label: "동아리/커뮤니티 운영 활동" },
                        { id: "study", label: "스터디/학회 참여" },
                        { id: "tutoring", label: "과외/멘토링 경험" },
                      ].map((item) => (
                        <FormField
                          key={item.id}
                          control={form.control}
                          name="collaborationExperience"
                          render={({ field }) => {
                            const isChecked = field.value?.includes(item.id);
                            return (
                              <FormItem key={item.id} className="space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={isChecked}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, item.id])
                                        : field.onChange(field.value?.filter((value) => value !== item.id));
                                    }}
                                    className="peer sr-only"
                                  />
                                </FormControl>
                                <FormLabel className={cn(
                                  "flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all hover:bg-orange-50",
                                  isChecked ? "border-primary bg-orange-50/50" : "border-gray-100 bg-white"
                                )}>
                                  <div className={cn(
                                    "w-5 h-5 rounded border mr-3 flex items-center justify-center transition-colors",
                                    isChecked ? "bg-primary border-primary text-white" : "border-gray-300"
                                  )}>
                                    {isChecked && <CheckCircle2 size={14} />}
                                  </div>
                                  <span className={cn("font-medium", isChecked ? "text-primary" : "text-gray-600")}>
                                    {item.label}
                                  </span>
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="collaborationEssay"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-900 font-semibold text-base">협업 경험 에세이 (500자 이내)</FormLabel>
                    <p className="text-sm text-gray-500 mb-3">협업 과정에서의 역할과 배운 점을 멋쟁이사자처럼 활동에 어떻게 적용할 수 있을까요?</p>
                    <FormControl>
                      <Textarea
                        placeholder="구체적인 경험을 바탕으로 작성해주세요."
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

        {/* Section 4: Motivation */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <Card className="glass-panel border-0 shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-orange-50 to-white p-6 border-b border-orange-100">
              <CardTitle className="text-xl md:text-2xl font-bold flex items-center text-gray-900">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 text-sm font-black">4</span>
                지원 동기 및 목표
              </CardTitle>
            </div>
            <CardContent className="p-6 md:p-8 space-y-8">
              <FormField
                control={form.control}
                name="motivationGoals"
                render={() => (
                  <FormItem>
                    <FormLabel className="text-gray-900 font-semibold mb-4 block">얻어가고 싶은 가치 (최대 2개 선택)</FormLabel>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {[
                        { id: "service", label: "나만의 서비스 제작" },
                        { id: "community", label: "개발자 커뮤니티" },
                        { id: "hackathon", label: "해커톤 경험" },
                        { id: "portfolio", label: "포트폴리오 완성" },
                        { id: "startup", label: "창업 도전" },
                        { id: "network", label: "전국 네트워크" },
                      ].map((item) => (
                        <FormField
                          key={item.id}
                          control={form.control}
                          name="motivationGoals"
                          render={({ field }) => {
                            const isChecked = field.value?.includes(item.id);
                            return (
                              <FormItem key={item.id} className="space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={isChecked}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, item.id])
                                        : field.onChange(field.value?.filter((value) => value !== item.id));
                                    }}
                                    className="peer sr-only"
                                  />
                                </FormControl>
                                <FormLabel className={cn(
                                  "flex flex-col items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition-all hover:bg-orange-50 h-full text-center",
                                  isChecked ? "border-primary bg-orange-50/50" : "border-gray-100 bg-white"
                                )}>
                                  <span className={cn("font-bold transition-colors", isChecked ? "text-primary" : "text-gray-600")}>
                                    {item.label}
                                  </span>
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="motivationEssay"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-900 font-semibold text-base">지원 동기 에세이</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="진정성 있는 이야기를 들려주세요."
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
