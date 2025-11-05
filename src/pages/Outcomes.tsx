import { ThumbsUp, ThumbsDown, Trophy, Skull } from 'lucide-react';

export default function Outcomes() {
  return (
    <div className="min-h-screen bg-stone-50 pt-16">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-stone-900 mb-6">
            The Legacy of the Bone Wars
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            A complex legacy of scientific triumph and ethical failure
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 md:p-10 border-2 border-emerald-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center">
                <ThumbsUp className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-stone-900">Good Outcomes</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-3 mb-2">
                  <Trophy className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-bold text-stone-900">Unprecedented Discoveries</h3>
                </div>
                <p className="text-stone-700 leading-relaxed ml-9">
                  Over 142 new species of dinosaurs and prehistoric creatures were discovered, including
                  iconic animals like Triceratops, Stegosaurus, and Allosaurus. This dramatically expanded
                  human knowledge of prehistoric life.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-3 mb-2">
                  <Trophy className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-bold text-stone-900">Public Fascination</h3>
                </div>
                <p className="text-stone-700 leading-relaxed ml-9">
                  The rivalry captured public imagination and brought paleontology into mainstream consciousness.
                  Newspapers covered their discoveries, sparking widespread interest in dinosaurs and prehistoric life.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-3 mb-2">
                  <Trophy className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-bold text-stone-900">Institutional Development</h3>
                </div>
                <p className="text-stone-700 leading-relaxed ml-9">
                  Major museums like the Peabody Museum and the American Museum of Natural History were established
                  or significantly expanded, creating lasting institutions for scientific research and public education.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-3 mb-2">
                  <Trophy className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-bold text-stone-900">Evolution Evidence</h3>
                </div>
                <p className="text-stone-700 leading-relaxed ml-9">
                  Their discoveries provided crucial evidence for Darwin's theory of evolution, including transitional
                  forms and evolutionary sequences that demonstrated how species changed over time.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-3 mb-2">
                  <Trophy className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-bold text-stone-900">American Scientific Leadership</h3>
                </div>
                <p className="text-stone-700 leading-relaxed ml-9">
                  The Bone Wars established the United States as a global leader in paleontology, shifting the
                  center of paleontological research from Europe to North America.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-3 mb-2">
                  <Trophy className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-bold text-stone-900">Methodological Advances</h3>
                </div>
                <p className="text-stone-700 leading-relaxed ml-9">
                  The competition drove innovation in excavation techniques, fossil preservation methods, and
                  organizational approaches to large-scale field expeditions.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 md:p-10 border-2 border-red-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center">
                <ThumbsDown className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-stone-900">Bad Outcomes</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-3 mb-2">
                  <Skull className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-bold text-stone-900">Fossil Destruction</h3>
                </div>
                <p className="text-stone-700 leading-relaxed ml-9">
                  In their haste to outpace each other, both men destroyed valuable fossils. They would sometimes
                  dynamite sites to prevent competitors from accessing them, causing irreparable damage to
                  irreplaceable specimens.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-3 mb-2">
                  <Skull className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-bold text-stone-900">Scientific Errors</h3>
                </div>
                <p className="text-stone-700 leading-relaxed ml-9">
                  Rushed publications led to numerous mistakes. Species were incorrectly identified, the same
                  animals were given multiple names, and reconstructions were often wrong, creating confusion
                  that took decades to sort out.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-3 mb-2">
                  <Skull className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-bold text-stone-900">Unethical Practices</h3>
                </div>
                <p className="text-stone-700 leading-relaxed ml-9">
                  Both scientists engaged in espionage, bribery, and theft. They hired spies to infiltrate each
                  other's camps, bribed workers to switch sides, and used deception to secure fossil sites.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-3 mb-2">
                  <Skull className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-bold text-stone-900">Personal Ruin</h3>
                </div>
                <p className="text-stone-700 leading-relaxed ml-9">
                  Both men spent their personal fortunes on the rivalry. Cope died in poverty in 1897, and Marsh
                  faced financial difficulties before his death in 1899. Their obsession consumed their lives
                  and fortunes.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-3 mb-2">
                  <Skull className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-bold text-stone-900">Damaged Reputations</h3>
                </div>
                <p className="text-stone-700 leading-relaxed ml-9">
                  The bitter feud damaged both men's reputations within the scientific community. Their public
                  attacks on each other undermined the credibility of paleontology and scientific discourse.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-3 mb-2">
                  <Skull className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-bold text-stone-900">Toxic Competition Culture</h3>
                </div>
                <p className="text-stone-700 leading-relaxed ml-9">
                  The rivalry established a precedent for cutthroat competition in scientific research that
                  prioritized personal glory over collaborative progress and ethical conduct.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-stone-800 to-stone-900 rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-6">The Final Verdict</h2>
          <p className="text-lg text-stone-200 leading-relaxed mb-4">
            The Bone Wars represent a paradox in scientific history. While the rivalry produced an extraordinary
            volume of discoveries that revolutionized our understanding of prehistoric life and captivated public
            imagination, it also demonstrated how personal ambition and unethical behavior can undermine scientific
            progress.
          </p>
          <p className="text-lg text-stone-200 leading-relaxed mb-4">
            Modern paleontology has learned from this episode. Today's field emphasizes collaboration, peer review,
            careful documentation, and ethical practices. Fossils are recognized as irreplaceable scientific resources
            that must be preserved for future study, not destroyed in the pursuit of competitive advantage.
          </p>
          <p className="text-lg text-stone-200 leading-relaxed">
            The legacy of Cope and Marsh reminds us that scientific progress is best achieved through rigorous
            methodology, ethical conduct, and collaborative effort rather than through destructive competition
            and personal rivalry.
          </p>
        </div>
      </div>
    </div>
  );
}
