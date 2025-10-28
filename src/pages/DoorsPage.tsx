import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Shield, Clock, Award } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const categories = ['All', 'Entrance Doors', 'Interior Doors', 'Sliding Doors'];

const doorGallery = [
  {
    id: 1,
    title: 'Grand Entrance Door',
    category: 'Entrance Doors',
    image: 'https://images.unsplash.com/photo-1758384077439-8282cc397b34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZG9vcnMlMjBlbnRyYW5jZXxlbnwxfHx8fDE3NjE0Mzg3Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Elegant solid wood entrance with custom details'
  },
  {
    id: 2,
    title: 'Modern Interior Door',
    category: 'Interior Doors',
    image: 'https://images.unsplash.com/photo-1568374247505-5bb7ecac3119?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBkb29yJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxNDM5MDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Minimalist wooden interior door design'
  },
  {
    id: 3,
    title: 'Glass Sliding Door',
    category: 'Sliding Doors',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjEzNTAxODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Contemporary glass sliding system'
  },
  {
    id: 4,
    title: 'Classic Wooden Entry',
    category: 'Entrance Doors',
    image: 'https://images.unsplash.com/photo-1568374247505-5bb7ecac3119?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBkb29yJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxNDM5MDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Traditional craftsmanship meets modern security'
  },
  {
    id: 5,
    title: 'Contemporary Interior',
    category: 'Interior Doors',
    image: 'https://images.unsplash.com/photo-1758384077439-8282cc397b34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZG9vcnMlMjBlbnRyYW5jZXxlbnwxfHx8fDE3NjE0Mzg3Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Sleek design with premium hardware'
  },
  {
    id: 6,
    title: 'Luxury Entrance System',
    category: 'Entrance Doors',
    image: 'https://images.unsplash.com/photo-1568374247505-5bb7ecac3119?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBkb29yJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxNDM5MDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Complete entrance door solution'
  }
];

const materials = [
  {
    name: 'Solid Wood',
    types: ['Oak', 'Mahogany', 'Walnut', 'Cherry'],
    description: 'Natural beauty and durability'
  },
  {
    name: 'Engineered Wood',
    types: ['MDF', 'HDF', 'Composite'],
    description: 'Stability and cost-effective'
  },
  {
    name: 'Glass',
    types: ['Tempered', 'Frosted', 'Stained', 'Clear'],
    description: 'Light and modern aesthetics'
  },
  {
    name: 'Metal',
    types: ['Steel', 'Aluminum', 'Iron'],
    description: 'Maximum security and strength'
  }
];

const features = [
  'Custom sizing and design',
  'Premium hardware and locks',
  'Sound insulation',
  'Weather-resistant finishes',
  'Security features',
  'Smart lock integration',
  'Fire-rated options',
  'Energy-efficient seals',
  'Professional installation',
  'Warranty coverage'
];

export function DoorsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredGallery = activeCategory === 'All' 
    ? doorGallery 
    : doorGallery.filter(d => d.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-neutral-900">
        <div className="absolute inset-0 opacity-30">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758384077439-8282cc397b34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZG9vcnMlMjBlbnRyYW5jZXxlbnwxfHx8fDE3NjE0Mzg3Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Premium Doors"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-500 tracking-wider uppercase">Premium Doors</span>
          <h1 className="text-white mt-4 mb-6">
            Entrance & Interior Doors
            <span className="block mt-2 text-amber-500">أبواب فاخرة وآمنة</span>
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-8">
            Make a lasting first impression with our expertly crafted doors. We combine 
            security, functionality, and timeless design to create entrance solutions that stand out.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              Request Door Consultation
            </Button>
          </Link>
        </div>
      </section>

      {/* Door Types */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Door Collections</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From grand entrance doors to sleek interior solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="mb-4">Entrance Doors</h3>
              <p className="text-neutral-600 mb-6">
                Make a statement with custom entrance doors that combine security, insulation, 
                and stunning aesthetics. Perfect for villas, compounds, and luxury homes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <Check className="text-amber-600 flex-shrink-0 mt-1" size={16} />
                  <span className="text-neutral-700 text-sm">Single & double door systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-amber-600 flex-shrink-0 mt-1" size={16} />
                  <span className="text-neutral-700 text-sm">High-security locks</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-amber-600 flex-shrink-0 mt-1" size={16} />
                  <span className="text-neutral-700 text-sm">Weather-resistant materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-amber-600 flex-shrink-0 mt-1" size={16} />
                  <span className="text-neutral-700 text-sm">Custom sizing & design</span>
                </li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="mb-4">Interior Doors</h3>
              <p className="text-neutral-600 mb-6">
                Enhance your interior spaces with doors that blend seamlessly with your décor. 
                Choose from modern, classic, and contemporary styles.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <Check className="text-amber-600 flex-shrink-0 mt-1" size={16} />
                  <span className="text-neutral-700 text-sm">Hinged & pivot doors</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-amber-600 flex-shrink-0 mt-1" size={16} />
                  <span className="text-neutral-700 text-sm">Sound insulation options</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-amber-600 flex-shrink-0 mt-1" size={16} />
                  <span className="text-neutral-700 text-sm">Multiple finish options</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-amber-600 flex-shrink-0 mt-1" size={16} />
                  <span className="text-neutral-700 text-sm">Premium hardware</span>
                </li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="mb-4">Sliding Doors</h3>
              <p className="text-neutral-600 mb-6">
                Space-saving solutions with smooth operation. Ideal for modern homes, 
                closets, and room dividers with a focus on functionality.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <Check className="text-amber-600 flex-shrink-0 mt-1" size={16} />
                  <span className="text-neutral-700 text-sm">Barn-style & pocket doors</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-amber-600 flex-shrink-0 mt-1" size={16} />
                  <span className="text-neutral-700 text-sm">Soft-close mechanisms</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-amber-600 flex-shrink-0 mt-1" size={16} />
                  <span className="text-neutral-700 text-sm">Glass & wood options</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-amber-600 flex-shrink-0 mt-1" size={16} />
                  <span className="text-neutral-700 text-sm">Custom track systems</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-amber-600" size={28} />
              </div>
              <h4 className="mb-2">Security First</h4>
              <p className="text-sm text-neutral-600">High-security locks and reinforced frames</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-amber-600" size={28} />
              </div>
              <h4 className="mb-2">Premium Quality</h4>
              <p className="text-sm text-neutral-600">Finest materials and expert craftsmanship</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-amber-600" size={28} />
              </div>
              <h4 className="mb-2">Long Lasting</h4>
              <p className="text-sm text-neutral-600">Built to withstand years of daily use</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="text-amber-600" size={28} />
              </div>
              <h4 className="mb-2">Custom Design</h4>
              <p className="text-sm text-neutral-600">Tailored to your exact specifications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Door Gallery</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
              Browse our portfolio of custom door installations
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
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

          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGallery.map((door) => (
              <div key={door.id} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4">
                  <ImageWithFallback
                    src={door.image}
                    alt={door.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="text-sm text-amber-400 mb-1">{door.category}</div>
                      <div className="text-sm">{door.description}</div>
                    </div>
                  </div>
                </div>
                <h3 className="group-hover:text-amber-600 transition-colors">
                  {door.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Materials & Finishes</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Choose from a wide range of premium materials to match your style
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {materials.map((material, index) => (
              <div key={index} className="bg-neutral-50 p-6 rounded-lg">
                <h3 className="mb-3">{material.name}</h3>
                <p className="text-sm text-neutral-600 mb-4">{material.description}</p>
                <div className="space-y-2">
                  {material.types.map((type, idx) => (
                    <div key={idx} className="text-sm text-neutral-700 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                      {type}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            Ready for Your New Doors?
          </h2>
          <p className="text-xl text-amber-50 mb-8">
            Consult with our door specialists to find the perfect solution for your home. 
            We'll help you choose the right style, material, and features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-amber-600 hover:bg-neutral-100">
                Get a Free Quote
              </Button>
            </Link>
            <Link to="/projects">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600">
                View Our Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
