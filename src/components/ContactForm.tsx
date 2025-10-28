import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner@2.0.3';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Frontend-only validation and mock submission
    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      toast.error('يرجى ملء جميع الحقول المطلوبة');
      return;
    }

    console.log('Form submitted:', formData);
    toast.success('شكراً لك! سنتواصل معك قريباً.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" dir="rtl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#8B7355] tracking-wider uppercase">تواصل معنا</span>
          <h2 className="mt-4 mb-4">
            اطلب استشارة
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            هل أنت مستعد لبدء مشروعك؟ تواصل معنا اليوم للحصول على استشارة وعرض أسعار مجاني.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="mb-6">معلومات التواصل</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#8B7355]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#8B7355]" size={20} />
                  </div>
                  <div>
                    <div className="mb-1">الموقع</div>
                    <p className="text-neutral-600">
                      المملكة العربية السعودية<br />
                      الرياض
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#8B7355]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#8B7355]" size={20} />
                  </div>
                  <div>
                    <div className="mb-1">الهاتف</div>
                    <p className="text-neutral-600" dir="ltr">
                      +966 XX XXX XXXX
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#8B7355]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#8B7355]" size={20} />
                  </div>
                  <div>
                    <div className="mb-1">البريد الإلكتروني</div>
                    <p className="text-neutral-600">
                      info@alkiyan.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#8B7355]/5 rounded-lg border border-[#8B7355]/20">
              <h4 className="mb-3">ساعات العمل</h4>
              <div className="space-y-2 text-neutral-700">
                <div className="flex justify-between">
                  <span>السبت - الخميس</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>الجمعة</span>
                  <span>مغلق</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="name">الاسم الكامل *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="أدخل اسمك"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">البريد الإلكتروني *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="example@email.com"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">رقم الهاتف *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+966 XX XXX XXXX"
                    required
                    className="mt-2"
                    dir="ltr"
                  />
                </div>

                <div>
                  <Label htmlFor="service">الخدمة المطلوبة *</Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({...formData, service: value})}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="اختر خدمة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="furniture">أثاث مخصص</SelectItem>
                      <SelectItem value="doors">أبواب فاخرة</SelectItem>
                      <SelectItem value="kitchens">مطابخ راقية</SelectItem>
                      <SelectItem value="consultation">استشارة عامة</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mb-6">
                <Label htmlFor="message">تفاصيل المشروع</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="أخبرنا عن متطلبات مشروعك..."
                  rows={6}
                  className="mt-2"
                />
              </div>

              <Button type="submit" className="bg-[#8B7355] hover:bg-[#6F5C44] text-white w-full md:w-auto px-8">
                <Send className="ml-2" size={18} />
                إرسال الرسالة
              </Button>

              <p className="text-sm text-neutral-500 mt-4">
                * الحقول المطلوبة. نحن نحترم خصوصيتك ولن نشارك معلوماتك أبداً.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
