import image_09bf5d9933ccea3214029d5bed42e10596dee19d from 'figma:asset/09bf5d9933ccea3214029d5bed42e10596dee19d.png';
import { useState } from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export function Footer() {
  const [language, setLanguage] = useState('vi');
  
  return (
    <footer className="bg-gradient-to-br from-[#1e3a5f] to-[#007FC0] text-white min-h-[75vh] flex flex-col justify-between relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EE973C]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full relative z-10 flex-1 flex flex-col justify-center">
        {/* Top Section - Logo & Description */}
        <div className="text-center mb-16">
          <Link to="/" className="inline-flex items-center justify-center gap-3 mb-6">
            <img src={image_09bf5d9933ccea3214029d5bed42e10596dee19d} alt="TUMIKI Logo" className="h-20 w-auto" />
          </Link>
          <h2 className="text-3xl mb-4 text-white">Viện Công nghệ TUMIKI</h2>
          <p className="text-white/90 max-w-3xl mx-auto leading-relaxed text-lg">
            Viện Công nghệ TUMIKI là đơn vị tiên phong trong nghiên cứu và phát triển công nghệ tiên tiến tại Việt Nam. 
            Với sứ mệnh đổi mới sáng tạo và dẫn đầu xu hướng chuyển đổi số, chúng tôi cam kết mang đến những giải pháp 
            công nghệ đột phá, góp phần thúc đẩy sự phát triển bền vững của xã hội và nền kinh tế tri thức.
          </p>
          
          {/* Social Media */}
          <div className="flex gap-4 justify-center mt-8">
            <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#EE973C] transition-all hover:scale-110">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#EE973C] transition-all hover:scale-110">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#EE973C] transition-all hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#EE973C] transition-all hover:scale-110">
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-12"></div>

        {/* Middle Section - Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 max-w-5xl mx-auto w-full">
          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl mb-6 text-white">Liên kết nhanh</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-white/80 hover:text-[#EE973C] transition-colors inline-block">
                  Giới thiệu chung
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-[#EE973C] transition-colors inline-block">
                  Cơ cấu tổ chức
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-[#EE973C] transition-colors inline-block">
                  Chức năng nhiệm vụ
                </Link>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-[#EE973C] transition-colors inline-block">
                  Nghiên cứu khoa học
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h3 className="text-xl mb-6 text-white">Dịch vụ</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/80 hover:text-[#EE973C] transition-colors inline-block">
                  Nghiên cứu & Phát triển
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-[#EE973C] transition-colors inline-block">
                  Sản phẩm công nghệ
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-[#EE973C] transition-colors inline-block">
                  Tư vấn chuyên môn
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-[#EE973C] transition-colors inline-block">
                  Đào tạo
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="text-xl mb-6 text-white">Liên hệ</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span className="text-white/80 text-left">
                  123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh
                </span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+84123456789" className="text-white/80 hover:text-[#EE973C] transition-colors">
                  (+84) 123 456 789
                </a>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:info@tumiki.vn" className="text-white/80 hover:text-[#EE973C] transition-colors">
                  info@tumiki.vn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <p className="text-white/60 text-sm">
                © 2025 Viện Công nghệ TUMIKI. All rights reserved.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-white/60 hover:text-[#EE973C] transition-colors">
                  Chính sách bảo mật
                </a>
                <a href="#" className="text-white/60 hover:text-[#EE973C] transition-colors">
                  Điều khoản sử dụng
                </a>
              </div>
              <div className="border-l border-white/20 pl-4 hidden sm:block" />
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-[140px] bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    <SelectValue />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vi">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🇻🇳</span>
                      <span>Tiếng Việt</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="en">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🇬🇧</span>
                      <span>English</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
