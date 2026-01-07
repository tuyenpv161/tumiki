import { useState } from 'react';
import { ChevronRight, Send, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { toast } from 'sonner@2.0.3';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../components/ui/breadcrumb';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    firmName: '',
    jobTitle: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success('Tin nhắn đã được gửi thành công!', {
      description: 'Chúng tôi sẽ phản hồi trong vòng 1 ngày làm việc.',
    });

    setFormData({
      name: '',
      email: '',
      firmName: '',
      jobTitle: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="text-gray-600 hover:text-gray-900">Trang chủ</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="w-4 h-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-gray-900">Liên hệ</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Content */}
            <div>
              <div className="inline-block bg-[#EE973C]/10 text-[#EE973C] px-3 py-1 rounded text-sm mb-6">
                Liên hệ với chúng tôi
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl mb-6 text-gray-900">
                Cần hỗ trợ?<br />
                Chúng tôi luôn sẵn sàng.
              </h1>

              {/* Existing Customers */}
              <div className="mb-10 pt-8 border-t border-gray-200">
                <p className="text-gray-600 mb-2">Cần hỗ trợ?</p>
                <p className="text-gray-600">
                  Liên hệ với đội ngũ của chúng tôi theo số{' '}
                  <a href="tel:19006868" className="text-[#007FC0] hover:underline">
                    1900 6868
                  </a>{' '}
                  hoặc email{' '}
                  <a href="mailto:support@tumiki.edu.vn" className="text-[#007FC0] hover:underline">
                    support@tumiki.edu.vn
                  </a>
                </p>
              </div>

              {/* Our HQ */}
              <div>
                <h3 className="text-lg mb-3 text-gray-900">Trụ sở chính</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Tầng 10, Tòa nhà Innovation Tower</p>
                  <p>Số 123 Đường Láng, Đống Đa</p>
                  <p>Hà Nội, Việt Nam</p>
                  <p className="pt-2">1900 6868</p>
                </div>
              </div>
            </div>

            {/* Right Content - Contact Form */}
            <div>
              <Card className="border-2 border-[#EE973C] shadow-lg">
                <div className="p-8">
                  <div className="mb-6">
                    <p className="text-gray-700 mb-4">
                      Chúng tôi cam kết phản hồi trong vòng 1 ngày làm việc.
                    </p>
                    <p className="text-gray-600">
                      Dù bạn có câu hỏi về giá cả, triển khai hay bất kỳ vấn đề gì khác, 
                      chúng tôi luôn sẵn sàng hỗ trợ. Điền form dưới đây và đội ngũ 
                      Viện Công nghệ TUMIKI sẽ liên hệ sớm nhất.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-gray-700">
                          Họ tên *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder=""
                          value={formData.name}
                          onChange={handleChange}
                          className="mt-1 bg-gray-50 border-gray-300"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-gray-700">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder=""
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-1 bg-gray-50 border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firmName" className="text-gray-700">
                          Công ty *
                        </Label>
                        <Input
                          id="firmName"
                          name="firmName"
                          type="text"
                          required
                          placeholder=""
                          value={formData.firmName}
                          onChange={handleChange}
                          className="mt-1 bg-gray-50 border-gray-300"
                        />
                      </div>

                      <div>
                        <Label htmlFor="jobTitle" className="text-gray-700">
                          Chức vụ *
                        </Label>
                        <Input
                          id="jobTitle"
                          name="jobTitle"
                          type="text"
                          required
                          placeholder=""
                          value={formData.jobTitle}
                          onChange={handleChange}
                          className="mt-1 bg-gray-50 border-gray-300"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-gray-700">
                        Nội dung *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder=""
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 bg-gray-50 border-gray-300 min-h-[120px]"
                      />
                    </div>

                    <p className="text-xs text-gray-500">
                      Bằng việc gửi form này, bạn đồng ý cho phép chúng tôi lưu trữ và xử lý 
                      thông tin cá nhân đã cung cấp.
                    </p>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[rgb(0,127,192)] hover:bg-gray-800 text-[rgb(255,255,255)] py-6"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          Đang gửi...
                        </>
                      ) : (
                        <>
                          Gửi tin nhắn
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
