import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const styles = ['All', 'Modern', 'Classic', 'Contemporary', 'Traditional'];

const kitchenGallery = [
  {
    id: 1,
    title: 'Modern White Kitchen',
    style: 'Modern',
    image: 'https://images.unsplash.com/photo-1642979427252-13d5fd18bb61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3aGl0ZSUyMGtpdGNoZW58ZW58MXx8fHwxNzYxNDM5MTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Sleek minimalist design with high-gloss cabinets'
  },
  {
    id: 2,
    title: 'Luxury Dark Kitchen',
    style: 'Contemporary',
    image: 'https://images.unsplash.com/photo-1621494548002-bfc916172ead?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkYXJrJTIwa2l0Y2hlbnxlbnwxfHx8fDE3NjE0MzkxOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Sophisticated dark wood with premium finishes'
  },
  {
    id: 3,
    title: 'Marble Island Kitchen',
    style: 'Modern',
    image: 'https://images.unsplash.com/photo-1722605090433-41d1183a792d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwaXNsYW5kJTIwbWFyYmxlfGVufDF8fHx8MTc2MTQzOTE5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Statement marble island with integrated seating'
  },
  {
    id: 4,
    title: 'Classic Kitchen Design',
    style: 'Classic',
    image: 'https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwbHV4dXJ5fGVufDF8fHx8MTc2MTQwMjEzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Timeless elegance with traditional details'
  },
  {
    id: 5,
    title: 'Smart Storage Kitchen',
    style: 'Contemporary',
    image: 'https://images.unsplash.com/photo-1759239572496-4ec13e7643d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwc3RvcmFnZSUyMGNhYmluZXRzfGVufDF8fHx8MTc2MTQzOTE5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Innovative storage solutions for modern living'
  },
  {
    id: 6,
    title: 'Custom Cabinet Design',
    style: 'Modern',
    image: 'https://images.unsplash.com/photo-1707823943230-b363677b3389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwY2FiaW5ldCUyMGRlc2lnbnxlbnwxfHx8fDE3NjE0MzkwNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Bespoke cabinetry tailored to your space'
  }
];

const features = [
  'Custom cabinet design and layout',
  'Premium countertop materials (Marble, Granite, Quartz)',
  'Integrated appliances',
  'Smart storage solutions',
  'Soft-close mechanisms',
  'LED lighting systems',
  'Island and breakfast bar designs',
  'Backsplash and tile work',
  'Professional installation',
  'Warranty and after-sales service'
];

const materials = [
  {
    name: 'Solid Wood',
    description: 'Premium hardwoods for timeless beauty'
  },
  {
    name: 'High-Gloss Lacquer',
    description: 'Modern finish with easy maintenance'
  },
  {
    name: 'Natural Stone',
    description: 'Marble, granite, and quartz countertops'
  },
  {
    name: 'Stainless Steel',
    description: 'Professional-grade appliances and fixtures'
  }
];

export function KitchensPage() {
  const [activeStyle, setActiveStyle] = useState('All');

  const filteredGallery = activeStyle === 'All' 
    ? kitchenGallery 
    : kitchenGallery.filter(k => k.style === activeStyle);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-neutral-900">
        <div className="absolute inset-0 opacity-30">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwbHV4dXJ5fGVufDF8fHx8MTc2MTQwMjEzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury Kitchen"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-500 tracking-wider uppercase">Premium Kitchens</span>
          <h1 className="text-white mt-4 mb-6">
            Luxury Kitchen Solutions
            <span className="block mt-2 text-amber-500">مطابخ راقية ومخصصة</span>
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-8">
            Transform your kitchen into the heart of your home with our bespoke designs. 
            We combine functionality, beauty, and innovation to create kitchens that inspire.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              Request Kitchen Consultation
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">What We Offer</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Complete kitchen solutions with premium materials and expert craftsmanship
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="text-amber-600" size={14} />
                </div>
                <span className="text-neutral-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* Materials */}
          <div>
            <h3 className="mb-8 text-center">Premium Materials</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {materials.map((material, index) => (
                <div key={index} className="text-center p-6 bg-neutral-50 rounded-lg">
                  <h4 className="mb-2">{material.name}</h4>
                  <p className="text-sm text-neutral-600">{material.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Kitchen Gallery</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
              Explore our collection of completed kitchen projects
            </p>
          </div>

          {/* Style Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {styles.map((style) => (
              <Button
                key={style}
                variant={activeStyle === style ? 'default' : 'outline'}
                onClick={() => setActiveStyle(style)}
                className={activeStyle === style 
                  ? 'bg-amber-600 hover:bg-amber-700 text-white' 
                  : 'border-neutral-300 text-neutral-700 hover:border-amber-600 hover:text-amber-600'
                }
              >
                {style}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGallery.map((kitchen) => (
              <div key={kitchen.id} className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                  <ImageWithFallback
                    src={kitchen.image}
                    alt={kitchen.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="text-sm text-amber-400 mb-1">{kitchen.style}</div>
                      <div className="text-sm">{kitchen.description}</div>
                    </div>
                  </div>
                </div>
                <h3 className="group-hover:text-amber-600 transition-colors">
                  {kitchen.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">
                Fully Customizable to Your Vision
              </h2>
              <p className="text-neutral-600 mb-6">
                Every kitchen we create is unique. Our design team works with you to understand your 
                cooking habits, lifestyle, and aesthetic preferences, ensuring your kitchen is both 
                beautiful and perfectly functional.
              </p>
              <p className="text-neutral-600 mb-6">
                Choose from a wide range of:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="text-amber-600" size={14} />
                  </div>
                  <span className="text-neutral-700">Cabinet styles, colors, and finishes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="text-amber-600" size={14} />
                  </div>
                  <span className="text-neutral-700">Countertop materials and edge profiles</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="text-amber-600" size={14} />
                  </div>
                  <span className="text-neutral-700">Hardware and accessories</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="text-amber-600" size={14} />
                  </div>
                  <span className="text-neutral-700">Layout and storage configurations</span>
                </li>
              </ul>
              <Link to="/contact">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                  Start Your Kitchen Project
                </Button>
              </Link>
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1642979427252-13d5fd18bb61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3aGl0ZSUyMGtpdGNoZW58ZW58MXx8fHwxNzYxNDM5MTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Custom Kitchen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            Ready to Create Your Dream Kitchen?
          </h2>
          <p className="text-xl text-amber-50 mb-8">
            Schedule a free consultation with our kitchen design experts and discover 
            the possibilities for your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-amber-600 hover:bg-neutral-100">
                Get a Free Quote
              </Button>
            </Link>
            <Link to="/process">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600">
                Learn About Our Process
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
