import { ChevronRight, Microscope, Package, Users, ArrowRight } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const fields = [
  {
    id: 'research',
    icon: Microscope,
    title: 'Nghiên cứu khoa học',
    description: 'Nghiên cứu và phát triển các công nghệ tiên tiến trong lĩnh vực AI, IoT, và Blockchain. Bao gồm dự án nghiên cứu, lĩnh vực nghiên cứu chuyên sâu và sáng chế công nghệ.',
    link: '/fields/research',
    color: '#EE973C',
    image: 'https://images.unsplash.com/photo-1760493828288-d2dbb70d18c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbnRpZmljJTIwcmVzZWFyY2glMjBsYWJvcmF0b3J5fGVufDF8fHx8MTc2MTU1NzcwMnww&ixlib=rb-4.1.0&q=80&w=1080',
    highlights: ['50+ Dự án nghiên cứu', '6 Lĩnh vực chuyên sâu', '35+ Bằng sáng chế', '100+ Công bố khoa học'],
  },
  {
    id: 'products',
    icon: Package,
    title: 'Sản phẩm công nghệ',
    description: 'Phát triển và triển khai các giải pháp công nghệ ứng dụng thực tế cho doanh nghiệp và tổ chức',
    link: '/fields/products',
    color: '#007FC0',
    image: 'https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMHBsYXRmb3JtJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2MjE0Njc0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    highlights: ['25+ Sản phẩm', '1000+ Người dùng', '98% Hài lòng', '15+ Đối tác'],
  },
  {
    id: 'consulting',
    icon: Users,
    title: 'Dịch vụ tư vấn',
    description: 'Tư vấn chuyển đổi số, giải pháp công nghệ và chiến lược phát triển cho doanh nghiệp và tổ chức',
    link: '/fields/consulting',
    color: '#EE973C',
    image: 'https://images.unsplash.com/photo-1758519289152-d64650d13c7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdWx0aW5nJTIwbWVldGluZyUyMGJ1c2luZXNzfGVufDF8fHx8MTc2MTU1NzcwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    highlights: ['50+ Dự án tư vấn', '30+ Đối tác', '5 Năm kinh nghiệm', '95% Hài lòng'],
  },
];

const stats = [
  { number: '3', label: 'Lĩnh vực hoạt động', color: '#EE973C' },
  { number: '100+', label: 'Dự án thành công', color: '#007FC0' },
  { number: '50+', label: 'Đối tác chiến lược', color: '#EE973C' },
  { number: '200+', label: 'Chuyên gia', color: '#007FC0' },
];

export function FieldsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1e3a5f] to-[#007FC0] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-6 text-white/80">
            <a href="/" className="hover:text-white transition-colors">Trang chủ</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Lĩnh vực hoạt động</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl mb-4">Lĩnh vực hoạt động</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Khám phá các lĩnh vực hoạt động chính của TUMIKI, từ nghiên cứu khoa học đến sản phẩm công nghệ và dịch vụ tư vấn
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-[#EE973C]/10 text-[#EE973C] px-4 py-2 rounded-full mb-4">
              Tổng quan
            </div>
            <h2 className="text-3xl lg:text-4xl mb-6">
              Đa dạng lĩnh vực, Chuyên sâu công nghệ
            </h2>
            <p className="text-gray-600 text-lg">
              Viện Công nghệ TUMIKI hoạt động trong nhiều lĩnh vực công nghệ tiên tiến, 
              từ nghiên cứu cơ bản đến ứng dụng thực tiễn, nhằm mang lại giá trị cho cộng đồng và doanh nghiệp.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

      {/* Fields Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {fields.map((field, index) => {
              const Icon = field.icon;
              const isEven = index % 2 === 0;
              
              return (
                <Card key={field.id} className="overflow-hidden hover:shadow-2xl transition-all">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                    {/* Image */}
                    <div className={`${!isEven ? 'lg:col-start-2' : ''}`}>
                      <div className="aspect-[4/3] lg:aspect-auto lg:h-full">
                        <ImageWithFallback
                          src={field.image}
                          alt={field.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                        style={{ backgroundColor: `${field.color}15` }}
                      >
                        <Icon className="w-8 h-8" style={{ color: field.color }} />
                      </div>
                      
                      <h3 className="text-3xl mb-4">{field.title}</h3>
                      <p className="text-gray-600 mb-6 text-lg">
                        {field.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-3 mb-8">
                        {field.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div 
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: field.color }}
                            />
                            <span className="text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      <Link to={field.link}>
                        <Button 
                          className="group"
                          style={{ 
                            backgroundColor: field.color,
                            color: 'white',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.opacity = '0.9';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.opacity = '1';
                          }}
                        >
                          Tìm hiểu thêm
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1e3a5f] to-[#007FC0] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl mb-6">
            Sẵn sàng hợp tác cùng TUMIKI?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Hãy liên hệ với chúng tôi để khám phá cơ hội hợp tác trong các lĩnh vực công nghệ tiên tiến
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-[#EE973C] hover:bg-[#d67f2a] text-white">
                Liên hệ ngay
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/partners">
              <Button size="lg" variant="outline" className="bg-white text-[#007FC0] hover:bg-gray-100">
                Xem đối tác
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
