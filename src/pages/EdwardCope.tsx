import { BookOpen, Star, AlertCircle } from 'lucide-react';

export default function EdwardCope() {
  return (
    <div className="min-h-screen bg-stone-50 pt-16">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 mb-12 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Edward Drinker Cope
          </h1>
          <p className="text-xl text-emerald-100">
            1840 - 1897 | Paleontologist, Herpetologist, Comparative Anatomist
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-4xl font-bold text-emerald-600 mb-2">1,400+</div>
            <p className="text-stone-600">Scientific papers published during his lifetime</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-4xl font-bold text-emerald-600 mb-2">56</div>
            <div className="text-stone-600">Dinosaur species named by Cope</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-4xl font-bold text-emerald-600 mb-2">17</div>
            <div className="text-stone-600">Age when he published his first scientific paper</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-stone-900 mb-4">Biography</h2>
            </div>
          </div>

          <div className="space-y-4 text-lg text-stone-700 leading-relaxed">
            <p>
              Edward Drinker Cope was born into a wealthy Quaker family in Philadelphia in 1840.
              A child prodigy, he demonstrated exceptional talent for natural sciences from an early age,
              publishing his first scientific paper at just 17 years old.
            </p>
            <p>
              Cope was largely self-taught, never completing a formal university degree, yet he became one of
              the most prolific naturalists in American history. His work spanned multiple disciplines including
              herpetology, ichthyology, and paleontology, though he is best remembered for his contributions
              to vertebrate paleontology.
            </p>
            <p>
              Known for his brilliant mind and photographic memory, Cope could recall vast amounts of anatomical
              detail and geological information. However, his quick temper and competitive nature often led to
              conflicts with other scientists, most notably with his former friend Othniel Charles Marsh.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-8 border border-emerald-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900">Major Discoveries</h3>
            </div>
            <ul className="space-y-3 text-stone-700">
              <li className="flex gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>Camarasaurus</strong> - First described in 1877</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>Coelophysis</strong> - A small theropod dinosaur</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>Dimetrodon</strong> - A sail-backed synapsid</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Numerous extinct fish, reptile, and amphibian species</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 border border-orange-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900">Scientific Approach</h3>
            </div>
            <ul className="space-y-3 text-stone-700">
              <li className="flex gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Worked quickly, sometimes sacrificing accuracy for speed</span>
              </li>
              <li className="flex gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Published prolifically, often without peer review</span>
              </li>
              <li className="flex gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Relied heavily on his personal fortune to fund expeditions</span>
              </li>
              <li className="flex gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Died in poverty after spending his wealth on research</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-stone-900 text-white rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6">Legacy</h2>
          <p className="text-lg text-stone-200 leading-relaxed mb-4">
            Despite the controversies surrounding his methods and his bitter rivalry with Marsh, Edward Drinker Cope
            made immense contributions to paleontology and natural history. His collection of over 13,000 specimens
            formed the foundation of the vertebrate paleontology collection at the American Museum of Natural History.
          </p>
          <p className="text-lg text-stone-200 leading-relaxed">
            Cope's theory of "kinetogenesis" and his work on Neo-Lamarckism, while ultimately disproven, stimulated
            important scientific debates about evolution. His prolific output and passionate dedication to science
            continue to inspire paleontologists today.
          </p>
        </div>
      </div>
    </div>
  );
}
