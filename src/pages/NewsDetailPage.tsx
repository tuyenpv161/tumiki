import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin, ArrowLeft, Clock } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Separator } from '../components/ui/separator';

// Mock data - in real app, this would come from API
const newsData: Record<string, any> = {
  '1': {
    id: '1',
    title: 'TUMIKI Tổ chức Hội thảo Khoa học Quốc tế về AI và Machine Learning',
    excerpt: 'Viện Công nghệ TUMIKI vinh dự đón tiếp hơn 200 chuyên gia trong và ngoài nước tham dự hội thảo khoa học về ứng dụng AI và Machine Learning trong nghiên cứu và phát triển sản phẩm.',
    image: 'https://images.unsplash.com/photo-1582192730841-2a682d7375f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZXxlbnwxfHx8fDE3NjE1MTQ4NjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2024-03-15',
    author: 'Ban Biên tập',
    category: 'Sự kiện',
    tags: ['Hội thảo', 'AI', 'Machine Learning'],
    readTime: '5 phút đọc',
    content: `
      <p>Ngày 15 tháng 3 năm 2024, Viện Công nghệ TUMIKI đã tổ chức thành công Hội thảo Khoa học Quốc tế về AI và Machine Learning, thu hút hơn 200 chuyên gia, nhà nghiên cứu và doanh nghiệp trong và ngoài nước tham dự.</p>

      <h2>Điểm nhấn của Hội thảo</h2>
      <p>Hội thảo là sự kiện khoa học lớn nhất trong năm của TUMIKI, tập trung vào các chủ đề nóng về trí tuệ nhân tạo và học máy. Với sự tham gia của các chuyên gia hàng đầu từ các tổ chức nghiên cứu quốc tế như MIT, Stanford, và các đại học hàng đầu tại Nhật Bản, Singapore, hội thảo đã tạo ra một diễn đàn trao đổi kiến thức và kinh nghiệm vô cùng giá trị.</p>

      <h2>Các phiên thảo luận chính</h2>
      <p>Hội thảo được chia thành 4 phiên chính:</p>
      <ul>
        <li><strong>Phiên 1: AI trong Y tế và Chăm sóc Sức khỏe</strong> - Trình bày các ứng dụng AI trong chẩn đoán bệnh, phát triển thuốc và quản lý bệnh viện</li>
        <li><strong>Phiên 2: Machine Learning trong Tài chính</strong> - Phân tích rủi ro, phát hiện gian lận và dự đoán thị trường</li>
        <li><strong>Phiên 3: Deep Learning và Computer Vision</strong> - Các kỹ thuật mới nhất trong xử lý hình ảnh và nhận dạng đối tượng</li>
        <li><strong>Phiên 4: Natural Language Processing</strong> - Xử lý ngôn ngữ tự nhiên cho tiếng Việt và các ngôn ngữ ASEAN</li>
      </ul>

      <h2>Thành quả đạt được</h2>
      <p>Hội thảo đã thu được nhiều thành quả quan trọng, bao gồm 15 bài báo nghiên cứu chất lượng cao được trình bày, 3 thỏa thuận hợp tác nghiên cứu được ký kết giữa TUMIKI và các tổ chức đối tác quốc tế, và hơn 50 dự án hợp tác tiềm năng được bàn thảo.</p>

      <h2>Triển vọng tương lai</h2>
      <p>Với thành công của hội thảo năm nay, TUMIKI đặt mục tiêu tổ chức sự kiện này hàng năm, góp phần thúc đẩy nghiên cứu và ứng dụng AI tại Việt Nam, đồng thời nâng cao vị thế của Viện trong cộng đồng khoa học quốc tế.</p>

      <blockquote>
        "Hội thảo này là minh chứng cho cam kết của TUMIKI trong việc đóng góp vào sự phát triển của công nghệ AI tại Việt Nam. Chúng tôi tin rằng những kiến thức và mối quan hệ được xây dựng tại đây sẽ tạo ra những đột phá quan trọng trong tương lai." - PGS.TS. Nguyễn Văn A, Viện trưởng TUMIKI
      </blockquote>
    `
  },
  '7': {
    id: '7',
    title: 'Công nghệ Blockchain trong Quản lý Chuỗi Cung ứng',
    excerpt: 'Nghiên cứu mới về ứng dụng blockchain để tăng cường minh bạch và hiệu quả trong quản lý chuỗi cung ứng cho doanh nghiệp Việt Nam.',
    image: 'https://images.unsplash.com/photo-1568952433726-3896e3881c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjE0NDg2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2024-03-18',
    author: 'TS. Nguyễn Văn A',
    category: 'Blockchain',
    tags: ['Blockchain', 'Supply Chain', 'Nghiên cứu'],
    readTime: '7 phút đọc',
    content: `
      <p>Công nghệ Blockchain đang ngày càng được ứng dụng rộng rãi trong nhiều lĩnh vực, đặc biệt là quản lý chuỗi cung ứng. Nghiên cứu mới của TUMIKI đã chỉ ra những lợi ích to lớn mà blockchain mang lại cho doanh nghiệp Việt Nam.</p>

      <h2>Tại sao Blockchain phù hợp với Quản lý Chuỗi Cung ứng?</h2>
      <p>Blockchain cung cấp một hệ thống ghi chép minh bạch, không thể thay đổi và phân tán, giúp tất cả các bên tham gia trong chuỗi cung ứng có thể theo dõi và xác minh thông tin một cách chính xác và nhanh chóng.</p>

      <h2>Các ưu điểm chính</h2>
      <ul>
        <li><strong>Minh bạch tuyệt đối:</strong> Mọi giao dịch đều được ghi lại và có thể xác minh</li>
        <li><strong>Giảm chi phí:</strong> Loại bỏ các trung gian không cần thiết</li>
        <li><strong>Tăng tốc độ:</strong> Giao dịch được xử lý nhanh hơn</li>
        <li><strong>Bảo mật cao:</strong> Dữ liệu được mã hóa và phân tán</li>
      </ul>

      <h2>Triển khai thực tế</h2>
      <p>TUMIKI đã hợp tác với nhiều doanh nghiệp để triển khai hệ thống blockchain cho chuỗi cung ứng, đạt được kết quả tích cực với việc giảm 30% thời gian xử lý và tăng 40% độ tin cậy trong theo dõi hàng hóa.</p>
    `
  }
};

// Related news mock data
const relatedNews = [
  {
    id: '2',
    title: 'Lễ Ký kết Hợp tác Chiến lược với Đại học Quốc gia',
    image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NjE1Mjc3MjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2024-03-10',
    category: 'Hợp tác'
  },
  {
    id: '3',
    title: 'TUMIKI Tham gia Triển lãm Công nghệ Quốc tế 2024',
    image: 'https://images.unsplash.com/photo-1568952433726-3896e3881c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjE0NDg2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2024-03-05',
    category: 'Triển lãm'
  },
  {
    id: '8',
    title: 'Xu hướng Phát triển IoT trong Smart City',
    image: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYxNTMxODY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2024-03-12',
    category: 'IoT'
  }
];

export default function NewsDetailPage() {
  const { id } = useParams<{ id: string }>();
  const news = newsData[id || '1'] || newsData['1'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-[#EE973C] transition-colors">Trang chủ</Link>
            <span>/</span>
            <Link to="/news" className="hover:text-[#EE973C] transition-colors">Tin tức</Link>
            <span>/</span>
            <span className="text-gray-900">{news.category}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <div className="relative h-96">
                <ImageWithFallback
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-[#EE973C] hover:bg-[#d67f2a]">{news.category}</Badge>
                </div>
              </div>

              <CardContent className="p-8">
                <h1 className="mb-6">{news.title}</h1>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(news.date).toLocaleDateString('vi-VN', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{news.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{news.readTime}</span>
                  </div>
                </div>

                <Separator className="mb-6" />

                <div className="prose prose-lg max-w-none mb-8" dangerouslySetInnerHTML={{ __html: news.content }} />

                <Separator className="mb-6" />

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {news.tags.map((tag: string, index: number) => (
                    <Badge key={index} variant="outline">
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Share buttons */}
                <div className="flex items-center gap-4 pt-4 border-t">
                  <span className="text-gray-600">Chia sẻ:</span>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="hover:bg-blue-50">
                      <Facebook className="w-4 h-4 text-blue-600" />
                    </Button>
                    <Button size="sm" variant="outline" className="hover:bg-sky-50">
                      <Twitter className="w-4 h-4 text-sky-500" />
                    </Button>
                    <Button size="sm" variant="outline" className="hover:bg-blue-50">
                      <Linkedin className="w-4 h-4 text-blue-700" />
                    </Button>
                    <Button size="sm" variant="outline" className="hover:bg-gray-50">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Related News */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="mb-4">Tin liên quan</h3>
                  <div className="space-y-4">
                    {relatedNews.map((item) => (
                      <Link
                        key={item.id}
                        to={`/news/${item.id}`}
                        className="block group"
                      >
                        <div className="flex gap-3">
                          <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg">
                            <ImageWithFallback
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm line-clamp-2 mb-1 group-hover:text-[#EE973C] transition-colors">
                              {item.title}
                            </p>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <Calendar className="w-3 h-3" />
                              <span>{new Date(item.date).toLocaleDateString('vi-VN')}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link to="/news">
                    <Button className="w-full mt-4" variant="outline">
                      Xem tất cả tin tức
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2">Đăng ký nhận tin</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Nhận thông tin mới nhất về nghiên cứu và hoạt động của Viện Công nghệ TUMIKI
                  </p>
                  <input
                    type="email"
                    placeholder="Email của bạn"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-[#EE973C] focus:border-transparent"
                  />
                  <Button className="w-full bg-[#EE973C] hover:bg-[#d67f2a]">
                    Đăng ký
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
