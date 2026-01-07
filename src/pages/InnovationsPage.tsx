import { ChevronRight, Lightbulb, Award, FileText, TrendingUp, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

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

const stats = [
  { number: '35+', label: 'Bằng sáng chế', color: '#EE973C' },
  { number: '12', label: 'Đơn đang xét duyệt', color: '#007FC0' },
  { number: '20+', label: 'Giải pháp độc quyền', color: '#EE973C' },
  { number: '8', label: 'Giải thưởng sáng tạo', color: '#007FC0' },
];

export function InnovationsPage() {
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
            <span className="text-white">Sáng chế</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-12 h-12" />
                <h1 className="text-4xl lg:text-5xl">Sáng chế & Đổi mới</h1>
              </div>
              <p className="text-xl text-white/90 mb-6">
                Bảo vệ quyền sở hữu trí tuệ và thương mại hóa các công nghệ đột phá, 
                đóng góp vào sự phát triển của ngành công nghệ Việt Nam
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/20 rounded-full">Bằng sáng chế</span>
                <span className="px-4 py-2 bg-white/20 rounded-full">Giải pháp độc quyền</span>
                <span className="px-4 py-2 bg-white/20 rounded-full">Chuyển giao công nghệ</span>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="aspect-square rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1496096265110-f83ad7f96608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjE0OTYwMDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Innovation"
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

      {/* Patents Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="granted" className="w-full">
            <div className="text-center mb-8">
              <div className="inline-block bg-[#EE973C]/10 text-[#EE973C] px-4 py-2 rounded-full mb-4">
                Danh mục sáng chế
              </div>
              <h2 className="text-3xl lg:text-4xl mb-6">Bằng sáng chế & Giải pháp</h2>
            </div>

            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="granted">Đã cấp phép</TabsTrigger>
              <TabsTrigger value="pending">Đang xét duyệt</TabsTrigger>
            </TabsList>

            <TabsContent value="granted">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </div>
      </section>

      {/* Proprietary Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1e3a5f] to-[#007FC0] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl mb-6">
            Quan tâm đến sáng chế của chúng tôi?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Liên hệ để tìm hiểu về cơ hội hợp tác, chuyển giao công nghệ hoặc cấp phép sử dụng
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-[#EE973C] hover:bg-[#d67f2a] text-white">
                Liên hệ hợp tác
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
