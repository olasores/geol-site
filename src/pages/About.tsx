import { Layers, Map, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-stone-50 pt-16">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-stone-900 mb-6">
            The Bone Wars
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            A 19th-century rivalry that shaped paleontology
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              The "Bone Wars" were a 19th-century rivalry between paleontologists{' '}
              <span className="font-semibold text-stone-900">Othniel Charles Marsh</span> and{' '}
              <span className="font-semibold text-stone-900">Edward Drinker Cope</span> that heavily
              involved geology, as they competed to find and excavate dinosaur fossils in the western United States.
            </p>

            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              Their rivalry was centered on locating rich fossil beds, such as the Morrison Formation at sites
              like Como Bluff, Wyoming, where they competed to uncover the most significant finds. The geological
              formations provided the context for the discoveries, while the intense competition led to destructive
              and unethical practices that damaged fossils and scientific integrity.
            </p>

            <p className="text-lg text-stone-700 leading-relaxed">
              Despite the controversy, this fierce competition propelled dinosaur paleontology into the public eye
              and resulted in an unprecedented number of discoveries that transformed our understanding of prehistoric life.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-200">
            <div className="w-14 h-14 bg-amber-600 rounded-lg flex items-center justify-center mb-4">
              <Layers className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">Geological Context</h3>
            <p className="text-stone-700 leading-relaxed">
              The Morrison Formation and other rich fossil beds provided the geological stage for their discoveries,
              preserving ancient life forms for millions of years.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200">
            <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <Map className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">Western Frontier</h3>
            <p className="text-stone-700 leading-relaxed">
              The American West, particularly Wyoming, Colorado, and Montana, became the battleground for fossil
              discoveries during this era.
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-8 border border-emerald-200">
            <div className="w-14 h-14 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">Scientific Impact</h3>
            <p className="text-stone-700 leading-relaxed">
              The rivalry accelerated scientific progress, bringing paleontology to the forefront of public
              consciousness and establishing America as a leader in the field.
            </p>
          </div>
        </div>

        <div className="bg-stone-900 text-white rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6">The Timeline</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 text-amber-500 font-bold">1860s</div>
              <div className="flex-1">
                <p className="leading-relaxed">Cope and Marsh meet and initially collaborate as friends and colleagues.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 text-amber-500 font-bold">1870s</div>
              <div className="flex-1">
                <p className="leading-relaxed">The friendship sours as competition intensifies over fossil discoveries in the American West.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 text-amber-500 font-bold">1877</div>
              <div className="flex-1">
                <p className="leading-relaxed">The discovery of Como Bluff, Wyoming, escalates the rivalry to unprecedented levels.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 text-amber-500 font-bold">1890s</div>
              <div className="flex-1">
                <p className="leading-relaxed">Both men face financial ruin and damaged reputations, yet continue their work until their deaths.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
