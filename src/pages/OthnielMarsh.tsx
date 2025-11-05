import { Award, Building2, Microscope } from 'lucide-react';

export default function OthnielMarsh() {
  return (
    <div className="min-h-screen bg-stone-50 pt-16">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 mb-12 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Othniel Charles Marsh
          </h1>
          <p className="text-xl text-blue-100">
            1831 - 1899 | Paleontologist, Professor, Scientific Administrator
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">80+</div>
            <p className="text-stone-600">New dinosaur species discovered and named</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">1st</div>
            <div className="text-stone-600">Professor of Paleontology in the United States</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">$100k+</div>
            <div className="text-stone-600">Personal fortune spent on fossil expeditions</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Microscope className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-stone-900 mb-4">Biography</h2>
            </div>
          </div>

          <div className="space-y-4 text-lg text-stone-700 leading-relaxed">
            <p>
              Othniel Charles Marsh was born in 1831 in Lockport, New York. Unlike his rival Cope, Marsh
              received formal education, graduating from Yale College in 1860 and later studying paleontology
              in Europe. His uncle, George Peabody, was a wealthy philanthropist who provided substantial
              financial support for his scientific career.
            </p>
            <p>
              In 1866, Marsh became the first Professor of Paleontology in the United States at Yale University.
              With funding from his uncle, the Peabody Museum of Natural History was established at Yale,
              giving Marsh an institutional base that Cope lacked. This advantage proved crucial during
              the Bone Wars.
            </p>
            <p>
              Marsh was methodical and strategic, using his institutional resources and political connections
              to great effect. He employed teams of fossil collectors and maintained a network of informants
              across the American West, allowing him to learn of new fossil sites quickly and secure them
              before his competitors.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900">Major Discoveries</h3>
            </div>
            <ul className="space-y-3 text-stone-700">
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Triceratops</strong> - The iconic three-horned dinosaur</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Stegosaurus</strong> - The plated dinosaur</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Allosaurus</strong> - A large carnivorous theropod</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Apatosaurus/Brontosaurus</strong> - Giant sauropods</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Early birds and toothed birds showing evolutionary links</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-8 border border-amber-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900">Scientific Approach</h3>
            </div>
            <ul className="space-y-3 text-stone-700">
              <li className="flex gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span>Systematic and methodical in his research methods</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span>Leveraged institutional resources and government funding</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span>Employed large teams of professional fossil collectors</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span>Used political influence to secure access to fossil sites</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-stone-900 text-white rounded-2xl p-8 md:p-12 mb-8">
          <h2 className="text-3xl font-bold mb-6">Notable Achievements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-amber-400 mb-3">Scientific Contributions</h3>
              <ul className="space-y-2 text-stone-200">
                <li>• Published over 300 scientific papers</li>
                <li>• Proved evolutionary link between birds and dinosaurs</li>
                <li>• Described the evolution of the horse</li>
                <li>• Served as President of the National Academy of Sciences</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-400 mb-3">Institutional Impact</h3>
              <ul className="space-y-2 text-stone-200">
                <li>• Built the Peabody Museum into a world-class institution</li>
                <li>• Established Yale as a center for paleontology</li>
                <li>• Trained the next generation of American paleontologists</li>
                <li>• Created extensive fossil collections for research</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">Legacy</h2>
          <p className="text-lg text-stone-700 leading-relaxed mb-4">
            Othniel Charles Marsh's systematic approach to paleontology and his ability to secure institutional
            backing established a model for how large-scale scientific research could be conducted. His discoveries,
            particularly of complete dinosaur skeletons, provided crucial evidence for Darwin's theory of evolution
            and helped establish paleontology as a rigorous scientific discipline.
          </p>
          <p className="text-lg text-stone-700 leading-relaxed">
            The Peabody Museum remains one of the world's premier natural history museums, and Marsh's collections
            continue to be studied by researchers today. His work on the evolutionary sequence of horses and the
            connection between birds and dinosaurs were groundbreaking contributions that shaped modern evolutionary biology.
          </p>
        </div>
      </div>
    </div>
  );
}
