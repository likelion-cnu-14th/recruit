
'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { useState, useEffect } from 'react';

const activities = [
  {
    id: 1,
    title: "동아리 박람회",
    image: "/13th/0_동아리박람회.JPG",
    description: "새로운 부원들을 맞이하는 설레는 동아리 박람회"
  },
  {
    id: 2,
    title: "아이디어톤",
    image: "/13th/1_아이디어톤.png",
    description: "창의적인 아이디어를 발굴하고 공유하는 아이디어톤"
  },
  {
    id: 3,
    title: "해커톤",
    image: "/13th/2_해커톤.jpg",
    description: "밤새며 열정적으로 개발하는 멋쟁이사자처럼의 꽃"
  },
  {
    id: 4,
    title: "해커톤",
    image: "/13th/2-1_해커톤.png",
    description: "집중하며 코딩하는 해커톤 현장"
  },
  {
    id: 5,
    title: "우리동네 과학클럽",
    image: "/13th/3_과학클럽.png",
    description: "유성구청 지원사업 - IT 컨텐츠 전시회"
  },
   {
    id: 6,
    title: "우리동네 과학클럽",
    image: "/13th/3-1_과학클럽.png",
    description: "유성구청 지원사업 - IT 컨텐츠 전시회"
  },
  {
    id: 7,
    title: "AI 디지털 페스타",
    image: "/13th/4_유성구페스타.png",
    description: "유성구청 IT 부스 운영"
  },
  {
    id: 8,
    title: "AI 디지털 페스타",
    image: "/13th/4-1_유성구페스타.png",
    description: "유성구청 IT 부스 운영"
  },
  {
    id: 9,
    title: "창업 동아리 네트워킹",
    image: "/13th/5-1_창업동아리모임.png",
    description: "창업에 대한 열정을 나누고 성장하는 모임"
  },
  {
    id: 10,
    title: "창업 동아리 네트워킹",
    image: "/13th/5-2_창업동아리모임.png",
    description: "다양한 아이디어가 오가는 네트워킹 시간"
  }
];

// Duplicate items for infinite scroll illusion
const duplicatedActivities = [...activities, ...activities];

export default function ActivityGallery() {
  const controls = useAnimationControls();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Start the animation
    const startAnimation = () => {
      controls.start({
        x: "-50%",
        transition: {
          duration: 80, // Speed of the scroll (adjust as needed)
          ease: "linear",
          repeat: Infinity,
        },
      });
    };
    startAnimation();
  }, [controls]);

  // Pause on hover
   useEffect(() => {
    if (isHovered) {
      controls.stop();
    } else {
      controls.start({
        x: "-50%",
        transition: {
            duration: 80,
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
          animate={controls}
          initial={{ x: 0 }}
           style={{ width: "max-content" }}
        >
          {duplicatedActivities.map((activity, index) => (
            <div 
              key={`${activity.id}-${index}`} 
              className="relative h-[300px] md:h-[400px] shrink-0 rounded-lg overflow-hidden shadow-xl bg-white group border border-gray-100"
            >
              {/* Image with w-auto to preserve aspect ratio */}
                  <img 
                    src={activity.image} 
                    alt={activity.title} 
                    className="h-full w-auto max-w-none object-contain group-hover:scale-105 transition-transform duration-700" 
                  />

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 whitespace-nowrap">
                  {activity.title}
                </h3>
                <p className="text-white/90 text-lg translate-y-6 group-hover:translate-y-0 transition-transform duration-500 delay-75 whitespace-nowrap">
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
