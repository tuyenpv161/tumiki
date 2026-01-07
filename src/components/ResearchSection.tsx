import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowRight, Target, Users, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const researchProjects = [
  {
    category: 'AI & Machine Learning',
    title: 'Hệ thống AI phân tích dữ liệu y tế',
    description: 'Nghiên cứu và phát triển hệ thống AI hỗ trợ chẩn đoán bệnh dựa trên hình ảnh y khoa',
    image: 'https://images.unsplash.com/photo-1759866042499-d0b3e9d87ceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbnRpZmljJTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjE1NTYwMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    status: 'Đang triển khai',
  },
  {
    category: 'IoT',
    title: 'Smart City Solutions',
    description: 'Giải pháp thành phố thông minh với mạng lưới cảm biến IoT tiên tiến',
    image: 'https://images.unsplash.com/photo-1508361727343-ca787442dcd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MTQ3MzMwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    status: 'Hoàn thành',
  },
  {
    category: 'Blockchain',
    title: 'Hệ thống quản lý chuỗi cung ứng',
    description: 'Ứng dụng blockchain cho quản lý và truy xuất nguồn gốc sản phẩm',
    image: 'https://images.unsplash.com/photo-1669101602104-bfa264a17cce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwcmVzZWFyY2glMjBsYWJvcmF0b3J5fGVufDF8fHx8MTc2MTU1NjAyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    status: 'Nghiên cứu',
  },
];

const products = [
  {
    title: 'Platform quản lý dự án',
    description: 'Nền tảng quản lý dự án toàn diện với AI hỗ trợ lập kế hoạch',
    users: '1000+',
    rating: '4.8',
  },
  {
    title: 'Hệ thống ERP tích hợp',
    description: 'Giải pháp ERP linh hoạt cho doanh nghiệp vừa và nhỏ',
    users: '500+',
    rating: '4.9',
  },
  {
    title: 'Mobile App Framework',
    description: 'Framework phát triển ứng dụng di động đa nền tảng',
    users: '2000+',
    rating: '4.7',
  },
];

const aboutHighlights = [
  {
    icon: Target,
    title: 'Sứ mệnh',
    description: 'Trở thành đơn vị hàng đầu trong nghiên cứu và phát triển công nghệ tiên tiến tại Việt Nam',
    color: '#EE973C',
  },
  {
    icon: Users,
    title: 'Đội ngũ',
    description: 'Hơn 100 chuyên gia và nhà khoa học có trình độ cao với kinh nghiệm dày dặn',
    color: '#007FC0',
  },
  {
    icon: Award,
    title: 'Thành tựu',
    description: 'Nhiều giải thưởng và chứng nhận quốc tế về đổi mới sáng tạo và nghiên cứu',
    color: '#EE973C',
  },
];

export function ResearchSection() {
  return (
    <>
      {/* About Us Section */}
      <section className="py-20 bg-gradient-to-br from-[#007FC0] to-[#1e3a5f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-white/10 text-white px-4 py-2 rounded-full mb-4">
              Về chúng tôi
            </div>
            <h2 className="text-3xl lg:text-4xl mb-4">
              Viện Công nghệ TUMIKI
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Đơn vị tiên phong trong nghiên cứu, phát triển và ứng dụng công nghệ tiên tiến tại Việt Nam
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left - Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwd29ya2luZyUyMHRvZ2V0aGVyfGVufDF8fHx8MTc2MTU1NjAyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="TUMIKI Team"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>

            {/* Right - Description */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-white/90">
                Viện Công nghệ TUMIKI được thành lập với sứ mệnh trở thành đơn vị hàng đầu 
                trong nghiên cứu, phát triển và ứng dụng công nghệ tiên tiến tại Việt Nam.
              </p>
              <p className="text-lg leading-relaxed text-white/90">
                Với đội ngũ hơn 100 chuyên gia, nhà khoa học có trình độ cao và kinh nghiệm 
                dày dặn, chúng tôi tập trung vào các lĩnh vực công nghệ mũi nhọn như Trí tuệ 
                nhân tạo (AI), Internet vạn vật (IoT), Blockchain, và Chuyển đổi số.
              </p>
              <p className="text-lg leading-relaxed text-white/90">
                TUMIKI không chỉ là nơi nghiên cứu khoa học mà còn là cầu nối giữa công nghệ 
                và thực tiễn, giúp doanh nghiệp và tổ chức tận dụng tối đa sức mạnh của công 
                nghệ để phát triển bền vững.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutHighlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all">
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${highlight.color}30` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: highlight.color }} />
                  </div>
                  <h3 className="text-xl mb-3">{highlight.title}</h3>
                  <p className="text-white/80 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research & Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-[#007FC0]/10 text-[#007FC0] px-4 py-2 rounded-full mb-4">
              Nghiên cứu & Sản phẩm
            </div>
            <h2 className="text-3xl lg:text-4xl mb-4">
              Các dự án và sản phẩm nổi bật
            </h2>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="research" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="research">Dự án nghiên cứu</TabsTrigger>
              <TabsTrigger value="products">Sản phẩm</TabsTrigger>
            </TabsList>

            <TabsContent value="research">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {researchProjects.map((project, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer">
                    <div className="aspect-video overflow-hidden bg-gray-100">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary" className="bg-[#EE973C]/10 text-[#EE973C]">
                          {project.category}
                        </Badge>
                        <Badge variant="outline">{project.status}</Badge>
                      </div>
                      <h3 className="text-xl mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <button className="text-[#007FC0] flex items-center gap-2 hover:gap-3 transition-all">
                        Tìm hiểu thêm <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="products">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, index) => (
                  <Card key={index} className="p-6 hover:shadow-xl transition-shadow group cursor-pointer border-l-4 border-l-[#007FC0]">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#EE973C] to-[#007FC0] rounded-lg flex items-center justify-center">
                        <span className="text-white text-xl">P</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">★</span>
                        <span>{product.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-xl mb-2">{product.title}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-sm text-gray-500">{product.users} người dùng</span>
                      <button className="text-[#EE973C] flex items-center gap-2 hover:gap-3 transition-all">
                        Chi tiết <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
