import { ChevronRight, Target, Users, Briefcase, Award, Check } from 'lucide-react';
import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const organizationStructure = [
  {
    title: 'Ban Giám đốc',
    description: 'Điều hành và quản lý toàn bộ hoạt động của viện',
    icon: Briefcase,
    color: '#EE973C',
  },
  {
    title: 'Phòng Nghiên cứu & Phát triển',
    description: 'Nghiên cứu và phát triển các giải pháp công nghệ mới',
    icon: Target,
    color: '#007FC0',
  },
  {
    title: 'Phòng Sản phẩm & Dịch vụ',
    description: 'Triển khai sản phẩm và cung cấp dịch vụ cho khách hàng',
    icon: Award,
    color: '#EE973C',
  },
  {
    title: 'Phòng Hành chính - Nhân sự',
    description: 'Quản lý nguồn nhân lực và hỗ trợ hành chính',
    icon: Users,
    color: '#007FC0',
  },
];

const functions = [
  'Nghiên cứu, phát triển các công nghệ tiên tiến trong lĩnh vực AI, IoT, Big Data',
  'Xây dựng và triển khai các sản phẩm công nghệ phục vụ nhu cầu thực tế',
  'Tư vấn chuyển đổi số cho doanh nghiệp và tổ chức',
  'Đào tạo và phát triển nguồn nhân lực công nghệ chất lượng cao',
  'Hợp tác quốc tế trong nghiên cứu và chuyển giao công nghệ',
  'Đăng ký và bảo hộ sáng chế, giải pháp hữu ích',
];

const values = [
  {
    title: 'Đổi mới',
    description: 'Luôn tiên phong trong việc nghiên cứu và ứng dụng công nghệ mới',
  },
  {
    title: 'Chất lượng',
    description: 'Cam kết cung cấp sản phẩm và dịch vụ chất lượng cao nhất',
  },
  {
    title: 'Hợp tác',
    description: 'Xây dựng mối quan hệ đối tác bền vững và cùng phát triển',
  },
  {
    title: 'Bền vững',
    description: 'Phát triển công nghệ hướng tới tương lai bền vững',
  },
];

export function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Breadcrumb */}
      <section className="bg-gradient-to-r from-[#1e3a5f] to-[#007FC0] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-6 text-white/80">
            <a href="/" className="hover:text-white transition-colors">Trang chủ</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Về chúng tôi</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl mb-4">Về chúng tôi</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Viện Công nghệ TUMIKI - Đơn vị tiên phong trong nghiên cứu và phát triển công nghệ
          </p>
        </div>
      </section>

      {/* Giới thiệu chung */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#EE973C]/10 text-[#EE973C] px-4 py-2 rounded-full mb-4">
                Giới thiệu chung
              </div>
              <h2 className="text-3xl lg:text-4xl mb-6">
                Viện Công nghệ TUMIKI
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Viện Công nghệ TUMIKI được thành lập với sứ mệnh trở thành đơn vị hàng đầu trong nghiên cứu, phát triển và ứng dụng công nghệ tiên tiến tại Việt Nam.
                </p>
                <p>
                  Với đội ngũ hơn 100 chuyên gia, nhà khoa học có trình độ cao và kinh nghiệm dày dặn, chúng tôi tập trung vào các lĩnh vực công nghệ mũi nhọn như Trí tuệ nhân tạo (AI), Internet vạn vật (IoT), Blockchain, và Chuyển đổi số.
                </p>
                <p>
                  TUMIKI không chỉ là nơi nghiên cứu khoa học mà còn là cầu nối giữa công nghệ và thực tiễn, giúp doanh nghiệp và tổ chức tận dụng tối đa sức mạnh của công nghệ để phát triển bền vững.
                </p>
              </div>

              {/* Core Values */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {values.map((value, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-[#007FC0] mb-2">{value.title}</h4>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2MTQ1MDE3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="TUMIKI Team"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Stats overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border-t-4 border-t-[#EE973C]">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl text-[#007FC0] mb-1">15+</div>
                    <div className="text-sm text-gray-600">Năm kinh nghiệm</div>
                  </div>
                  <div>
                    <div className="text-3xl text-[#EE973C] mb-1">500+</div>
                    <div className="text-sm text-gray-600">Dự án thành công</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cơ cấu tổ chức */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#007FC0]/10 text-[#007FC0] px-4 py-2 rounded-full mb-4">
              Cơ cấu tổ chức
            </div>
            <h2 className="text-3xl lg:text-4xl mb-4">
              Cấu trúc tổ chức của TUMIKI
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tổ chức theo mô hình hiện đại, linh hoạt và hiệu quả
            </p>
          </div>

          {/* Organization Chart */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-t-[#EE973C]">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#EE973C] to-[#007FC0] rounded-full mb-3">
                  <Briefcase className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl">Ban Giám đốc</h3>
                <p className="text-sm text-gray-600">Lãnh đạo và điều hành</p>
              </div>
              
              <div className="h-8 w-px bg-gray-300 mx-auto"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {organizationStructure.slice(1).map((dept, index) => {
                  const Icon = dept.icon;
                  return (
                    <div key={index} className="relative">
                      {index === 1 && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 w-full h-8 hidden md:block">
                          <div className="h-full w-px bg-gray-300 mx-auto"></div>
                        </div>
                      )}
                      <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                        <div 
                          className="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: `${dept.color}15` }}
                        >
                          <Icon className="w-8 h-8" style={{ color: dept.color }} />
                        </div>
                        <h4 className="mb-2">{dept.title}</h4>
                        <p className="text-sm text-gray-600">{dept.description}</p>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Organization Image */}
          <div className="aspect-video rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1703355685626-57abd3bfbd95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZyUyMG1vZGVybnxlbnwxfHx8fDE3NjE1MjkxNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="TUMIKI Office"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Chức năng nhiệm vụ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1607110654203-d5665bd64105?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXNzaW9uJTIwdmlzaW9uJTIwZ29hbHN8ZW58MXx8fHwxNzYxNTU2NTk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Mission & Vision"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-block bg-[#EE973C]/10 text-[#EE973C] px-4 py-2 rounded-full mb-4">
                Chức năng nhiệm vụ
              </div>
              <h2 className="text-3xl lg:text-4xl mb-6">
                Sứ mệnh và trách nhiệm
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                TUMIKI cam kết đóng góp vào sự phát triển của xã hội thông qua việc nghiên cứu và ứng dụng công nghệ. Chúng tôi thực hiện các chức năng chính sau:
              </p>

              <div className="space-y-4">
                {functions.map((func, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#007FC0]/10 rounded-full flex items-center justify-center mt-0.5 group-hover:bg-[#007FC0] transition-colors">
                      <Check className="w-4 h-4 text-[#007FC0] group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{func}</p>
                  </div>
                ))}
              </div>

              {/* Vision & Mission Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <Card className="p-6 bg-gradient-to-br from-[#EE973C]/5 to-[#EE973C]/10 border-l-4 border-l-[#EE973C]">
                  <h4 className="text-[#EE973C] mb-2">Tầm nhìn</h4>
                  <p className="text-sm text-gray-600">
                    Trở thành viện công nghệ hàng đầu khu vực châu Á
                  </p>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-[#007FC0]/5 to-[#007FC0]/10 border-l-4 border-l-[#007FC0]">
                  <h4 className="text-[#007FC0] mb-2">Sứ mệnh</h4>
                  <p className="text-sm text-gray-600">
                    Ứng dụng công nghệ để tạo giá trị cho xã hội
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
