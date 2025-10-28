import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, ChefHat, DoorOpen, Armchair } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const categories = [
  {
    id: 'kitchens',
    title: 'مطابخ راقية',
    description: 'حلول مطابخ متكاملة تجمع بين الوظائف العملية والفخامة',
    icon: ChefHat,
    image: 'https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwbHV4dXJ5fGVufDF8fHx8MTc2MTQwMjEzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    link: '/kitchens'
  },
  {
    id: 'doors',
    title: 'أبواب فاخرة',
    description: 'أبواب مصنوعة بحرفية عالية تجمع بين الأمان والجمال',
    icon: DoorOpen,
    image: 'https://images.unsplash.com/photo-1758384077439-8282cc397b34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZG9vcnMlMjBlbnRyYW5jZXxlbnwxfHx8fDE3NjE0Mzg3Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    link: '/doors'
  },
  {
    id: 'furniture',
    title: 'أثاث مخصص',
    description: 'قطع أثاث فريدة مصممة حسب مواصفاتك الخاصة',
    icon: Armchair,
    image: 'https://images.unsplash.com/photo-1638885930125-85350348d266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2MTQxNjAzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    link: '/furniture'
  }
];

const featuredProjects = [
  {
    id: 1,
    title: 'مطبخ فيلا عصري',
    category: 'مطابخ',
    image: 'https://images.unsplash.com/photo-1707823943230-b363677b3389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwY2FiaW5ldCUyMGRlc2lnbnxlbnwxfHx8fDE3NjE0MzkwNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 2,
    title: 'غرفة نوم رئيسية فاخرة',
    category: 'أثاث',
    image: 'https://images.unsplash.com/photo-1680503146476-abb8c752e1f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWRyb29tJTIwZnVybml0dXJlJTIwbHV4dXJ5fGVufDF8fHx8MTc2MTQzOTA3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 3,
    title: 'أبواب مدخل فخمة',
    category: 'أبواب',
    image: 'https://images.unsplash.com/photo-1568374247505-5bb7ecac3119?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBkb29yJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxNDM5MDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 4,
    title: 'غرفة طعام معاصرة',
    category: 'أثاث',
    image: 'https://images.unsplash.com/photo-1704040686446-428673c1c887?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW5pbmclMjByb29tJTIwZnVybml0dXJlfGVufDF8fHx8MTc2MTQzOTA3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function HomePage() {
  const scrollToCategories = () => {
    const element = document.getElementById('categories');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1680503146476-abb8c752e1f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmdXJuaXR1cmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjE0Mzg3Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center" dir="rtl">
          <div className="max-w-3xl">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-[#8B7355]/20 border border-[#8B7355]/50 text-[#8B7355] rounded-full">
                تصميم فاخر مخصص
              </span>
            </div>
            <h1 className="text-white mb-6">
              نصنع الأناقة الخالدة
              <span className="block mt-2 text-[#8B7355]">للأثاث الراقي والتصميم المخصص</span>
            </h1>
            <p className="text-xl text-neutral-200 mb-8 max-w-2xl">
              الكيان متخصص في الأثاث والأبواب والمطابخ المخصصة التي تحول المساحات إلى تحف فنية. 
              كل قطعة مصنوعة بدقة متناهية لتعكس رؤيتك الفريدة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-[#8B7355] hover:bg-[#6F5C44] text-white px-8">
                  احجز استشارة
                </Button>
              </Link>
              <Button
                onClick={scrollToCategories}
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-neutral-900"
              >
                استكشف منتجاتنا
              </Button>
            </div>
          </div>
        </div>

        <button
          onClick={scrollToCategories}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-gradient-to-b from-white to-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-8 text-neutral-800">
            مرحباً بكم في الكيان
          </h2>
          <p className="text-xl leading-relaxed text-neutral-700 mb-6" dir="rtl">
            حيث يلتقي الإبداع بالحرفية لنصنع لكم منتجات تجمع بين الجمال، المتانة، والدقة في التفاصيل.
          </p>
          <p className="text-xl leading-relaxed text-neutral-600" dir="rtl">
            منذ تأسيسنا، التزمنا بتقديم حلول عصرية للأثاث والأبواب والنوافذ، تناسب كل الأذواق وتواكب أحدث الاتجاهات في عالم التصميم والديكور.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" dir="rtl">
          <div className="text-center mb-16">
            <span className="text-[#8B7355] tracking-wider uppercase">منتجاتنا</span>
            <h2 className="mt-4 mb-4">
              استكشف مجموعاتنا
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              اكتشف فئاتنا الرئيسية الثلاث من الحلول المصنوعة خصيصًا لمنزلك
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Card key={category.id} className="overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="aspect-[4/3] overflow-hidden">
                    <ImageWithFallback
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6" dir="rtl">
                    <div className="w-12 h-12 bg-[#8B7355]/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-[#8B7355]" size={24} />
                    </div>
                    <h3 className="mb-2">
                      {category.title}
                    </h3>
                    <p className="text-neutral-600 mb-6">{category.description}</p>
                    <Link to={category.link}>
                      <Button variant="ghost" className="text-[#8B7355] hover:text-[#6F5C44] p-0 h-auto group">
                        عرض المجموعة <ArrowRight className="mr-2 group-hover:-translate-x-1 transition-transform rotate-180" size={16} />
                      </Button>
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" dir="rtl">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-[#8B7355] tracking-wider uppercase">أعمالنا الحديثة</span>
              <h2 className="mt-4">
                مشاريع مميزة
              </h2>
            </div>
            <Link to="/projects">
              <Button variant="outline" className="border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355] hover:text-white">
                عرض جميع المشاريع
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project) => (
              <Link key={project.id} to="/projects" className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-3">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white" dir="rtl">
                      <div className="text-sm text-[#C9A97A] mb-1">{project.category}</div>
                    </div>
                  </div>
                </div>
                <h4 className="group-hover:text-[#8B7355] transition-colors">{project.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#8B7355]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" dir="rtl">
          <h2 className="text-white mb-6">
            هل أنت مستعد لتحويل مساحتك؟
          </h2>
          <p className="text-xl text-neutral-50 mb-8">
            دعنا نناقش رؤيتك ونصنع شيئًا استثنائيًا معًا. 
            فريقنا مستعد لتحويل أفكارك إلى واقع بحرفية استثنائية.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-[#8B7355] hover:bg-neutral-100 px-8">
                احصل على عرض سعر مجاني
              </Button>
            </Link>
            <Link to="/process">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#8B7355]">
                تعرف على عمليتنا
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
