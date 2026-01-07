import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const news = [
  {
    category: 'Tin hoạt động',
    title: 'TUMIKI tổ chức hội thảo công nghệ 2024',
    excerpt: 'Sự kiện quy tụ hơn 500 chuyên gia và doanh nghiệp công nghệ hàng đầu',
    date: '15/10/2024',
    image: 'https://images.unsplash.com/photo-1748256622734-92241ae7b43f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjE0OTg0MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    category: 'Tin chuyên ngành',
    title: 'Đột phá mới trong nghiên cứu AI cho y tế',
    excerpt: 'Nghiên cứu được công bố trên tạp chí khoa học quốc tế uy tín',
    date: '12/10/2024',
    image: 'https://images.unsplash.com/photo-1759866042499-d0b3e9d87ceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbnRpZmljJTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjE1NTYwMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    category: 'Sự kiện',
    title: 'Khai trương phòng Lab AI mới',
    excerpt: 'Phòng thí nghiệm được trang bị công nghệ hiện đại nhất khu vực',
    date: '08/10/2024',
    image: 'https://images.unsplash.com/photo-1669101602104-bfa264a17cce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwcmVzZWFyY2glMjBsYWJvcmF0b3J5fGVufDF8fHx8MTc2MTU1NjAyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function NewsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="inline-block bg-[#EE973C]/10 text-[#EE973C] px-4 py-2 rounded-full mb-4">
              Tin tức & Sự kiện
            </div>
            <h2 className="text-3xl lg:text-4xl">
              Cập nhật mới nhất
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-[#007FC0] hover:gap-3 transition-all">
            Xem tất cả <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer">
              <div className="aspect-video overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <Badge variant="secondary" className="bg-[#007FC0]/10 text-[#007FC0] mb-3">
                  {item.category}
                </Badge>
                <h3 className="text-xl mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {item.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </div>
                  <button className="text-[#EE973C] flex items-center gap-2 hover:gap-3 transition-all">
                    Đọc thêm <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="text-center mt-8 md:hidden">
          <button className="inline-flex items-center gap-2 text-[#007FC0] hover:gap-3 transition-all">
            Xem tất cả tin tức <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
