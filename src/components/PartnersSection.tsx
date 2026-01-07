import { ArrowRight } from 'lucide-react';

const partners = [
  { name: 'Partner 1', initial: 'VN' },
  { name: 'Partner 2', initial: 'TU' },
  { name: 'Partner 3', initial: 'AI' },
  { name: 'Partner 4', initial: 'IT' },
  { name: 'Partner 5', initial: 'DT' },
  { name: 'Partner 6', initial: 'BC' },
];

export function PartnersSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl mb-4">
            Đối tác chiến lược
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Chúng tôi tự hào hợp tác với các tổ chức hàng đầu trong nước và quốc tế
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 flex items-center justify-center hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-[#EE973C]/20 to-[#007FC0]/20 rounded-full flex items-center justify-center group-hover:from-[#EE973C] group-hover:to-[#007FC0] transition-all">
                  <span className="text-gray-600 group-hover:text-white transition-colors">{partner.initial}</span>
                </div>
                <p className="text-sm text-gray-500">{partner.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 text-[#007FC0] hover:gap-3 transition-all">
            Xem tất cả đối tác <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
