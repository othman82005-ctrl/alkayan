import { Armchair, DoorOpen, ChefHat, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

const services = [
  {
    id: 'furniture',
    title: 'Custom Furniture',
    titleAr: 'أثاث مخصص',
    description: 'Bespoke furniture pieces designed to your exact specifications. From classic elegance to contemporary minimalism, we create furniture that makes a statement.',
    icon: Armchair,
    image: 'https://images.unsplash.com/photo-1638885930125-85350348d266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2MTQxNjAzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: [
      'Living room sets',
      'Bedroom furniture',
      'Office & study',
      'Custom upholstery'
    ]
  },
  {
    id: 'doors',
    title: 'Premium Doors',
    titleAr: 'أبواب فاخرة',
    description: 'Expertly crafted doors that combine security, functionality, and aesthetics. Make your entrance unforgettable with our custom door solutions.',
    icon: DoorOpen,
    image: 'https://images.unsplash.com/photo-1758384077439-8282cc397b34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZG9vcnMlMjBlbnRyYW5jZXxlbnwxfHx8fDE3NjE0Mzg3Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: [
      'Entrance doors',
      'Interior doors',
      'Sliding systems',
      'Security doors'
    ]
  },
  {
    id: 'kitchens',
    title: 'Luxury Kitchens',
    titleAr: 'مطابخ راقية',
    description: 'Complete kitchen solutions that blend functionality with luxury. We design and install kitchens that are as beautiful as they are practical.',
    icon: ChefHat,
    image: 'https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwbHV4dXJ5fGVufDF8fHx8MTc2MTQwMjEzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: [
      'Modern kitchens',
      'Classic designs',
      'Smart storage',
      'Premium appliances'
    ]
  }
];

export function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 tracking-wider uppercase">Our Services</span>
          <h2 className="mt-4 mb-4">
            What We Create
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            From concept to completion, we deliver exceptional custom solutions tailored to your lifestyle and aesthetic preferences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.id} className="overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-amber-600" size={24} />
                  </div>
                  <h3 className="mb-2">
                    {service.title}
                    <span className="text-amber-600 mr-2"> |</span>
                    <span className="text-neutral-600">{service.titleAr}</span>
                  </h3>
                  <p className="text-neutral-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-neutral-700">
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="ghost"
                    className="text-amber-600 hover:text-amber-700 p-0 h-auto"
                    onClick={scrollToContact}
                  >
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
