import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const categories = ['All', 'Living Room', 'Bedroom', 'Dining Room', 'Office'];

const furnitureGallery = [
  {
    id: 1,
    title: 'Luxury Living Suite',
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1638885930125-85350348d266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2MTQxNjAzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Contemporary sofa set with custom upholstery'
  },
  {
    id: 2,
    title: 'Modern Sofa Collection',
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1704428382813-b6c72be3f6c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2ZhJTIwbGl2aW5nJTIwcm9vbXxlbnwxfHx8fDE3NjE0MTE0Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Elegant modular seating system'
  },
  {
    id: 3,
    title: 'Master Bedroom Suite',
    category: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1680503146476-abb8c752e1f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWRyb29tJTIwZnVybml0dXJlJTIwbHV4dXJ5fGVufDF8fHx8MTc2MTQzOTA3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Complete bedroom furniture set'
  },
  {
    id: 4,
    title: 'Custom Wardrobe',
    category: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1573311392049-4186e3a47e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJkcm9iZSUyMGNsb3NldHxlbnwxfHx8fDE3NjE0MzkzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Built-in wardrobe with smart storage'
  },
  {
    id: 5,
    title: 'Elegant Dining Set',
    category: 'Dining Room',
    image: 'https://images.unsplash.com/photo-1704040686446-428673c1c887?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW5pbmclMjByb29tJTIwZnVybml0dXJlfGVufDF8fHx8MTc2MTQzOTA3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Handcrafted dining table with chairs'
  },
  {
    id: 6,
    title: 'Executive Office Suite',
    category: 'Office',
    image: 'https://images.unsplash.com/photo-1718049719677-85afb466425a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBkZXNrJTIwZnVybml0dXJlfGVufDF8fHx8MTc2MTQzOTMyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Premium office desk and storage'
  },
  {
    id: 7,
    title: 'Contemporary Interior',
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjEzNTAxODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Complete living room transformation'
  },
  {
    id: 8,
    title: 'Classic Dining Room',
    category: 'Dining Room',
    image: 'https://images.unsplash.com/photo-1704040686446-428673c1c887?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW5pbmclMjByb29tJTIwZnVybml0dXJlfGVufDF8fHx8MTc2MTQzOTA3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Traditional craftsmanship and elegance'
  }
];

const collections = [
  {
    name: 'Living Room',
    items: ['Sofas & Sectionals', 'Coffee Tables', 'TV Units', 'Side Tables', 'Armchairs', 'Display Cabinets'],
    description: 'Create a welcoming space for family and guests'
  },
  {
    name: 'Bedroom',
    items: ['Beds & Headboards', 'Wardrobes', 'Dressers', 'Nightstands', 'Vanity Tables', 'Benches'],
    description: 'Design your perfect sanctuary for rest and relaxation'
  },
  {
    name: 'Dining Room',
    items: ['Dining Tables', 'Dining Chairs', 'Buffets', 'China Cabinets', 'Bar Units', 'Sideboards'],
    description: 'Gather and entertain in style'
  },
  {
    name: 'Office',
    items: ['Executive Desks', 'Bookcases', 'Office Chairs', 'Filing Cabinets', 'Meeting Tables', 'Storage'],
    description: 'Professional furniture for productive workspaces'
  }
];

const services = [
  'Custom design consultation',
  '3D visualization',
  'Premium material selection',
  'Handcrafted construction',
  'Custom upholstery',
  'Finishing & staining',
  'White-glove delivery',
  'Professional installation',
  'Warranty coverage',
  'After-sales support'
];

export function FurniturePage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredGallery = activeCategory === 'All' 
    ? furnitureGallery 
    : furnitureGallery.filter(f => f.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-neutral-900">
        <div className="absolute inset-0 opacity-30">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1638885930125-85350348d266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2MTQxNjAzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury Furniture"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-500 tracking-wider uppercase">Custom Furniture</span>
          <h1 className="text-white mt-4 mb-6">
            Bespoke Furniture Design
            <span className="block mt-2 text-amber-500">أثاث مخصص وفاخر</span>
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-8">
            Every piece tells a story. Our custom furniture is designed and crafted to your exact 
            specifications, reflecting your personal style and enhancing your living spaces.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              Request Furniture Consultation
            </Button>
          </Link>
        </div>
      </section>

      {/* Collections Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Furniture Collections</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From living rooms to private offices, we create furniture for every space in your home
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {collections.map((collection, index) => (
              <div key={index} className="bg-neutral-50 p-8 rounded-lg">
                <h3 className="mb-3">{collection.name}</h3>
                <p className="text-neutral-600 mb-6">{collection.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {collection.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-neutral-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Furniture Gallery</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
              Discover our portfolio of custom furniture pieces
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredGallery.map((furniture) => (
              <div key={furniture.id} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4">
                  <ImageWithFallback
                    src={furniture.image}
                    alt={furniture.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="text-sm text-amber-400 mb-1">{furniture.category}</div>
                      <div className="text-sm">{furniture.description}</div>
                    </div>
                  </div>
                </div>
                <h4 className="group-hover:text-amber-600 transition-colors">
                  {furniture.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Design Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1620398399429-fa1c5fbc8668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmFmdHNtYW4lMjB3b3Jrc2hvcCUyMHdvb2R8ZW58MXx8fHwxNzYxNDM4NzI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="mb-6">
                From Vision to Reality
              </h2>
              <p className="text-neutral-600 mb-6">
                Our custom furniture design process begins with understanding your lifestyle, preferences, 
                and space requirements. We work closely with you to create pieces that are not only 
                beautiful but also perfectly suited to your needs.
              </p>
              <p className="text-neutral-600 mb-8">
                Every piece is handcrafted by skilled artisans using traditional techniques combined 
                with modern precision. We use only premium materials sourced from trusted suppliers, 
                ensuring your furniture will last for generations.
              </p>
              <Link to="/process">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                  Learn About Our Process
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">What's Included</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Complete furniture solutions from design to delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-start gap-3 bg-white p-6 rounded-lg">
                <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="text-amber-600" size={14} />
                </div>
                <span className="text-neutral-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & Finishes */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Premium Materials</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We work with the finest materials to ensure exceptional quality and durability
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🪵</span>
              </div>
              <h4 className="mb-2">Hardwoods</h4>
              <p className="text-sm text-neutral-600">Oak, Walnut, Mahogany, Cherry</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛋️</span>
              </div>
              <h4 className="mb-2">Upholstery</h4>
              <p className="text-sm text-neutral-600">Leather, Velvet, Linen, Silk</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h4 className="mb-2">Finishes</h4>
              <p className="text-sm text-neutral-600">Lacquer, Stain, Paint, Wax</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔩</span>
              </div>
              <h4 className="mb-2">Hardware</h4>
              <p className="text-sm text-neutral-600">Brass, Steel, Chrome, Bronze</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            Ready to Design Your Custom Furniture?
          </h2>
          <p className="text-xl text-amber-50 mb-8">
            Let's create furniture pieces that perfectly reflect your style and meet your needs. 
            Schedule a consultation with our design team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-amber-600 hover:bg-neutral-100">
                Get a Free Quote
              </Button>
            </Link>
            <Link to="/projects">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600">
                View Our Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
