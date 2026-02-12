
'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const activities = [
  {
    id: 1,
    title: "아이디어톤",
    image: "/images/activity-1.jpg", // User to replace
    description: "창의적인 아이디어를 발굴하고 공유하는 아이디어톤"
  },
  {
    id: 2,
    title: "해커톤",
    image: "/images/activity-2.jpg", // User to replace
    description: "밤새며 열정적으로 개발하는 멋쟁이사자처럼의 꽃, 해커톤"
  },
  {
    id: 3,
    title: "정기 세션",
    image: "/images/activity-3.jpg", // User to replace
    description: "매주 진행되는 파트별 스터디와 정기 세션"
  },
  {
    id: 4,
    title: "네트워킹 파티",
    image: "/images/activity-4.jpg", // User to replace
    description: "다양한 학교의 멋사 부원들과 교류하는 네트워킹"
  },
  {
    id: 5,
    title: "데모데이",
    image: "/images/activity-5.jpg", // User to replace
    description: "한 학기 동안 만든 프로젝트를 발표하는 데모데이"
  }
];

// Duplicate items for infinite scroll illusion
const duplicatedActivities = [...activities, ...activities];

export default function ActivityGallery() {
  const controls = useAnimationControls();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Start the animation
    controls.start({
      x: "-50%",
      transition: {
        duration: 30, // Speed of the scroll (adjust as needed)
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls]);

  // Pause on hover
   useEffect(() => {
    if (isHovered) {
      controls.stop();
    } else {
      controls.start({
        x: "-50%",
        transition: {
            duration: 30,
            ease: "linear",
            repeat: Infinity,
        }
      });
    }
  }, [isHovered, controls]);


  return (
    <section className="bg-orange-50/50 py-24 overflow-hidden w-full">
      {/* Title Container (Centered) */}
      <div className="container mx-auto px-4 mb-16 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-gradient mb-4">
          활동 갤러리
        </h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          지난 기수들의 뜨거운 열정이 담긴 활동 사진들을 만나보세요.
        </p>
      </div>

      {/* Full Width Slider */}
      <div 
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
          className="flex gap-6 w-max pl-4" // pl-4 to add a bit of initial padding
          animate={{ x: ["0%", "-50%"] }} // Move from 0 to -50% (half the width of the duplicated list)
          transition={{
            duration: 40, // Slower duration for smoother viewing
            ease: "linear",
            repeat: Infinity,
          }}
          // We don't use the simple animate prop here if we want pause control via state efficiently with useAnimationControls, 
          // but for simple cases, just CSS hover state or simple logic is enough.
          // Trying a simpler approach aligned with the request: "automatically move"
           style={{ width: "max-content" }}
        >
          {duplicatedActivities.map((activity, index) => (
            <div 
              key={`${activity.id}-${index}`} 
              className="min-w-[350px] md:min-w-[500px] h-[350px] md:h-[500px] relative rounded-3xl overflow-hidden shadow-xl bg-white group border border-gray-100"
            >
              {/* Placeholder Image Area */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-700">
                <span className="text-lg font-medium">이미지를 넣어주세요 ({activity.id})</span>
                 {/* 
                    사용법: 아래 주석을 해제하고 src에 실제 이미지 경로를 넣어주세요.
                    <img src={activity.image} alt={activity.title} className="w-full h-full object-cover" />
                  */}
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {activity.title}
                </h3>
                <p className="text-white/90 text-lg translate-y-6 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

         {/* Gradient Masks for Edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-orange-50/50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-orange-50/50 to-transparent z-10 pointer-events-none"></div>
      </div>
      
      <div className="mt-8 text-center text-gray-400 text-sm">
      </div>
    </section>
  );
}
