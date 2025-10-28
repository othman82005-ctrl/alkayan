import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const categories = ['الكل / All', 'المطابخ / Kitchens', 'الأبواب / Doors', 'الأثاث / Furniture'];

const projects = [
  {
    id: 1,
    title: 'فيلا حديثة بالرياض',
    titleEn: 'Modern Villa in Riyadh',
    category: 'الأثاث / Furniture',
    image: 'https://images.unsplash.com/photo-1680503146476-abb8c752e1f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmdXJuaXR1cmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjE0Mzg3Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'أثاث صالة كامل مع تصميم معاصر',
    descriptionEn: 'Complete living room furniture with contemporary design',
    year: '2024',
    location: 'الرياض'
  },
  {
    id: 2,
    title: 'مطبخ فاخر',
    titleEn: 'Luxury Kitchen Design',
    category: 'المطابخ / Kitchens',
    image: 'https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwbHV4dXJ5fGVufDF8fHx8MTc2MTQwMjEzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'مطبخ عصري بتشطيبات راقية',
    descriptionEn: 'Modern kitchen with premium finishes',
    year: '2024',
    location: 'جدة'
  },
  {
    id: 3,
    title: 'أبواب مدخل فخمة',
    titleEn: 'Grand Entrance Doors',
    category: 'الأبواب / Doors',
    image: 'https://images.unsplash.com/photo-1758384077439-8282cc397b34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZG9vcnMlMjBlbnRyYW5jZXxlbnwxfHx8fDE3NjE0Mzg3Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'أبواب خشبية مخصصة للمدخل الرئيسي',
    descriptionEn: 'Custom wooden entrance doors',
    year: '2024',
    location: 'الدمام'
  },
  {
    id: 4,
    title: 'تصميم داخلي راقي',
    titleEn: 'Premium Interior Design',
    category: 'الأثاث / Furniture',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjEzNTAxODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'تصميم وأثاث داخلي متكامل',
    descriptionEn: 'Complete interior design and furniture',
    year: '2023',
    location: 'الرياض'
  },
  {
    id: 5,
    title: 'مجموعة غرفة نوم',
    titleEn: 'Master Bedroom Suite',
    category: 'الأثاث / Furniture',
    image: 'https://images.unsplash.com/photo-1638885930125-85350348d266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2MTQxNjAzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'أثاث غرفة نوم فاخر مصنوع حسب الطلب',
    descriptionEn: 'Luxury custom bedroom furniture',
    year: '2023',
    location: 'الخبر'
  },
  {
    id: 6,
    title: 'مطبخ كلاسيكي',
    titleEn: 'Classic Kitchen',
    category: 'المطابخ / Kitchens',
    image: 'https://images.unsplash.com/photo-1642979427252-13d5fd18bb61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3aGl0ZSUyMGtpdGNoZW58ZW58MXx8fHwxNzYxNDM5MTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'تصميم مطبخ كلاسيكي بلمسات عصرية',
    descriptionEn: 'Classic kitchen design with modern touches',
    year: '2023',
    location: 'مكة'
  },
  {
    id: 7,
    title: 'أبواب داخلية',
    titleEn: 'Interior Doors Collection',
    category: 'الأبواب / Doors',
    image: 'https://images.unsplash.com/photo-1568374247505-5bb7ecac3119?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBkb29yJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxNDM5MDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'مجموعة أبواب داخلية بتصميم معاصر',
    descriptionEn: 'Contemporary interior doors collection',
    year: '2024',
    location: 'الرياض'
  },
  {
    id: 8,
    title: 'غرفة طعام فاخرة',
    titleEn: 'Luxury Dining Room',
    category: 'الأثاث / Furniture',
    image: 'https://images.unsplash.com/photo-1704040686446-428673c1c887?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW5pbmclMjByb29tJTIwZnVybml0dXJlfGVufDF8fHx8MTc2MTQzOTA3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'طاولة طعام وكراسي مصنوعة يدوياً',
    descriptionEn: 'Handcrafted dining table and chairs',
    year: '2023',
    location: 'جدة'
  },
  {
    id: 9,
    title: 'مطبخ إيطالي',
    titleEn: 'Italian Style Kitchen',
    category: 'المطابخ / Kitchens',
    image: 'https://images.unsplash.com/photo-1621494548002-bfc916172ead?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkYXJrJTIwa2l0Y2hlbnxlbnwxfHx8fDE3NjE0MzkxOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'مطبخ بتصميم إيطالي فاخر',
    descriptionEn: 'Luxury Italian-style kitchen',
    year: '2024',
    location: 'الرياض'
  }
];

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('الكل / All');

  const filteredProjects = activeCategory === 'الكل / All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-amber-600 tracking-wider uppercase">معرض الأعمال / Our Projects</span>
            <h1 className="mt-4 mb-6">
              Portfolio
              <span className="block mt-2 text-amber-600">معرض أعمالنا المميزة</span>
            </h1>
            <p className="text-xl text-neutral-600">
              استكشف مجموعة من مشاريعنا المكتملة التي تعكس خبرتنا وجودة عملنا
              <br />
              Explore our collection of completed projects showcasing our expertise and quality
            </p>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category 
                  ? 'bg-amber-600 hover:bg-amber-700 text-white' 
                  : 'border-neutral-300 text-neutral-700 hover:border-amber-600 hover:text-amber-600'
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="text-sm text-amber-400 mb-2">{project.category}</div>
                      <div className="text-sm mb-2">{project.description}</div>
                      <div className="text-xs text-neutral-300">
                        {project.year} • {project.location}
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="mb-1 group-hover:text-amber-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-600">{project.titleEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl mb-2">500+</div>
              <div className="text-amber-100">مشروع مكتمل<br />Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl mb-2">100%</div>
              <div className="text-amber-100">رضا العملاء<br />Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl mb-2">15+</div>
              <div className="text-amber-100">سنوات خبرة<br />Years Experience</div>
            </div>
            <div>
              <div className="text-4xl mb-2">50+</div>
              <div className="text-amber-100">حرفي ماهر<br />Skilled Craftsmen</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">
            هل أنت مستعد لبدء مشروعك؟
            <span className="block mt-2">Ready to Start Your Project?</span>
          </h2>
          <p className="text-xl text-neutral-600 mb-8">
            تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر
            <br />
            Contact us today for a free consultation and quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8">
                تواصل معنا / Contact Us
              </Button>
            </Link>
            <Link to="/process">
              <Button size="lg" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white">
                تعرف على عملياتنا / Our Process
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
