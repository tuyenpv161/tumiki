import { ChevronRight, Brain, Database, Shield, Cpu, Cloud, Network, ArrowRight } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const researchAreas = [
  {
    id: 'ai',
    icon: Brain,
    title: 'Cải tạo đất cát biển nguồn gốc San hô',
    description: 'Nghiên cứu và phát triển công nghệ cải tạo đất cát biển từ nguồn gốc san hô, tạo ra đất màu mỡ cho nông nghiệp bền vững',
    image: 'https://images.unsplash.com/photo-1657194287081-ef1cf8d6e72a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JhbCUyMGJlYWNoJTIwc2FuZCUyMHJlc3RvcmF0aW9ufGVufDF8fHx8MTc2MjE0NzkzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: '#EE973C',
    topics: [
      'Công nghệ cải tạo đất cát biển',
      'Nghiên cứu thành phần san hô',
      'Phát triển nông nghiệp bền vững',
      'Phục hồi hệ sinh thái ven biển',
      'Ứng dụng sinh học đất',
      'Quản lý tài nguyên biển',
    ],
    projects: 15,
    publications: 45,
    members: 20,
  },
  {
    id: 'data-science',
    icon: Database,
    title: 'Xử lý rác thải sinh hoạt',
    description: 'Nghiên cứu và phát triển công nghệ xử lý rác thải sinh hoạt hiện đại, bảo vệ môi trường và phát triển bền vững',
    image: 'https://images.unsplash.com/photo-1692800184439-8df73ea37e2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXN0ZSUyMHJlY3ljbGluZyUyMG1hbmFnZW1lbnR8ZW58MXx8fHwxNzYyMTQ4MTkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: '#007FC0',
    topics: [
      'Phân loại & tái chế rác thải',
      'Xử lý chất thải hữu cơ',
      'Công nghệ đốt rác phát điện',
      'Quản lý bãi chôn lấp',
      'Xử lý rác thải công nghiệp',
      'Công nghệ xử lý nước thải',
    ],
    projects: 12,
    publications: 38,
    members: 15,
  },
  {
    id: 'cybersecurity',
    icon: Shield,
    title: 'An ninh mạng & Bảo mật',
    description: 'Nghiên cứu các giải pháp bảo mật tiên tiến, phát hiện và phòng chống các mối đe dọa mạng',
    image: 'https://images.unsplash.com/photo-1483817101829-339b08e8d83f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHNlY3VyaXR5fGVufDF8fHx8MTc2MTU1NzgwNnww&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#EE973C',
    topics: [
      'Network Security',
      'Cryptography',
      'Penetration Testing',
      'Security Operations Center (SOC)',
      'Threat Intelligence',
      'Blockchain Security',
    ],
    projects: 10,
    publications: 28,
    members: 12,
  },
  {
    id: 'iot',
    icon: Cpu,
    title: 'Internet of Things (IoT)',
    description: 'Phát triển các hệ thống IoT thông minh cho smart city, smart agriculture, smart home',
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGVuZ2luZWVyaW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjE1NTc4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#007FC0',
    topics: [
      'Smart City Solutions',
      'Industrial IoT (IIoT)',
      'Smart Agriculture',
      'Healthcare IoT',
      'Edge Computing',
      'IoT Security',
    ],
    projects: 18,
    publications: 32,
    members: 18,
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud Computing & DevOps',
    description: 'Nghiên cứu kiến trúc cloud, microservices, containerization và tự động hóa triển khai',
    image: 'https://images.unsplash.com/photo-1709281847780-2b34c28853c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwcHJvZHVjdCUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc2MTU1NzcwNHww&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#EE973C',
    topics: [
      'Cloud Architecture',
      'Microservices',
      'Kubernetes & Docker',
      'CI/CD Pipeline',
      'Infrastructure as Code',
      'Serverless Computing',
    ],
    projects: 14,
    publications: 25,
    members: 16,
  },
  {
    id: 'blockchain',
    icon: Network,
    title: 'Blockchain & Distributed Systems',
    description: 'Phát triển ứng dụng blockchain, smart contracts, và hệ thống phân tán',
    image: 'https://images.unsplash.com/photo-1496096265110-f83ad7f96608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjE0OTYwMDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#007FC0',
    topics: [
      'Smart Contracts',
      'DeFi Applications',
      'NFT & Digital Assets',
      'Supply Chain Blockchain',
      'Consensus Mechanisms',
      'Private Blockchain',
    ],
    projects: 8,
    publications: 22,
    members: 10,
  },
];

const stats = [
  { number: '6', label: 'Lĩnh vực nghiên cứu', color: '#EE973C' },
  { number: '82+', label: 'Dự án đang triển khai', color: '#007FC0' },
  { number: '190+', label: 'Công bố khoa học', color: '#EE973C' },
  { number: '91+', label: 'Chuyên gia & Nghiên cứu viên', color: '#007FC0' },
];

export function ResearchAreasPage() {
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
            <span className="text-white">Lĩnh vực nghiên cứu</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl mb-4">Lĩnh vực nghiên cứu</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Khám phá các chuyên ngành nghiên cứu trọng điểm của TUMIKI, 
            nơi hội tụ những công nghệ tiên tiến nhất
          </p>
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

      {/* Research Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#EE973C]/10 text-[#EE973C] px-4 py-2 rounded-full mb-4">
              Các lĩnh vực chuyên sâu
            </div>
            <h2 className="text-3xl lg:text-4xl mb-4">
              6 Lĩnh vực nghiên cứu chính
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Mỗi lĩnh vực đều có đội ngũ chuyên gia giàu kinh nghiệm và cơ sở hạ tầng nghiên cứu hiện đại
            </p>
          </div>

          <div className="space-y-16">
            {researchAreas.map((area, index) => {
              const Icon = area.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={area.id} className="relative">
                  <Card className="overflow-hidden hover:shadow-2xl transition-all">
                    <div className={`grid grid-cols-1 lg:grid-cols-2 ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                      {/* Image */}
                      <div className={`${!isEven ? 'lg:col-start-2' : ''}`}>
                        <div className="aspect-[4/3] lg:aspect-auto lg:h-full">
                          <ImageWithFallback
                            src={area.image}
                            alt={area.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div 
                          className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                          style={{ backgroundColor: `${area.color}15` }}
                        >
                          <Icon className="w-8 h-8" style={{ color: area.color }} />
                        </div>
                        
                        <h3 className="text-3xl mb-4">{area.title}</h3>
                        <p className="text-gray-600 mb-6 text-lg">
                          {area.description}
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          <div>
                            <div className="text-2xl" style={{ color: area.color }}>
                              {area.projects}
                            </div>
                            <div className="text-sm text-gray-600">Dự án</div>
                          </div>
                          <div>
                            <div className="text-2xl" style={{ color: area.color }}>
                              {area.publications}
                            </div>
                            <div className="text-sm text-gray-600">Công bố</div>
                          </div>
                          <div>
                            <div className="text-2xl" style={{ color: area.color }}>
                              {area.members}
                            </div>
                            <div className="text-sm text-gray-600">Thành viên</div>
                          </div>
                        </div>

                        {/* Topics */}
                        <div className="mb-6">
                          <h4 className="mb-3">Chủ đề nghiên cứu:</h4>
                          <div className="grid grid-cols-1 gap-2">
                            {area.topics.map((topic, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <div 
                                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                  style={{ backgroundColor: area.color }}
                                />
                                <span className="text-sm text-gray-700">{topic}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1e3a5f] to-[#007FC0] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl mb-6">
            Tham gia nghiên cứu cùng TUMIKI
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Chúng tôi luôn chào đón các nhà nghiên cứu, sinh viên và đối tác có cùng đam mê công nghệ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-[#EE973C] hover:bg-[#d67f2a] text-white">
                Liên hệ hợp tác
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/fields/research">
              <Button size="lg" variant="outline" className="bg-white text-[#007FC0] hover:bg-gray-100">
                Xem dự án nghiên cứu
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
