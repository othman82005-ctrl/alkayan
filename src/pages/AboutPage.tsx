import { Award, Users, Zap, Target, Heart, Shield } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-amber-600 tracking-wider uppercase">About Alkiyan</span>
            <h1 className="mt-4 mb-6">
              Crafting Excellence Since 2008
            </h1>
            <p className="text-xl text-neutral-600">
              We are a premium furniture, doors, and kitchen manufacturer dedicated to transforming 
              spaces through exceptional design and uncompromising quality.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">
                Our Story
              </h2>
              <p className="text-neutral-600 mb-6">
                Founded in 2008, Alkiyan (الكيان) began with a simple vision: to create furniture and 
                interiors that stand the test of time. What started as a small workshop has grown into 
                a leading name in custom furniture, doors, and kitchen solutions across Saudi Arabia.
              </p>
              <p className="text-neutral-600 mb-6">
                Our journey is built on the foundation of traditional craftsmanship combined with modern 
                design sensibilities. Every piece we create tells a story of dedication, precision, and 
                artistic excellence.
              </p>
              <p className="text-neutral-600">
                Today, we serve discerning clients who appreciate the difference that quality materials, 
                expert craftsmanship, and personalized service make in creating truly exceptional spaces.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1620398399429-fa1c5fbc8668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmFmdHNtYW4lMjB3b3Jrc2hvcCUyMHdvb2R8ZW58MXx8fHwxNzYxNDM4NzI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <Target className="text-amber-600" size={32} />
              </div>
              <h3 className="mb-4">Our Mission</h3>
              <p className="text-neutral-600">
                To deliver exceptional custom furniture, doors, and kitchens that exceed our clients' 
                expectations. We are committed to combining superior craftsmanship, premium materials, 
                and innovative design to create pieces that enhance and elevate every space.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="text-amber-600" size={32} />
              </div>
              <h3 className="mb-4">Our Vision</h3>
              <p className="text-neutral-600">
                To be recognized as the premier destination for luxury custom furniture and interiors 
                in Saudi Arabia. We aspire to set new standards in quality, design, and customer 
                satisfaction while preserving traditional craftsmanship values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Core Values</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              These principles guide everything we do, from initial consultation to final installation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-amber-600" size={28} />
              </div>
              <h3 className="mb-3">Quality First</h3>
              <p className="text-neutral-600">
                We never compromise on materials or workmanship. Every piece undergoes rigorous quality 
                control to ensure it meets our exacting standards and exceeds your expectations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-amber-600" size={28} />
              </div>
              <h3 className="mb-3">Customer Focused</h3>
              <p className="text-neutral-600">
                Your vision is our priority. We work closely with you throughout the entire process, 
                ensuring every detail aligns with your preferences and lifestyle needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-amber-600" size={28} />
              </div>
              <h3 className="mb-3">Innovation</h3>
              <p className="text-neutral-600">
                We blend time-honored craftsmanship techniques with modern technology and design trends 
                to create pieces that are both timeless and contemporary.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-amber-600" size={28} />
              </div>
              <h3 className="mb-3">Integrity</h3>
              <p className="text-neutral-600">
                Honest communication, transparent pricing, and ethical business practices form the 
                foundation of our relationships with clients and partners.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-amber-600" size={28} />
              </div>
              <h3 className="mb-3">Passion</h3>
              <p className="text-neutral-600">
                Every project is a labor of love. Our team brings dedication and enthusiasm to each 
                piece we create, ensuring exceptional results every time.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-amber-600" size={28} />
              </div>
              <h3 className="mb-3">Attention to Detail</h3>
              <p className="text-neutral-600">
                Excellence is in the details. From material selection to final finishing, we pay 
                meticulous attention to every aspect of our work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process Overview */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-video rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1599765824376-a87eb981b2ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwd29ya3Nob3B8ZW58MXx8fHwxNzYxNDM5MDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Manufacturing"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="mb-6">
                Our Manufacturing Excellence
              </h2>
              <p className="text-neutral-600 mb-6">
                Our state-of-the-art facility combines traditional woodworking techniques with modern 
                manufacturing technology. This unique approach allows us to maintain the artistry of 
                handcrafted furniture while ensuring precision and consistency.
              </p>
              <p className="text-neutral-600 mb-6">
                We source premium materials from trusted suppliers worldwide, ensuring that every piece 
                begins with the finest woods, metals, and finishes available.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  </div>
                  <span className="text-neutral-700">Advanced CNC machinery for precise cuts and joinery</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  </div>
                  <span className="text-neutral-700">Skilled artisans for hand-finishing and detailing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  </div>
                  <span className="text-neutral-700">Rigorous quality control at every production stage</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  </div>
                  <span className="text-neutral-700">Eco-friendly practices and sustainable sourcing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl text-amber-600 mb-2">15+</div>
              <div className="text-neutral-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-amber-600 mb-2">500+</div>
              <div className="text-neutral-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-amber-600 mb-2">100%</div>
              <div className="text-neutral-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-amber-600 mb-2">50+</div>
              <div className="text-neutral-600">Skilled Craftsmen</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
