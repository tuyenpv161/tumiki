import { useState } from 'react';
import { Calendar, User, ArrowRight, Tag, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../components/ui/breadcrumb';

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
}

// Mock data for Tin hoạt động
const activityNews: NewsItem[] = [
  {
    id: '1',
    title: 'TUMIKI Tổ chức Hội thảo Khoa học Quốc tế về AI và Machine Learning',
    excerpt: 'Viện Công nghệ TUMIKI vinh dự đón tiếp hơn 200 chuyên gia trong và ngoài nước tham dự hội thảo khoa học về ứng dụng AI và Machine Learning trong nghiên cứu và phát triển sản phẩm.',
    image: 'https://images.unsplash.com/photo-1582192730841-2a682d7375f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZXxlbnwxfHx8fDE3NjE1MTQ4NjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2024-03-15',
    author: 'Ban Biên tập',
    category: 'Sự kiện',
    tags: ['Hội thảo', 'AI', 'Machine Learning']
  },
  {
    id: '2',
    title: 'Lễ Ký kết Hợp tác Chiến lược với Đại học Quốc gia',
    excerpt: 'TUMIKI và Đại học Quốc gia TP.HCM chính thức ký kết thỏa thuận hợp tác chiến lược trong nghiên cứu và đào tạo nhân lực công nghệ cao.',
    image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NjE1Mjc3MjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2024-03-10',
    author: 'Phòng Truyền thông',
    category: 'Hợp tác',
    tags: ['Đối tác', 'Đại học', 'Hợp tác']
  },
  {
    id: '3',
    title: 'TUMIKI Tham gia Triển lãm Công nghệ Quốc tế 2024',
    excerpt: 'Viện mang đến triển lãm các sản phẩm nghiên cứu mới nhất trong lĩnh vực IoT, Robotics và AI, thu hút sự quan tâm của nhiều doanh nghiệp và nhà đầu tư.',
    image: 'https://images.unsplash.com/photo-1568952433726-3896e3881c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjE0NDg2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2024-03-05',
    author: 'Ban Biên tập',
    category: 'Triển lãm',
    tags: ['Triển lãm', 'Sản phẩm', 'IoT']
  },
  {
    id: '4',
    title: 'Đào tạo Nâng cao Kỹ năng Lập trình AI cho Sinh viên',
    excerpt: 'Chương trình đào tạo miễn phí dành cho 50 sinh viên xuất sắc các trường đại học kỹ thuật, trang bị kiến thức và kỹ năng thực hành về AI và Deep Learning.',
    image: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYxNTMxODY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2024-02-28',
    author: 'Phòng Đào tạo',
    category: 'Đào tạo',
    tags: ['Đào tạo', 'AI', 'Sinh viên']
  },
  {
    id: '5',
    title: 'Chương trình Trao đổi Nghiên cứu sinh với Nhật Bản',
    excerpt: 'TUMIKI khởi động chương trình trao đổi nghiên cứu sinh với các viện nghiên cứu hàng đầu tại Nhật Bản, mở ra cơ hội học tập và nghiên cứu quốc tế.',
    image: 'https://images.unsplash.com/photo-1606206873764-fd15e242df52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMGxhYm9yYXRvcnl8ZW58MXx8fHwxNzYxNTU4ODQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2024-02-20',
    author: 'Phòng Hợp tác Quốc tế',
    category: 'Hợp tác',
    tags: ['Quốc tế', 'Nghiên cứu sinh', 'Nhật Bản']
  },
  {
    id: '6',
    title: 'TUMIKI Nhận Giải thưởng Đổi mới Sáng tạo 2024',
    excerpt: 'Viện vinh dự nhận giải thưởng "Đổi mới Sáng tạo xuất sắc" do Bộ Khoa học và Công nghệ trao tặng cho các thành tựu nghiên cứu và ứng dụng công nghệ.',
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGVuZ2luZWVyaW5nfGVufDF8fHx8MTc2MTQ3ODA2MHww&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2024-02-15',
    author: 'Ban Biên tập',
    category: 'Giải thưởng',
    tags: ['Giải thưởng', 'Đổi mới', 'Thành tựu']
  }
];

// Mock data for Sự kiện
const eventsNews: NewsItem[] = [
  {
    id: '13',
    title: 'Workshop "Ứng dụng AI trong Giáo dục"',
    excerpt: 'Buổi workshop thực hành về cách áp dụng công nghệ AI và Machine Learning trong việc cá nhân hóa trải nghiệm học tập và đánh giá học sinh.',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHRlY2h8ZW58MXx8fHwxNzYxNTMxODY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2024-04-15',
    author: 'Ban Tổ chức',
    category: 'Workshop',
    tags: ['Workshop', 'AI', 'Giáo dục']
  },
  {
    id: '14',
    title: 'Hackathon "Smart Solutions 2024"',
    excerpt: 'Cuộc thi lập trình marathon 48 giờ dành cho sinh viên và developer, tìm kiếm các giải pháp công nghệ thông minh cho bài toán thực tế.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWNrYXRob258ZW58MXx8fHwxNzYxNTMxODY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2024-04-20',
    author: 'Ban Tổ chức',
    category: 'Hackathon',
    tags: ['Hackathon', 'Competition', 'Innovation']
  },
  {
    id: '15',
    title: 'Tech Talk: Tương lai của Robotics',
    excerpt: 'Buổi chia sẻ với chuyên gia hàng đầu về xu hướng phát triển công nghệ robot và tự động hóa trong 5 năm tới.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMHRlY2h8ZW58MXx8fHwxNzYxNTMxODY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2024-04-25',
    author: 'Phòng Nghiên cứu',
    category: 'Tech Talk',
    tags: ['Robotics', 'Automation', 'Future Tech']
  },
  {
    id: '16',
    title: 'Ngày Hội Khởi nghiệp Công nghệ 2024',
    excerpt: 'Sự kiện kết nối startup công nghệ với nhà đầu tư, cố vấn và doanh nghiệp, tạo cơ hội networking và hợp tác.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwZXZlbnR8ZW58MXx8fHwxNzYxNTMxODY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2024-05-10',
    author: 'Ban Tổ chức',
    category: 'Startup Event',
    tags: ['Startup', 'Networking', 'Investment']
  },
  {
    id: '17',
    title: 'Webinar: Bảo mật Dữ liệu trong Kỷ nguyên Số',
    excerpt: 'Hội thảo trực tuyến về các phương pháp và công cụ bảo vệ dữ liệu cá nhân và doanh nghiệp trong môi trường số hóa.',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5fGVufDF8fHx8MTc2MTUzMTg2NHww&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2024-05-15',
    author: 'Phòng An ninh mạng',
    category: 'Webinar',
    tags: ['Cybersecurity', 'Data Protection', 'Privacy']
  },
  {
    id: '18',
    title: 'Demo Day: Trình diễn Sản phẩm Nghiên cứu Mới',
    excerpt: 'Ngày hội giới thiệu các sản phẩm và dự án nghiên cứu mới nhất của TUMIKI, mở cửa cho công chúng và doanh nghiệp tham quan.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwZGVtb3xlbnwxfHx8fDE3NjE1MzE4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2024-05-20',
    author: 'Ban Truyền thông',
    category: 'Demo Day',
    tags: ['Demo', 'Product Launch', 'Innovation']
  }
];

// Mock data for Tin chuyên ngành
const specializedNews: NewsItem[] = [
  {
    id: '7',
    title: 'Công nghệ Blockchain trong Quản lý Chuỗi Cung ứng',
    excerpt: 'Nghiên cứu mới về ứng dụng blockchain để tăng cường minh bạch và hiệu quả trong quản lý chuỗi cung ứng cho doanh nghiệp Việt Nam.',
    image: 'https://images.unsplash.com/photo-1568952433726-3896e3881c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjE0NDg2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2024-03-18',
    author: 'TS. Nguyễn Văn A',
    category: 'Blockchain',
    tags: ['Blockchain', 'Supply Chain', 'Nghiên cứu']
  },
  {
    id: '8',
    title: 'Xu hướng Phát triển IoT trong Smart City',
    excerpt: 'Phân tích các xu hướng mới nhất trong việc triển khai hệ thống IoT cho đô thị thông minh, từ giám sát giao thông đến quản lý năng lượng.',
    image: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYxNTMxODY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2024-03-12',
    author: 'ThS. Trần Thị B',
    category: 'IoT',
    tags: ['IoT', 'Smart City', 'Đô thị']
  },
  {
    id: '9',
    title: 'Deep Learning trong Chẩn đoán Y tế',
    excerpt: 'Ứng dụng mạng neural sâu trong chẩn đoán hình ảnh y tế, giúp phát hiện sớm các bệnh lý với độ chính xác cao hơn.',
    image: 'https://images.unsplash.com/photo-1606206873764-fd15e242df52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMGxhYm9yYXRvcnl8ZW58MXx8fHwxNzYxNTU4ODQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2024-03-08',
    author: 'PGS.TS. Lê Văn C',
    category: 'AI',
    tags: ['Deep Learning', 'Y tế', 'AI']
  },
  {
    id: '10',
    title: 'Robotics và Tự động hóa trong Sản xuất',
    excerpt: 'Giải pháp robot công nghiệp thông minh giúp tăng năng suất và giảm chi phí trong quy trình sản xuất hiện đại.',
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGVuZ2luZWVyaW5nfGVufDF8fHx8MTc2MTQ3ODA2MHww&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2024-03-01',
    author: 'TS. Phạm Minh D',
    category: 'Robotics',
    tags: ['Robotics', 'Tự động hóa', 'Sản xuất']
  },
  {
    id: '11',
    title: 'Xử lý Ngôn ngữ Tự nhiên cho Tiếng Việt',
    excerpt: 'Phát triển mô hình NLP chuyên sâu cho tiếng Việt, cải thiện hiệu suất trong các ứng dụng chatbot và phân tích văn bản.',
    image: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYxNTMxODY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2024-02-25',
    author: 'ThS. Hoàng Thị E',
    category: 'NLP',
    tags: ['NLP', 'Tiếng Việt', 'Chatbot']
  },
  {
    id: '12',
    title: 'Bảo mật Mạng trong Kỷ nguyên 5G',
    excerpt: 'Các thách thức và giải pháp bảo mật cho mạng 5G, đảm bảo an toàn dữ liệu trong môi trường kết nối siêu tốc.',
    image: 'https://images.unsplash.com/photo-1568952433726-3896e3881c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjE0NDg2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2024-02-18',
    author: 'TS. Vũ Đức F',
    category: 'Security',
    tags: ['Bảo mật', '5G', 'Mạng']
  }
];

function NewsCard({ news }: { news: NewsItem }) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <Link to={`/news/${news.id}`}>
        <div className="relative overflow-hidden h-48">
          <ImageWithFallback
            src={news.image}
            alt={news.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-3 right-3">
            <Badge className="bg-[#EE973C] hover:bg-[#d67f2a]">{news.category}</Badge>
          </div>
        </div>
      </Link>
      <CardContent className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{new Date(news.date).toLocaleDateString('vi-VN')}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{news.author}</span>
          </div>
        </div>
        <Link to={`/news/${news.id}`}>
          <h3 className="mb-3 text-gray-900 hover:text-[#EE973C] transition-colors line-clamp-2">
            {news.title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-3">{news.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {news.tags.slice(0, 2).map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
          <Link to={`/news/${news.id}`}>
            <Button variant="ghost" size="sm" className="text-[#007FC0] hover:text-[#EE973C]">
              Xem thêm
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default function NewsPage() {
  const [activeTab, setActiveTab] = useState('activity');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#007FC0] to-[#0056b3] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Breadcrumb className="mb-4">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="text-white/80 hover:text-white">Trang chủ</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/60">
                  <ChevronRight className="w-4 h-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-white">Tin tức & Sự kiện</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className="text-4xl lg:text-5xl mb-4">Tin tức & Sự kiện</h1>
            <p className="text-xl text-white/90">
              Cập nhật những tin tức mới nhất về hoạt động, nghiên cứu và thành tựu của Viện Công nghệ TUMIKI
            </p>
          </div>
        </div>
      </section>

      {/* News Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="activity" className="data-[state=active]:bg-[#EE973C] data-[state=active]:text-white">
                Tin hoạt động
              </TabsTrigger>
              <TabsTrigger value="specialized" className="data-[state=active]:bg-[#007FC0] data-[state=active]:text-white">
                Tin chuyên ngành
              </TabsTrigger>
              <TabsTrigger value="events" className="data-[state=active]:bg-[#EE973C] data-[state=active]:text-white">
                Sự kiện
              </TabsTrigger>
            </TabsList>

            <TabsContent value="activity" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {activityNews.map((news) => (
                  <NewsCard key={news.id} news={news} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="specialized" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {specializedNews.map((news) => (
                  <NewsCard key={news.id} news={news} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="events" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {eventsNews.map((news) => (
                  <NewsCard key={news.id} news={news} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Pagination placeholder */}
          <div className="flex justify-center mt-12">
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Trước</Button>
              <Button variant="outline" size="sm" className="bg-[#EE973C] text-white">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">Sau</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
