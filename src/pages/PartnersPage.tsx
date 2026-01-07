import { useState } from 'react';
import { ChevronRight, Globe, MapPin, Building2, Award, Users, Handshake } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const domesticPartners = [
  {
    name: 'Tập đoàn Công nghệ FPT',
    category: 'Công nghệ',
    description: 'Đối tác chiến lược trong nghiên cứu và phát triển AI, Cloud Computing',
    location: 'Hà Nội, Việt Nam',
    since: '2018',
    projects: 12,
  },
  {
    name: 'Đại học Bách Khoa Hà Nội',
    category: 'Giáo dục',
    description: 'Hợp tác đào tạo và nghiên cứu khoa học trong lĩnh vực IoT và Big Data',
    location: 'Hà Nội, Việt Nam',
    since: '2019',
    projects: 8,
  },
  {
    name: 'Viettel Group',
    category: 'Viễn thông',
    description: 'Phát triển giải pháp 5G và chuyển đổi số cho doanh nghiệp',
    location: 'Hà Nội, Việt Nam',
    since: '2020',
    projects: 15,
  },
  {
    name: 'VNPT Technology',
    category: 'Công nghệ',
    description: 'Nghiên cứu và triển khai các giải pháp Smart City',
    location: 'Hà Nội, Việt Nam',
    since: '2019',
    projects: 10,
  },
  {
    name: 'Tập đoàn Vingroup',
    category: 'Tập đoàn',
    description: 'Hợp tác phát triển công nghệ cho các dự án bất động sản thông minh',
    location: 'Hà Nội, Việt Nam',
    since: '2021',
    projects: 6,
  },
  {
    name: 'CMC Corporation',
    category: 'Công nghệ',
    description: 'Đối tác trong chuyển đổi số và phát triển phần mềm',
    location: 'Hà Nội, Việt Nam',
    since: '2020',
    projects: 9,
  },
];

const internationalPartners = [
  {
    name: 'Google Cloud',
    category: 'Cloud & AI',
    description: 'Đối tác công nghệ trong phát triển giải pháp AI và Machine Learning',
    location: 'Mountain View, USA',
    since: '2020',
    projects: 5,
  },
  {
    name: 'Microsoft Azure',
    category: 'Cloud Computing',
    description: 'Hợp tác triển khai các giải pháp cloud và enterprise software',
    location: 'Redmond, USA',
    since: '2019',
    projects: 8,
  },
  {
    name: 'Amazon Web Services',
    category: 'Cloud Infrastructure',
    description: 'Đối tác trong xây dựng hạ tầng cloud và serverless solutions',
    location: 'Seattle, USA',
    since: '2021',
    projects: 6,
  },
  {
    name: 'Samsung Electronics',
    category: 'Electronics & IoT',
    description: 'Nghiên cứu và phát triển các giải pháp IoT thông minh',
    location: 'Seoul, South Korea',
    since: '2020',
    projects: 7,
  },
  {
    name: 'National University of Singapore',
    category: 'Research & Education',
    description: 'Hợp tác nghiên cứu khoa học và trao đổi học thuật',
    location: 'Singapore',
    since: '2018',
    projects: 10,
  },
  {
    name: 'IBM Research',
    category: 'AI & Quantum',
    description: 'Đối tác trong nghiên cứu AI, Blockchain và Quantum Computing',
    location: 'New York, USA',
    since: '2019',
    projects: 4,
  },
];

const stats = [
  { label: 'Đối tác toàn cầu', value: '50+', icon: Globe, color: '#007FC0' },
  { label: 'Dự án hợp tác', value: '120+', icon: Handshake, color: '#EE973C' },
  { label: 'Quốc gia', value: '15+', icon: MapPin, color: '#007FC0' },
  { label: 'Năm kinh nghiệm', value: '10+', icon: Award, color: '#EE973C' },
];

export function PartnersPage() {
  const [activeTab, setActiveTab] = useState('domestic');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1e3a5f] to-[#007FC0] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-6 text-white/80">
            <a href="/" className="hover:text-white transition-colors">Trang chủ</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Đối tác</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl mb-4">Đối tác của chúng tôi</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Hợp tác với các tổ chức hàng đầu trong và ngoài nước để mang đến những giải pháp công nghệ tốt nhất
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div 
                    className="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${stat.color}15` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: stat.color }} />
                  </div>
                  <div className="text-3xl mb-1" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership Intro */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#EE973C]/10 text-[#EE973C] px-4 py-2 rounded-full mb-4">
                Mạng lưới đối tác
              </div>
              <h2 className="text-3xl lg:text-4xl mb-6">
                Xây dựng quan hệ đối tác bền vững
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  TUMIKI tự hào là đối tác tin cậy của nhiều tổ chức, doanh nghiệp hàng đầu trong và ngoài nước. Chúng tôi tin rằng sự hợp tác là chìa khóa để tạo ra những giá trị đột phá.
                </p>
                <p>
                  Mạng lưới đối tác đa dạng của chúng tôi bao gồm các công ty công nghệ toàn cầu, viện nghiên cứu, trường đại học và doanh nghiệp địa phương, cùng nhau thúc đẩy đổi mới và phát triển bền vững.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <Card className="p-4 bg-white border-l-4 border-l-[#007FC0]">
                  <Building2 className="w-8 h-8 text-[#007FC0] mb-2" />
                  <h4 className="mb-1">Doanh nghiệp</h4>
                  <p className="text-sm text-gray-600">Hợp tác chiến lược và triển khai dự án</p>
                </Card>
                <Card className="p-4 bg-white border-l-4 border-l-[#EE973C]">
                  <Users className="w-8 h-8 text-[#EE973C] mb-2" />
                  <h4 className="mb-1">Học thuật</h4>
                  <p className="text-sm text-gray-600">Nghiên cứu và phát triển công nghệ</p>
                </Card>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1698047681820-f26b00b6c639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBwYXJ0bmVyc2hpcCUyMGhhbmRzaGFrZXxlbnwxfHx8fDE3NjE1NTcxMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Partnership"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners List with Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">
              Danh sách đối tác
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Khám phá mạng lưới đối tác toàn cầu của TUMIKI
            </p>
          </div>

          <Tabs defaultValue="domestic" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="domestic" className="data-[state=active]:bg-[#EE973C] data-[state=active]:text-white">
                Đối tác trong nước
              </TabsTrigger>
              <TabsTrigger value="international" className="data-[state=active]:bg-[#007FC0] data-[state=active]:text-white">
                Đối tác nước ngoài
              </TabsTrigger>
            </TabsList>

            <TabsContent value="domestic" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {domesticPartners.map((partner, index) => (
                  <Card key={index} className="p-6 hover:shadow-xl transition-shadow border-t-4 border-t-[#EE973C]">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#EE973C]/20 to-[#EE973C]/10 rounded-lg flex items-center justify-center">
                        <Building2 className="w-8 h-8 text-[#EE973C]" />
                      </div>
                      <Badge variant="secondary" className="bg-[#EE973C]/10 text-[#EE973C]">
                        {partner.category}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl mb-2">{partner.name}</h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {partner.description}
                    </p>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-gray-500">
                        <MapPin className="w-4 h-4" />
                        <span>{partner.location}</span>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t">
                        <span className="text-gray-500">Từ năm {partner.since}</span>
                        <span className="text-[#EE973C]">{partner.projects} dự án</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="international" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {internationalPartners.map((partner, index) => (
                  <Card key={index} className="p-6 hover:shadow-xl transition-shadow border-t-4 border-t-[#007FC0]">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#007FC0]/20 to-[#007FC0]/10 rounded-lg flex items-center justify-center">
                        <Globe className="w-8 h-8 text-[#007FC0]" />
                      </div>
                      <Badge variant="secondary" className="bg-[#007FC0]/10 text-[#007FC0]">
                        {partner.category}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl mb-2">{partner.name}</h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {partner.description}
                    </p>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-gray-500">
                        <MapPin className="w-4 h-4" />
                        <span>{partner.location}</span>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t">
                        <span className="text-gray-500">Từ năm {partner.since}</span>
                        <span className="text-[#007FC0]">{partner.projects} dự án</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1e3a5f] to-[#007FC0] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl mb-6">
            Trở thành đối tác của TUMIKI
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Hợp tác cùng chúng tôi để cùng phát triển và tạo ra giá trị bền vững
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-[#EE973C] hover:bg-[#d67f2a] rounded-md transition-colors">
              Đề xuất hợp tác
            </button>
            <button className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-md border border-white/20 transition-colors">
              Tìm hiểu thêm
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
