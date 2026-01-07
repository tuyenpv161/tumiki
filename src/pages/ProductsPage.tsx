import { ChevronRight, Package, Smartphone, Cloud, Shield, Users, BarChart, ArrowRight, Download, ExternalLink } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Badge } from '../components/ui/badge';

const products = [
  {
    id: 'smart-agri',
    name: 'TUMIKI SmartAgri',
    category: 'IoT & Agriculture',
    tagline: 'Nông nghiệp thông minh, năng suất bền vững',
    description: 'Nền tảng quản lý nông nghiệp thông minh tích hợp IoT, AI và phân tích dữ liệu để tối ưu hóa năng suất cây trồng',
    image: 'https://images.unsplash.com/photo-1709281847780-2b34c28853c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwcHJvZHVjdCUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc2MTU1NzcwNHww&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#EE973C',
    status: 'Đang triển khai',
    users: '500+',
    features: [
      'Giám sát môi trường 24/7',
      'Tưới tiêu tự động thông minh',
      'Dự báo sâu bệnh bằng AI',
      'Phân tích đất và dinh dưỡng',
      'Dashboard quản lý trực quan',
      'Mobile App iOS & Android',
    ],
    techStack: ['IoT', 'AI/ML', 'React Native', 'Python', 'AWS'],
  },
  {
    id: 'health-ai',
    name: 'TUMIKI HealthAI',
    category: 'Healthcare & AI',
    tagline: 'Hỗ trợ chẩn đoán thông minh',
    description: 'Hệ thống hỗ trợ chẩn đoán y tế sử dụng AI để phân tích hình ảnh X-quang, CT scan và đề xuất chẩn đoán',
    image: 'https://images.unsplash.com/photo-1760493828288-d2dbb70d18c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbnRpZmljJTIwcmVzZWFyY2glMjBsYWJvcmF0b3J5fGVufDF8fHx8MTc2MTU1NzcwMnww&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#007FC0',
    status: 'Beta Testing',
    users: '50+',
    features: [
      'Phân tích hình ảnh y tế',
      'Nhận diện bất thường',
      'Gợi ý chẩn đoán tự động',
      'Lưu trữ hồ sơ điện tử',
      'Tích hợp HIS',
      'Báo cáo chi tiết',
    ],
    techStack: ['Deep Learning', 'TensorFlow', 'React', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'secure-chain',
    name: 'TUMIKI SecureChain',
    category: 'Blockchain & Supply Chain',
    tagline: 'Truy xuất nguồn gốc minh bạch',
    description: 'Nền tảng blockchain cho quản lý chuỗi cung ứng, đảm bảo tính minh bạch và chống hàng giả',
    image: 'https://images.unsplash.com/photo-1496096265110-f83ad7f96608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjE0OTYwMDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#EE973C',
    status: 'Đang triển khai',
    users: '200+',
    features: [
      'Truy xuất nguồn gốc sản phẩm',
      'Smart Contracts tự động',
      'QR Code tracking',
      'Dashboard phân tích',
      'API tích hợp dễ dàng',
      'Bảo mật cao',
    ],
    techStack: ['Hyperledger', 'Ethereum', 'Vue.js', 'Go', 'MongoDB'],
  },
  {
    id: 'city-os',
    name: 'TUMIKI CityOS',
    category: 'Smart City & IoT',
    tagline: 'Hệ điều hành đô thị thông minh',
    description: 'Nền tảng quản lý đô thị thông minh tích hợp IoT, giám sát an ninh, giao thông và năng lượng',
    image: 'https://images.unsplash.com/photo-1759752394397-3c745feb24e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGFwcGxpY2F0aW9uJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2MTU1NzkzNHww&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#007FC0',
    status: 'Pilot Project',
    users: '3 Thành phố',
    features: [
      'Quản lý giao thông thông minh',
      'Giám sát an ninh đô thị',
      'Tối ưu hóa năng lượng',
      'Quản lý chất thải',
      'Cảnh báo thiên tai',
      'Tích hợp đa dịch vụ',
    ],
    techStack: ['IoT', 'Big Data', 'Angular', 'Java', 'Kafka'],
  },
  {
    id: 'data-insight',
    name: 'TUMIKI DataInsight',
    category: 'Business Intelligence',
    tagline: 'Phân tích dữ liệu thông minh',
    description: 'Công cụ phân tích dữ liệu và business intelligence cho doanh nghiệp, hỗ trợ ra quyết định',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MTUyNTIxMXww&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#EE973C',
    status: 'Đang triển khai',
    users: '100+',
    features: [
      'Dashboard tùy biến',
      'Phân tích dự đoán',
      'Báo cáo tự động',
      'Data visualization',
      'Real-time monitoring',
      'Export đa định dạng',
    ],
    techStack: ['Python', 'Tableau', 'React', 'Apache Spark', 'Redis'],
  },
  {
    id: 'secure-guard',
    name: 'TUMIKI SecureGuard',
    category: 'Cybersecurity',
    tagline: 'Bảo vệ an ninh mạng toàn diện',
    description: 'Giải pháp bảo mật mạng tích hợp, phát hiện và ngăn chặn các mối đe dọa an ninh mạng',
    image: 'https://images.unsplash.com/photo-1483817101829-339b08e8d83f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHNlY3VyaXR5fGVufDF8fHx8MTc2MTU1NzgwNnww&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#007FC0',
    status: 'Đang triển khai',
    users: '80+',
    features: [
      'Firewall thông minh',
      'Phát hiện xâm nhập (IDS)',
      'Quét lỗ hổng bảo mật',
      'Giám sát log 24/7',
      'Cảnh báo thời gian thực',
      'Compliance reporting',
    ],
    techStack: ['Snort', 'ELK Stack', 'Python', 'C++', 'Docker'],
  },
];

const stats = [
  { number: '25+', label: 'Sản phẩm công nghệ', color: '#EE973C' },
  { number: '1000+', label: 'Người dùng hài lòng', color: '#007FC0' },
  { number: '98%', label: 'Tỷ lệ hài lòng', color: '#EE973C' },
  { number: '24/7', label: 'Hỗ trợ khách hàng', color: '#007FC0' },
];

export function ProductsPage() {
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
            <span className="text-white">Sản phẩm công nghệ</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Package className="w-12 h-12" />
                <h1 className="text-4xl lg:text-5xl">Sản phẩm công nghệ</h1>
              </div>
              <p className="text-xl text-white/90 mb-6">
                Khám phá các giải pháp công nghệ tiên tiến được phát triển bởi TUMIKI, 
                từ IoT đến AI, Blockchain và Cybersecurity
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/20 rounded-full">Chất lượng cao</span>
                <span className="px-4 py-2 bg-white/20 rounded-full">Dễ tích hợp</span>
                <span className="px-4 py-2 bg-white/20 rounded-full">Hỗ trợ 24/7</span>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="aspect-square rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjE1Mjk3MjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Products"
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

      {/* Products List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#EE973C]/10 text-[#EE973C] px-4 py-2 rounded-full mb-4">
              Danh mục sản phẩm
            </div>
            <h2 className="text-3xl lg:text-4xl mb-4">
              Giải pháp công nghệ toàn diện
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Từ nghiên cứu đến ứng dụng, chúng tôi mang đến các sản phẩm công nghệ chất lượng cao
            </p>
          </div>

          <div className="space-y-12">
            {products.map((product, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <Card key={product.id} className="overflow-hidden hover:shadow-2xl transition-all">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                    {/* Image */}
                    <div className={`${!isEven ? 'lg:col-start-2' : ''}`}>
                      <div className="aspect-[4/3] lg:aspect-auto lg:h-full">
                        <ImageWithFallback
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge 
                          variant="outline" 
                          className="border-2"
                          style={{ 
                            borderColor: product.color,
                            color: product.color,
                          }}
                        >
                          {product.category}
                        </Badge>
                        <Badge 
                          className="text-white"
                          style={{ backgroundColor: product.color }}
                        >
                          {product.status}
                        </Badge>
                      </div>
                      
                      <h3 className="text-3xl mb-2">{product.name}</h3>
                      <p className="text-lg mb-4" style={{ color: product.color }}>
                        {product.tagline}
                      </p>
                      <p className="text-gray-600 mb-6">
                        {product.description}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center gap-6 mb-6 pb-6 border-b">
                        <div>
                          <div className="flex items-center gap-2">
                            <Users className="w-5 h-5" style={{ color: product.color }} />
                            <span className="text-gray-900">{product.users}</span>
                          </div>
                          <span className="text-xs text-gray-500">Người dùng</span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="mb-3">Tính năng chính:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {product.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div 
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                                style={{ backgroundColor: product.color }}
                              />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="mb-6">
                        <h4 className="text-sm text-gray-500 mb-2">Công nghệ sử dụng:</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.techStack.map((tech, idx) => (
                            <span 
                              key={idx} 
                              className="text-xs px-3 py-1 rounded-full"
                              style={{ 
                                backgroundColor: `${product.color}10`,
                                color: product.color,
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-wrap gap-3">
                        <Link to="/contact">
                          <Button 
                            style={{ 
                              backgroundColor: product.color,
                              color: 'white',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.opacity = '0.9';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.opacity = '1';
                            }}
                          >
                            Yêu cầu Demo
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                        <Button variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          Tài liệu
                        </Button>
                      </div>
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
            Tìm hiểu thêm về sản phẩm?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Liên hệ với chúng tôi để được tư vấn chi tiết và nhận bản demo miễn phí
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-[#EE973C] hover:bg-[#d67f2a] text-white">
                Liên hệ tư vấn
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/fields/consulting">
              <Button size="lg" variant="outline" className="bg-white text-[#007FC0] hover:bg-gray-100">
                Dịch vụ tư vấn
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
