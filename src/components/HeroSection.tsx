import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const slides = [
  {
    badge: 'Đổi mới - Sáng tạo - Phát triển',
    title: 'Viện Công nghệ TUMIKI',
    description: 'Đơn vị nghiên cứu và phát triển công nghệ hàng đầu, tiên phong trong việc ứng dụng khoa học công nghệ vào thực tiễn',
    stats: [
      { value: '500+', label: 'Dự án hoàn thành' },
      { value: '50+', label: 'Đối tác chiến lược' },
      { value: '15+', label: 'Năm kinh nghiệm' },
    ],
    cardBadge: 'Nghiên cứu khoa học',
    cardTitle: 'Nghiên cứu và phát triển công nghệ tiên tiến',
    cardInfo: '100+ nhà khoa học',
    cardImage: 'https://images.unsplash.com/photo-1669101602104-bfa264a17cce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwcmVzZWFyY2glMjBsYWJvcmF0b3J5fGVufDF8fHx8MTc2MTU1NjAyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    floatingBadge: { value: '98%', label: 'Khách hàng hài lòng' },
  },
  {
    badge: 'Công nghệ AI & IoT',
    title: 'Giải pháp thông minh cho tương lai',
    description: 'Nghiên cứu và triển khai các giải pháp AI, IoT, và tự động hóa thông minh phục vụ nhu cầu chuyển đổi số',
    stats: [
      { value: '200+', label: 'Dự án AI' },
      { value: '100+', label: 'Thiết bị IoT' },
      { value: '10+', label: 'Bằng sáng chế' },
    ],
    cardBadge: 'Robotics & AI',
    cardTitle: 'Tự động hóa và trí tuệ nhân tạo',
    cardInfo: '50+ chuyên gia AI',
    cardImage: 'https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGF1dG9tYXRpb258ZW58MXx8fHwxNzYxNDcwMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    floatingBadge: { value: '95%', label: 'Độ chính xác AI' },
  },
  {
    badge: 'Chuyển đổi số',
    title: 'Đồng hành cùng doanh nghiệp',
    description: 'Tư vấn và triển khai giải pháp chuyển đổi số toàn diện, giúp doanh nghiệp tối ưu hoạt động và tăng trưởng bền vững',
    stats: [
      { value: '300+', label: 'Doanh nghiệp' },
      { value: '25+', label: 'Ngành nghề' },
      { value: '20+', label: 'Thành phố' },
    ],
    cardBadge: 'Digital Transformation',
    cardTitle: 'Giải pháp chuyển đổi số doanh nghiệp',
    cardInfo: '80+ chuyên gia tư vấn',
    cardImage: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjE0NTA3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    floatingBadge: { value: '150%', label: 'Tăng hiệu suất' },
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  const slide = slides[currentSlide];

  return (
    <section className="bg-gradient-to-r from-[#1e3a5f] to-[#007FC0] text-white py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 text-[rgb(255,255,255)]">
                  <span className="text-sm">{slide.badge}</span>
                </div>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl mb-8 text-white/90">
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-[#EE973C] hover:bg-[#d67f2a] text-white px-8 py-6">
                    Khám phá ngay
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20">
                  {slide.stats.map((stat, statIndex) => (
                    <div key={statIndex}>
                      <div className="text-3xl mb-2">{stat.value}</div>
                      <div className="text-sm text-white/70">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content - Image/Card */}
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-6 transform lg:translate-y-0">
                  <div className="aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={slide.cardImage}
                      alt={slide.cardTitle}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="inline-block bg-[#EE973C]/10 text-[#EE973C] px-3 py-1 rounded-full text-sm">
                      {slide.cardBadge}
                    </div>
                    <h3 className="text-gray-900 text-xl">
                      {slide.cardTitle}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <div className="w-5 h-5 bg-[#007FC0] rounded-full"></div>
                        <span>{slide.cardInfo}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all ${
                index === currentSlide
                  ? 'w-8 bg-white'
                  : 'w-3 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
