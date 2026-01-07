import { ChevronRight, Brain, Database, Shield, Cpu, Cloud, Network, Lightbulb, CheckCircle, Clock, Award, ArrowRight } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

const stats = [
  { number: '6', label: 'Lĩnh vực nghiên cứu', color: '#EE973C' },
  { number: '82+', label: 'Dự án đang triển khai', color: '#007FC0' },
  { number: '35+', label: 'Bằng sáng chế', color: '#EE973C' },
  { number: '91+', label: 'Chuyên gia', color: '#007FC0' },
];

// Research Areas Data
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

// Patents Data
const patents = [
  {
    title: 'Hệ thống nhận diện khuôn mặt 3D thời gian thực',
    number: 'VN-2024-001234',
    status: 'Đã cấp',
    year: '2024',
    category: 'AI & Computer Vision',
    description: 'Công nghệ nhận diện khuôn mặt 3D với độ chính xác cao, hoạt động trong môi trường ánh sáng yếu',
    color: '#EE973C',
    applications: ['An ninh & Bảo mật', 'Ngân hàng', 'Kiểm soát ra vào'],
  },
  {
    title: 'Thuật toán tối ưu hóa năng lượng cho IoT',
    number: 'VN-2024-001567',
    status: 'Đã cấp',
    year: '2024',
    category: 'IoT & Energy',
    description: 'Giải pháp tối ưu hóa tiêu thụ năng lượng cho các thiết bị IoT, kéo dài thời lượng pin đến 300%',
    color: '#007FC0',
    applications: ['Smart City', 'Smart Agriculture', 'Industrial IoT'],
  },
  {
    title: 'Nền tảng Blockchain cho chuỗi cung ứng',
    number: 'VN-2023-002890',
    status: 'Đã cấp',
    year: '2023',
    category: 'Blockchain',
    description: 'Giải pháp blockchain riêng tư cho quản lý chuỗi cung ứng với tính minh bạch và bảo mật cao',
    color: '#EE973C',
    applications: ['Logistics', 'Retail', 'Manufacturing'],
  },
  {
    title: 'Hệ thống phân tích dữ liệu y tế thông minh',
    number: 'VN-2023-003456',
    status: 'Đã cấp',
    year: '2023',
    category: 'Healthcare AI',
    description: 'Ứng dụng AI để phân tích hồ sơ bệnh án và hỗ trợ chẩn đoán bệnh tự động',
    color: '#007FC0',
    applications: ['Bệnh viện', 'Phòng khám', 'Nghiên cứu y học'],
  },
];

const pendingPatents = [
  {
    title: 'Thuật toán Machine Learning cho dự báo thời tiết',
    number: 'VN-2024-004123',
    status: 'Đang xét duyệt',
    year: '2024',
    category: 'AI & Weather',
    description: 'Mô hình ML tiên tiến để dự báo thời tiết chính xác cho khu vực Đông Nam Á',
    color: '#EE973C',
    expectedDate: 'Q2 2025',
  },
  {
    title: 'Giải pháp bảo mật End-to-End cho IoT',
    number: 'VN-2024-004567',
    status: 'Đang xét duyệt',
    year: '2024',
    category: 'Cybersecurity',
    description: 'Giao thức bảo mật toàn diện cho hệ sinh thái IoT',
    color: '#007FC0',
    expectedDate: 'Q3 2025',
  },
  {
    title: 'Nền tảng Edge AI cho xe tự hành',
    number: 'VN-2024-005012',
    status: 'Đang xét duyệt',
    year: '2024',
    category: 'AI & Automotive',
    description: 'Hệ thống xử lý AI tại edge cho ô tô tự lái',
    color: '#EE973C',
    expectedDate: 'Q4 2025',
  },
];

const solutions = [
  {
    title: 'SmartAgri Platform',
    description: 'Giải pháp nông nghiệp thông minh tích hợp IoT và AI',
    features: ['Giám sát môi trường', 'Tưới tiêu tự động', 'Dự báo sâu bệnh'],
    color: '#007FC0',
  },
  {
    title: 'SecureChain',
    description: 'Nền tảng blockchain cho truy xuất nguồn gốc sản phẩm',
    features: ['Truy xuất nguồn gốc', 'Chống hàng giả', 'Quản lý chất lượng'],
    color: '#EE973C',
  },
  {
    title: 'HealthAI Diagnostic',
    description: 'Hệ thống hỗ trợ chẩn đoán y tế bằng AI',
    features: ['Phân tích hình ảnh y tế', 'Gợi ý chẩn đoán', 'Theo dõi sức khỏe'],
    color: '#007FC0',
  },
  {
    title: 'CityOS',
    description: 'Hệ điều hành đô thị thông minh',
    features: ['Quản lý giao thông', 'Giám sát an ninh', 'Tối ưu năng lượng'],
    color: '#EE973C',
  },
];

export function ResearchPage() {
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
            <span className="text-white">Nghiên cứu khoa học</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl mb-4">Nghiên cứu khoa học</h1>
              <p className="text-xl text-white/90 mb-6">
                Tiên phong trong nghiên cứu và phát triển các công nghệ tiên tiến, 
                góp phần thúc đẩy đổi mới sáng tạo và phát triển bền vững
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/20 rounded-full">AI & Machine Learning</span>
                <span className="px-4 py-2 bg-white/20 rounded-full">IoT</span>
                <span className="px-4 py-2 bg-white/20 rounded-full">Blockchain</span>
                <span className="px-4 py-2 bg-white/20 rounded-full">Data Science</span>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="aspect-square rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1760493828288-d2dbb70d18c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbnRpZmljJTIwcmVzZWFyY2glMjBsYWJvcmF0b3J5fGVufDF8fHx8MTc2MTU1NzcwMnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Research Laboratory"
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

      {/* Research Areas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#007FC0]/10 text-[#007FC0] px-4 py-2 rounded-full mb-4">
              Các lĩnh vực chuyên sâu
            </div>
            <h2 className="text-3xl lg:text-4xl mb-4">
              Lĩnh vực nghiên cứu
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

      {/* Innovations Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#EE973C]/10 text-[#EE973C] px-4 py-2 rounded-full mb-4">
              Danh mục sáng chế
            </div>
            <h2 className="text-3xl lg:text-4xl mb-6">Sáng chế</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Bảo vệ quyền sở hữu trí tuệ và thương mại hóa các công nghệ đột phá
            </p>
          </div>

          <Tabs defaultValue="granted" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="granted">Đã cấp phép</TabsTrigger>
              <TabsTrigger value="pending">Đang xét duyệt</TabsTrigger>
            </TabsList>

            <TabsContent value="granted">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {patents.map((patent, index) => (
                  <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${patent.color}15` }}
                      >
                        <Award className="w-6 h-6" style={{ color: patent.color }} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg">{patent.title}</h3>
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 ml-2" />
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-sm text-gray-500">{patent.number}</span>
                          <span className="text-gray-300">•</span>
                          <span 
                            className="text-sm px-2 py-1 rounded"
                            style={{ 
                              backgroundColor: `${patent.color}15`,
                              color: patent.color,
                            }}
                          >
                            {patent.year}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-4">{patent.description}</p>
                    
                    <div className="mb-4">
                      <span className="text-sm text-gray-500 mb-2 block">Lĩnh vực:</span>
                      <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm">
                        {patent.category}
                      </span>
                    </div>

                    <div>
                      <span className="text-sm text-gray-500 mb-2 block">Ứng dụng:</span>
                      <div className="flex flex-wrap gap-2">
                        {patent.applications.map((app, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 bg-gray-100 rounded">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="pending">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {pendingPatents.map((patent, index) => (
                  <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-start gap-3 mb-4">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${patent.color}15` }}
                      >
                        <Clock className="w-5 h-5" style={{ color: patent.color }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg mb-2">{patent.title}</h3>
                        <span className="text-xs text-gray-500">{patent.number}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-4">{patent.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Lĩnh vực:</span>
                        <span className="text-gray-900">{patent.category}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Dự kiến cấp:</span>
                        <span style={{ color: patent.color }}>{patent.expectedDate}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Proprietary Solutions */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <div className="inline-block bg-[#007FC0]/10 text-[#007FC0] px-4 py-2 rounded-full mb-4">
                Giải pháp độc quyền
              </div>
              <h2 className="text-3xl lg:text-4xl mb-4">
                Sản phẩm từ Sáng chế
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Các giải pháp công nghệ được phát triển dựa trên bằng sáng chế của TUMIKI
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {solutions.map((solution, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-all group cursor-pointer">
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${solution.color}15` }}
                  >
                    <Lightbulb className="w-7 h-7" style={{ color: solution.color }} />
                  </div>
                  <h3 className="text-lg mb-2">{solution.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: solution.color }} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1e3a5f] to-[#007FC0] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl mb-6">
            Hợp tác nghiên cứu cùng TUMIKI
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Chúng tôi luôn tìm kiếm các đối tác nghiên cứu để cùng phát triển công nghệ tiên tiến
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-[#EE973C] hover:bg-[#d67f2a] text-white">
              Liên hệ hợp tác
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
