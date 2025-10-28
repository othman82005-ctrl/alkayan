import { Award, Users, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" dir="rtl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="mb-4">
              <span className="text-[#8B7355] tracking-wider uppercase">عن الكيان</span>
            </div>
            <h2 className="mb-6">
              التميز في كل التفاصيل
            </h2>
            <p className="text-neutral-600 mb-6">
              في الكيان، نؤمن بأن الأثاث والتصاميم الداخلية الاستثنائية تولد من الزواج المثالي 
              بين الفن والدقة والمواد عالية الجودة. مع سنوات من الخبرة في التصميم المخصص 
              والحرفية، اكتسبنا ثقة العملاء المميزين الذين لا يقبلون بأقل من الكمال.
            </p>
            <p className="text-neutral-600 mb-8">
              من المفهوم إلى الإنجاز، يعمل فريقنا من الحرفيين المهرة عن كثب معك لتحقيق رؤيتك. 
              سواء كانت قطعة أثاث مميزة، أو أبواب أنيقة مخصصة، أو تحويل كامل للمطبخ، 
              نضمن أن كل مشروع يعكس أسلوبك الفريد والتزامنا الثابت بالجودة.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-200">
              <div className="text-center">
                <div className="text-3xl text-[#8B7355] mb-2">15+</div>
                <div className="text-neutral-600">سنوات خبرة</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-[#8B7355] mb-2">500+</div>
                <div className="text-neutral-600">مشروع مكتمل</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-[#8B7355] mb-2">100%</div>
                <div className="text-neutral-600">رضا العملاء</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1620398399429-fa1c5fbc8668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmFmdHNtYW4lMjB3b3Jrc2hvcCUyMHdvb2R8ZW58MXx8fHwxNzYxNDM4NzI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="حرفية"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl max-w-xs hidden lg:block">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#8B7355]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="text-[#8B7355]" size={24} />
                </div>
                <div>
                  <div className="mb-1">جودة ممتازة</div>
                  <p className="text-sm text-neutral-600">مواد معتمدة وحرفية خبيرة</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#8B7355]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-[#8B7355]" size={28} />
            </div>
            <h3 className="mb-3">الجودة أولاً</h3>
            <p className="text-neutral-600">
              نستخدم فقط أفضل المواد ونطبق رقابة صارمة على الجودة في كل مرحلة.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#8B7355]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-[#8B7355]" size={28} />
            </div>
            <h3 className="mb-3">التركيز على العميل</h3>
            <p className="text-neutral-600">
              رؤيتك توجه عملنا. نتعاون بشكل وثيق لتجاوز توقعاتك.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#8B7355]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="text-[#8B7355]" size={28} />
            </div>
            <h3 className="mb-3">الابتكار</h3>
            <p className="text-neutral-600">
              دمج الحرفية التقليدية مع التصميم والتكنولوجيا الحديثة.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
