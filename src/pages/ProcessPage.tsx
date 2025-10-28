import { Link } from 'react-router-dom';
import { MessageCircle, Pencil, Hammer, Truck, CheckCircle, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const processSteps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'الاستشارة الأولية',
    titleEn: 'Initial Consultation',
    description: 'نبدأ بفهم احتياجاتك ورؤيتك. نناقش متطلبات المشروع، الميزانية، والجدول الزمني.',
    descriptionEn: 'We start by understanding your needs and vision. We discuss project requirements, budget, and timeline.',
    duration: '1-2 أيام / days'
  },
  {
    number: '02',
    icon: Pencil,
    title: 'التصميم والتخطيط',
    titleEn: 'Design & Planning',
    description: 'يقوم فريق التصميم بإنشاء رسومات ثلاثية الأبعاد ومخططات مفصلة لموافقتك.',
    descriptionEn: 'Our design team creates 3D renderings and detailed plans for your approval.',
    duration: '5-7 أيام / days'
  },
  {
    number: '03',
    icon: CheckCircle,
    title: 'اختيار المواد',
    titleEn: 'Material Selection',
    description: 'نساعدك في اختيار أفضل المواد والتشطيبات من مجموعتنا الفاخرة.',
    descriptionEn: 'We help you select the best materials and finishes from our premium collection.',
    duration: '2-3 أيام / days'
  },
  {
    number: '04',
    icon: Hammer,
    title: 'التصنيع',
    titleEn: 'Manufacturing',
    description: 'يبدأ حرفيونا المهرة في تصنيع قطعك المخصصة بدقة واهتمام بالتفاصيل.',
    descriptionEn: 'Our skilled craftsmen begin manufacturing your custom pieces with precision and attention to detail.',
    duration: '2-4 أسابيع / weeks'
  },
  {
    number: '05',
    icon: Clock,
    title: 'مراقبة الجودة',
    titleEn: 'Quality Control',
    description: 'كل قطعة تخضع لفحص دقيق للتأكد من مطابقتها لمعايير الجودة العالية.',
    descriptionEn: 'Each piece undergoes rigorous inspection to ensure it meets our high-quality standards.',
    duration: '2-3 أيام / days'
  },
  {
    number: '06',
    icon: Truck,
    title: 'التوصيل والتركيب',
    titleEn: 'Delivery & Installation',
    description: 'نقوم بالتوصيل والتركيب الاحترافي، مع التأكد من أن كل شيء مثالي.',
    descriptionEn: 'We provide professional delivery and installation, ensuring everything is perfect.',
    duration: '1-2 أيام / days'
  }
];

const whyChooseUs = [
  {
    title: 'خبرة وحرفية',
    titleEn: 'Expertise & Craftsmanship',
    description: '15+ سنة من الخبرة في تصنيع الأثاث والأبواب والمطابخ الفاخرة'
  },
  {
    title: 'تصاميم مخصصة',
    titleEn: 'Custom Designs',
    description: 'كل مشروع فريد ومصمم حسب احتياجاتك الخاصة'
  },
  {
    title: 'مواد متميزة',
    titleEn: 'Premium Materials',
    description: 'نستخدم فقط أفضل المواد من موردين موثوقين'
  },
  {
    title: 'ضمان الجودة',
    titleEn: 'Quality Guarantee',
    description: 'ضمان شامل على جميع منتجاتنا وخدمة ما بعد البيع'
  }
];

export function ProcessPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-amber-600 tracking-wider uppercase">عمليتنا / Our Process</span>
            <h1 className="mt-4 mb-6">
              كيف نعمل
              <span className="block mt-2 text-amber-600">From Vision to Reality</span>
            </h1>
            <p className="text-xl text-neutral-600">
              نحول رؤيتك إلى واقع من خلال عملية شفافة ومنظمة تضمن تحقيق توقعاتك
              <br />
              We transform your vision into reality through a transparent and organized process
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={step.number} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-6xl text-amber-600/20">{step.number}</div>
                      <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                        <Icon className="text-amber-600" size={28} />
                      </div>
                    </div>
                    <h2 className="mb-3">
                      {step.title}
                      <span className="block text-neutral-600 mt-1">{step.titleEn}</span>
                    </h2>
                    <p className="text-neutral-600 mb-4">
                      {step.description}
                      <br />
                      <span className="text-sm italic">{step.descriptionEn}</span>
                    </p>
                    <div className="inline-flex items-center gap-2 text-sm text-amber-600 bg-amber-50 px-4 py-2 rounded-full">
                      <Clock size={16} />
                      <span>{step.duration}</span>
                    </div>
                  </div>

                  {/* Image/Visual */}
                  <div className="flex-1">
                    <div className="aspect-video bg-neutral-100 rounded-lg overflow-hidden">
                      <ImageWithFallback
                        src={index % 3 === 0 
                          ? 'https://images.unsplash.com/photo-1620398399429-fa1c5fbc8668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmFmdHNtYW4lMjB3b3Jrc2hvcCUyMHdvb2R8ZW58MXx8fHwxNzYxNDM4NzI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                          : index % 3 === 1
                          ? 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjEzNTAxODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                          : 'https://images.unsplash.com/photo-1680503146476-abb8c752e1f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmdXJuaXR1cmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjE0Mzg3Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                        }
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-16 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="mb-4">
            الجدول الزمني المتوقع
            <span className="block mt-2">Expected Timeline</span>
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            من الاستشارة الأولى إلى التركيب النهائي
            <br />
            From initial consultation to final installation
          </p>
          <div className="text-5xl mb-4">3-6</div>
          <p className="text-xl text-amber-100">
            أسابيع في المتوسط / weeks on average
          </p>
          <p className="text-sm text-amber-200 mt-4">
            *يختلف حسب حجم المشروع وتعقيده / *Varies based on project size and complexity
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">
              لماذا تختار الكيان؟
              <span className="block mt-2 text-neutral-600">Why Choose Alkiyan?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">{index + 1}</span>
                </div>
                <h3 className="mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-600 mb-2">{item.titleEn}</p>
                <p className="text-sm text-neutral-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">
            مستعد للبدء؟
            <span className="block mt-2">Ready to Get Started?</span>
          </h2>
          <p className="text-xl text-neutral-600 mb-8">
            تواصل معنا اليوم لبدء رحلتك نحو مساحة أحلامك
            <br />
            Contact us today to begin your journey to your dream space
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8">
                احجز استشارة / Book Consultation
              </Button>
            </Link>
            <Link to="/projects">
              <Button size="lg" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white">
                شاهد أعمالنا / View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
