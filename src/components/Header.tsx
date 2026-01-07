import image_09bf5d9933ccea3214029d5bed42e10596dee19d from 'figma:asset/09bf5d9933ccea3214029d5bed42e10596dee19d.png';
import { useState } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Link, useLocation } from 'react-router-dom';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import tumikiLogo from 'figma:asset/70e4d24a731948f862824b86bfaabc1fad4f5296.png';

// Flag SVG Components
const VietnamFlag = () => (
  <svg width="20" height="15" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="30" height="20" fill="#DA251D"/>
    <path d="M15 4L16.545 9.27H22.118L17.287 12.71L18.832 17.98L14 14.54L9.168 17.98L10.713 12.71L5.882 9.27H11.455L15 4Z" fill="#FFFF00"/>
  </svg>
);

const UKFlag = () => (
  <svg width="20" height="15" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="30" height="20" fill="#012169"/>
    <path d="M0 0L30 20M30 0L0 20" stroke="white" strokeWidth="4"/>
    <path d="M0 0L30 20M30 0L0 20" stroke="#C8102E" strokeWidth="2.5"/>
    <path d="M15 0V20M0 10H30" stroke="white" strokeWidth="6"/>
    <path d="M15 0V20M0 10H30" stroke="#C8102E" strokeWidth="4"/>
  </svg>
);

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('vi');
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/news') {
      return location.pathname.startsWith('/news');
    }
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center gap-2">
                <img src={image_09bf5d9933ccea3214029d5bed42e10596dee19d} alt="TUMIKI Logo" className="h-16 w-auto py-[4px] px-[0px]" />
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${
                isActive('/') ? 'text-[#EE973C]' : 'text-gray-700 hover:text-[#EE973C]'
              }`}
            >
              Trang chủ
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors text-[16px] ${
                isActive('/about') ? 'text-[#EE973C]' : 'text-gray-700 hover:text-[#EE973C]'
              }`}
            >
              Về chúng tôi
            </Link>
            <Link 
              to="/fields" 
              className={`transition-colors ${
                isActive('/fields') ? 'text-[#EE973C]' : 'text-gray-700 hover:text-[#EE973C]'
              }`}
            >
              Lĩnh vực hoạt động
            </Link>
            <Link 
              to="/news" 
              className={`transition-colors ${
                isActive('/news') ? 'text-[#EE973C]' : 'text-gray-700 hover:text-[#EE973C]'
              }`}
            >
              Tin tức & Sự kiện
            </Link>
            <Link 
              to="/partners" 
              className={`transition-colors ${
                isActive('/partners') ? 'text-[#EE973C]' : 'text-gray-700 hover:text-[#EE973C]'
              }`}
            >
              Đối tác
            </Link>
          </nav>

          {/* Language Switcher and CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-[70px] border-gray-300">
                <div className="flex items-center gap-2 p-[0px]">
                  {language === 'vi' ? <VietnamFlag /> : <UKFlag />}
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="vi">
                  <div className="flex items-center gap-2">
                    <VietnamFlag />
                    <span>Tiếng Việt</span>
                  </div>
                </SelectItem>
                <SelectItem value="en">
                  <div className="flex items-center gap-2">
                    <UKFlag />
                    <span>English</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
            <Link to="/contact">
              <Button className="bg-[#EE973C] hover:bg-[#d67f2a]">
                Liên hệ ngay
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className={`transition-colors ${
                  isActive('/') ? 'text-[#EE973C]' : 'text-gray-700 hover:text-[#EE973C]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Trang chủ
              </Link>
              <Link 
                to="/about" 
                className={`transition-colors ${
                  isActive('/about') ? 'text-[#EE973C]' : 'text-gray-700 hover:text-[#EE973C]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Về chúng tôi
              </Link>
              <Link 
                to="/fields" 
                className={`transition-colors ${
                  isActive('/fields') ? 'text-[#EE973C]' : 'text-gray-700 hover:text-[#EE973C]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Lĩnh vực hoạt động
              </Link>
              <Link 
                to="/news" 
                className={`transition-colors ${
                  isActive('/news') ? 'text-[#EE973C]' : 'text-gray-700 hover:text-[#EE973C]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Tin tức & Sự kiện
              </Link>
              <Link 
                to="/partners" 
                className={`transition-colors ${
                  isActive('/partners') ? 'text-[#EE973C]' : 'text-gray-700 hover:text-[#EE973C]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Đối tác
              </Link>
              <div className="pt-3 border-t border-gray-200">
                <div className="mb-3">
                  <label className="text-sm text-gray-600 mb-2 block">Ngôn ngữ / Language</label>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger className="w-full">
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
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-[#EE973C] hover:bg-[#d67f2a]">
                    Liên hệ ngay
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
