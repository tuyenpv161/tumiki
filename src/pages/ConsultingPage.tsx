import { ChevronRight, Users, Target, Zap, TrendingUp, CheckCircle, ArrowRight, Clock, Award } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const services = [
  {
    icon: Target,
    title: 'Tư vấn chuyển đổi số',
    description: 'Hỗ trợ doanh nghiệp xây dựng lộ trình chuyển đổi số toàn diện, từ chiến lược đến triển khai',
    color: '#EE973C',
    details: [
      'Đánh giá hiện trạng số hóa',
      'Xây dựng lộ trình chuyển đổi số',
      'Lựa chọn công nghệ phù hợp',
      'Quản lý dự án chuyển đổi số',
      'Đào tạo nhân sự',
    ],
    duration: '3-6 tháng',
    projects: '45+',
  },
  {
    icon: Zap,
    title: 'Tư vấn kiến trúc hệ thống',
    description: 'Thiết kế kiến trúc công nghệ hiện đại, scalable và bảo mật cho doanh nghiệp',
    color: '#007FC0',
    details: [
      'Kiến trúc Cloud & Microservices',
      'Tối ưu hóa hiệu suất',
      'Thiết kế hạ tầng bảo mật',
      'DevOps & CI/CD',
      'Disaster Recovery Planning',
    ],
    duration: '2-4 tháng',
    projects: '35+',
  },
  {
    icon: TrendingUp,
    title: 'Tư vấn AI & Data Analytics',
    description: 'Ứng dụng trí tuệ nhân tạo và phân tích dữ liệu để tối ưu hóa vận hành doanh nghiệp',
    color: '#EE973C',
    details: [
      'Chiến lược AI cho doanh nghiệp',
      'Xây dựng Data Warehouse',
      'Phân tích dự đoán (Predictive Analytics)',
      'Business Intelligence Dashboard',
      'Machine Learning Model Development',
    ],
    duration: '4-8 tháng',
    projects: '28+',
  },
  {
    icon: CheckCircle,
    title: 'Tư vấn an ninh mạng',
    description: 'Đánh giá và nâng cao an ninh mạng, bảo vệ tài sản số của doanh nghiệp',
    color: '#007FC0',
    details: [
      'Đánh giá lỗ hổng bảo mật',
      'Thiết kế kiến trúc bảo mật',
      'Penetration Testing',
      'Security Operation Center (SOC)',
      'Đào tạo nhận thức bảo mật',
    ],
    duration: '1-3 tháng',
    projects: '40+',
  },
];

const process = [
  {
    step: '01',
    title: 'Tìm hiểu nhu cầu',
    description: 'Gặp gỡ, trao đổi và phân tích nhu cầu của khách hàng',
    color: '#EE973C',
  },
  {
    step: '02',
    title: 'Đánh giá & Phân tích',
    description: 'Đánh giá hiện trạng và phân tích các yêu cầu kỹ thuật',
    color: '#007FC0',
  },
  {
    step: '03',
    title: 'Đề xuất giải pháp',
    description: 'Xây dựng và trình bày giải pháp chi tiết, lộ trình triển khai',
    color: '#EE973C',
  },
  {
    step: '04',
    title: 'Triển khai & Hỗ trợ',
    description: 'Triển khai giải pháp và hỗ trợ vận hành, bảo trì',
    color: '#007FC0',
  },
];

const industries = [
  {
    name: 'Tài chính & Ngân hàng',
    icon: '💰',
    projects: 15,
    color: '#EE973C',
  },
  {
    name: 'Y tế & Chăm sóc sức khỏe',
    icon: '🏥',
    projects: 12,
    color: '#007FC0',
  },
  {
    name: 'Bán lẻ & Thương mại điện tử',
    icon: '🛒',
    projects: 18,
    color: '#EE973C',
  },
  {
    name: 'Sản xuất & Công nghiệp',
    icon: '🏭',
    projects: 10,
    color: '#007FC0',
  },
  {
    name: 'Giáo dục & Đào tạo',
    icon: '📚',
    projects: 14,
    color: '#EE973C',
  },
  {
    name: 'Chính phủ & Công quyền',
    icon: '🏛️',
    projects: 8,
    color: '#007FC0',
  },
];

const testimonials = [
  {
    quote: 'TUMIKI đã giúp chúng tôi xây dựng lộ trình chuyển đổi số hiệu quả, tiết kiệm 40% chi phí vận hành.',
    author: 'Nguyễn Văn A',
    position: 'CTO, Công ty ABC',
    company: 'Tài chính',
    color: '#EE973C',
  },
  {
    quote: 'Đội ngũ tư vấn chuyên nghiệp, am hiểu sâu về công nghệ và quy trình kinh doanh.',
    author: 'Trần Thị B',
    position: 'CEO, Công ty XYZ',
    company: 'Y tế',
    color: '#007FC0',
  },
];

const stats = [
  { number: '150+', label: 'Dự án tư vấn', color: '#EE973C' },
  { number: '80+', label: 'Khách hàng', color: '#007FC0' },
  { number: '95%', label: 'Khách hàng hài lòng', color: '#EE973C' },
  { number: '7', label: 'Năm kinh nghiệm', color: '#007FC0' },
];

export function ConsultingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1e3a5f] to-[#007FC0] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-6 text-white/80">
            <a href="/" className="hover:text-white transition-colors">Trang chủ</a>
            <ChevronRight className="w-4 h-4" />
            <Link to="/fields" className="hover:text-white transition-colors">Lĩnh vực hoạt động</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Dịch vụ tư vấn</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-12 h-12" />
                <h1 className="text-4xl lg:text-5xl">Dịch vụ tư vấn</h1>
              </div>
              <p className="text-xl text-white/90 mb-6">
                Đồng hành cùng doanh nghiệp trong hành trình chuyển đổi số, 
                mang lại giá trị bền vững thông qua công nghệ
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/20 rounded-full">Chuyên gia giàu kinh nghiệm</span>
                <span className="px-4 py-2 bg-white/20 rounded-full">Giải pháp tối ưu</span>
                <span className="px-4 py-2 bg-white/20 rounded-full">Hỗ trợ tận tâm</span>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="aspect-square rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758519289152-d64650d13c7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdWx0aW5nJTIwbWVldGluZyUyMGJ1c2luZXNzfGVufDF8fHx8MTc2MTU1NzcwM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Consulting Services"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-2" style={{ color: stat.color }}>
                  {stat.number}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#EE973C]/10 text-[#EE973C] px-4 py-2 rounded-full mb-4">
              Dịch vụ của chúng tôi
            </div>
            <h2 className="text-3xl lg:text-4xl mb-4">
              Giải pháp tư vấn chuyên sâu
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Đội ngũ chuyên gia giàu kinh nghiệm sẵn sàng hỗ trợ doanh nghiệp trong mọi lĩnh vực công nghệ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-2xl transition-all group">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: service.color }} />
                  </div>
                  
                  <h3 className="text-2xl mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: service.color }} />
                        <span className="text-sm text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{service.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{service.projects} dự án</span>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#007FC0]/10 text-[#007FC0] px-4 py-2 rounded-full mb-4">
              Quy trình làm việc
            </div>
            <h2 className="text-3xl lg:text-4xl mb-4">
              Quy trình tư vấn chuyên nghiệp
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Phương pháp tiếp cận có hệ thống, đảm bảo hiệu quả và chất lượng dịch vụ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all relative">
                <div 
                  className="text-6xl opacity-10 absolute top-4 right-4"
                  style={{ color: item.color }}
                >
                  {item.step}
                </div>
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4 relative z-10"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <span className="text-xl" style={{ color: item.color }}>
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg mb-2 relative z-10">{item.title}</h3>
                <p className="text-sm text-gray-600 relative z-10">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#EE973C]/10 text-[#EE973C] px-4 py-2 rounded-full mb-4">
              Ngành hàng phục vụ
            </div>
            <h2 className="text-3xl lg:text-4xl mb-4">
              Đa dạng lĩnh vực
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chúng tôi có kinh nghiệm làm việc với nhiều ngành nghề khác nhau
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {industry.icon}
                </div>
                <h3 className="text-sm mb-2">{industry.name}</h3>
                <span 
                  className="text-xs px-2 py-1 rounded-full"
                  style={{ 
                    backgroundColor: `${industry.color}15`,
                    color: industry.color,
                  }}
                >
                  {industry.projects} dự án
                </span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#007FC0]/10 text-[#007FC0] px-4 py-2 rounded-full mb-4">
              Khách hàng nói gì
            </div>
            <h2 className="text-3xl lg:text-4xl mb-4">
              Đánh giá từ khách hàng
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                <div className="mb-6">
                  <div 
                    className="text-6xl mb-4"
                    style={{ color: testimonial.color }}
                  >
                    "
                  </div>
                  <p className="text-gray-700 text-lg italic">
                    {testimonial.quote}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl"
                    style={{ backgroundColor: testimonial.color }}
                  >
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <p className="text-xs text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1e3a5f] to-[#007FC0] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl mb-6">
            Bắt đầu dự án của bạn ngay hôm nay
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Liên hệ với chúng tôi để được tư vấn miễn phí về giải pháp công nghệ phù hợp nhất
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-[#EE973C] hover:bg-[#d67f2a] text-white">
                Đặt lịch tư vấn
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/fields/products">
              <Button size="lg" variant="outline" className="bg-white text-[#007FC0] hover:bg-gray-100">
                Xem sản phẩm
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
