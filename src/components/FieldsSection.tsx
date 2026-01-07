import { Microscope, Cpu, Lightbulb, Users } from 'lucide-react';
import { Card } from './ui/card';

const fields = [
  {
    icon: Microscope,
    title: 'Nghiên cứu khoa học',
    description: 'Nghiên cứu và phát triển các giải pháp công nghệ tiên tiến, ứng dụng vào thực tế sản xuất',
    color: '#EE973C',
  },
  {
    icon: Cpu,
    title: 'Sản phẩm công nghệ',
    description: 'Phát triển và triển khai các sản phẩm công nghệ đột phá phục vụ nhu cầu thị trường',
    color: '#007FC0',
  },
  {
    icon: Lightbulb,
    title: 'Sáng chế',
    description: 'Đăng ký và bảo hộ các sáng chế, giải pháp hữu ích từ hoạt động nghiên cứu',
    color: '#EE973C',
  },
  {
    icon: Users,
    title: 'Dịch vụ tư vấn',
    description: 'Tư vấn chuyên sâu về công nghệ, chuyển giao tri thức và đào tạo chuyên môn',
    color: '#007FC0',
  },
];

export function FieldsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#EE973C]/10 text-[#EE973C] px-4 py-2 rounded-full mb-4">
            Lĩnh vực hoạt động
          </div>
          <h2 className="text-3xl lg:text-4xl mb-4">
            Các lĩnh vực chuyên môn của TUMIKI
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Chúng tôi tập trung vào nghiên cứu, phát triển và ứng dụng công nghệ trong nhiều lĩnh vực khác nhau
          </p>
        </div>

        {/* Fields Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fields.map((field, index) => {
            const Icon = field.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-t-4 group"
                style={{ borderTopColor: field.color }}
              >
                <div 
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${field.color}15` }}
                >
                  <Icon className="w-7 h-7" style={{ color: field.color }} />
                </div>
                <h3 className="text-xl mb-3" style={{ color: field.color }}>
                  {field.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {field.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
