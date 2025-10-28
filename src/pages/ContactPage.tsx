import { useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { toast } from 'sonner@2.0.3';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      toast.error('الرجاء ملء جميع الحقول المطلوبة / Please fill in all required fields');
      return;
    }

    console.log('Form submitted:', formData);
    toast.success('شكراً لك! سنتواصل معك قريباً / Thank you! We will contact you soon.');
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-amber-600 tracking-wider uppercase">Contact Us / تواصل معنا</span>
            <h1 className="mt-4 mb-6">
              Let's Start Your Project
              <span className="block mt-2 text-amber-600">لنبدأ مشروعك</span>
            </h1>
            <p className="text-xl text-neutral-600">
              Ready to transform your space? Get in touch with our team for a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="mb-6">معلومات التواصل</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-amber-600" size={20} />
                    </div>
                    <div>
                      <div className="mb-1">الموقع / Location</div>
                      <p className="text-neutral-600">
                        الرياض، المملكة العربية السعودية<br />
                        Riyadh, Saudi Arabia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-amber-600" size={20} />
                    </div>
                    <div>
                      <div className="mb-1">الهاتف / Phone</div>
                      <p className="text-neutral-600 dir-ltr text-left">
                        +966 XX XXX XXXX
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-amber-600" size={20} />
                    </div>
                    <div>
                      <div className="mb-1">البريد الإلكتروني / Email</div>
                      <p className="text-neutral-600">
                        info@alkiyan.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="text-amber-600" size={20} />
                    </div>
                    <div>
                      <div className="mb-1">ساعات العمل / Business Hours</div>
                      <div className="space-y-2 text-neutral-600">
                        <div className="flex justify-between">
                          <span>السبت - الخميس</span>
                          <span className="dir-ltr">9:00 - 18:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sat - Thu</span>
                          <span className="dir-ltr">9:00 - 18:00</span>
                        </div>
                        <div>
                          <span>الجمعة: مغلق / Friday: Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-amber-50 rounded-lg border border-amber-200">
                <h4 className="mb-3">لماذا تختار الكيان؟</h4>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">✓</span>
                    <span>15+ سنة من الخبرة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">✓</span>
                    <span>تصاميم مخصصة حسب الطلب</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">✓</span>
                    <span>مواد عالية الجودة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">✓</span>
                    <span>ضمان وخدمة ما بعد البيع</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-neutral-50 p-8 rounded-lg">
                <h3 className="mb-6">أرسل رسالة / Send a Message</h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <Label htmlFor="name">الاسم الكامل / Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="أدخل اسمك / Enter your name"
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">البريد الإلكتروني / Email *</Label>
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
                      <Label htmlFor="phone">رقم الهاتف / Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+966 XX XXX XXXX"
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="service">الخدمة المطلوبة / Service *</Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => setFormData({...formData, service: value})}
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="اختر الخدمة / Select service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="furniture">أثاث مخصص / Custom Furniture</SelectItem>
                          <SelectItem value="doors">أبواب فاخرة / Premium Doors</SelectItem>
                          <SelectItem value="kitchens">مطابخ راقية / Luxury Kitchens</SelectItem>
                          <SelectItem value="consultation">استشارة عامة / General Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <Label htmlFor="message">تفاصيل المشروع / Project Details</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="أخبرنا عن متطلبات مشروعك... / Tell us about your project requirements..."
                      rows={6}
                      className="mt-2"
                    />
                  </div>

                  <Button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white w-full md:w-auto px-8">
                    <Send className="ml-2 mr-2" size={18} />
                    إرسال / Send Message
                  </Button>

                  <p className="text-sm text-neutral-500 mt-4">
                    * الحقول المطلوبة / Required fields
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">موقعنا / Our Location</h2>
            <p className="text-xl text-neutral-600">
              قم بزيارة معرضنا في الرياض / Visit our showroom in Riyadh
            </p>
          </div>
          
          <div className="aspect-video bg-neutral-200 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="mx-auto mb-4 text-amber-600" size={48} />
              <p className="text-neutral-600">Map Integration Placeholder</p>
              <p className="text-sm text-neutral-500 mt-2">الرياض، المملكة العربية السعودية</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
