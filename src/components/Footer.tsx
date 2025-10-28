import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import logo from 'figma:asset/4bd5bedfb5adf096716df8d9096ed9d0a33461e5.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <img src={logo} alt="الكيان" className="h-40 w-auto" />
            </div>
            <p className="text-sm mb-6" dir="rtl">
              أثاث وأبواب ومطابخ مخصصة فاخرة مصنوعة بتميز ودقة
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-[#8B7355] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-[#8B7355] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-[#8B7355] transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div dir="rtl">
            <h4 className="text-white mb-4">روابط سريعة</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-[#8B7355] transition-colors">الرئيسية</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#8B7355] transition-colors">من نحن</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#8B7355] transition-colors">المشاريع</Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-[#8B7355] transition-colors">العمليات</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#8B7355] transition-colors">تواصل</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div dir="rtl">
            <h4 className="text-white mb-4">خدماتنا</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/furniture" className="hover:text-[#8B7355] transition-colors">أثاث مخصص</Link>
              </li>
              <li>
                <Link to="/doors" className="hover:text-[#8B7355] transition-colors">أبواب فاخرة</Link>
              </li>
              <li>
                <Link to="/kitchens" className="hover:text-[#8B7355] transition-colors">مطابخ راقية</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#8B7355] transition-colors">استشارة</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div dir="rtl">
            <h4 className="text-white mb-4">تواصل معنا</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#8B7355] mt-1 flex-shrink-0" />
                <span className="text-sm">الرياض، السعودية</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#8B7355] mt-1 flex-shrink-0" />
                <span className="text-sm dir-ltr text-left">+966 XX XXX XXXX</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#8B7355] mt-1 flex-shrink-0" />
                <span className="text-sm">info@alkiyan.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4" dir="rtl">
            <p className="text-sm">
              © {currentYear} الكيان. جميع الحقوق محفوظة
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-[#8B7355] transition-colors">الخصوصية</a>
              <a href="#" className="hover:text-[#8B7355] transition-colors">الشروط</a>
              <a href="#" className="hover:text-[#8B7355] transition-colors">ملفات تعريف الارتباط</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
