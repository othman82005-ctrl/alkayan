import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

const categories = ['All', 'Furniture', 'Doors', 'Kitchens'];

const projects = [
  {
    id: 1,
    title: 'Modern Living Suite',
    category: 'Furniture',
    image: 'https://images.unsplash.com/photo-1638885930125-85350348d266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2MTQxNjAzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Contemporary living room with custom upholstery'
  },
  {
    id: 2,
    title: 'Luxury Kitchen Design',
    category: 'Kitchens',
    image: 'https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwbHV4dXJ5fGVufDF8fHx8MTc2MTQwMjEzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Sleek modern kitchen with premium finishes'
  },
  {
    id: 3,
    title: 'Elegant Entry Doors',
    category: 'Doors',
    image: 'https://images.unsplash.com/photo-1758384077439-8282cc397b34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZG9vcnMlMjBlbnRyYW5jZXxlbnwxfHx8fDE3NjE0Mzg3Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Custom wooden entrance doors'
  },
  {
    id: 4,
    title: 'Premium Interior',
    category: 'Furniture',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjEzNTAxODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Complete interior design and furniture'
  },
  {
    id: 5,
    title: 'Bespoke Furnishings',
    category: 'Furniture',
    image: 'https://images.unsplash.com/photo-1680503146476-abb8c752e1f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmdXJuaXR1cmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjE0Mzg3Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Luxury custom furniture collection'
  },
  {
    id: 6,
    title: 'Artisan Workshop',
    category: 'Furniture',
    image: 'https://images.unsplash.com/photo-1620398399429-fa1c5fbc8668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmFmdHNtYW4lMjB3b3Jrc2hvcCUyMHdvb2R8ZW58MXx8fHwxNzYxNDM4NzI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Handcrafted wooden furniture'
  }
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-amber-600 tracking-wider uppercase">Our Work</span>
          <h2 className="mt-4 mb-4">
            Portfolio
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Explore our collection of completed projects and see how we transform visions into reality.
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

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-sm text-amber-400 mb-1">{project.category}</div>
                    <div className="text-lg">{project.description}</div>
                  </div>
                </div>
              </div>
              <h3 className="group-hover:text-amber-600 transition-colors">
                {project.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
