import { BookOpen, ExternalLink } from 'lucide-react';

export default function References() {
  const primaryBooks = [
    {
      title: "The Bonehunters' Revenge: Dinosaurs, Greed, and the Greatest Scientific Feud of the Gilded Age",
      author: 'David Rains Wallace',
      year: 2000,
      description: 'A comprehensive account of the Bone Wars rivalry between Cope and Marsh, exploring the personal, scientific, and social dimensions of their conflict.',
      url: '',
    },
  ];

  const articleSources = [
     {
      title: 'The bitter dinosaur feud at the heart of palaeontology',
      author: 'Martha Henriques',
      year: 2023,
      uses: 'About page - Overview of the Bone Wars rivalry',
      url: 'https://www.bbc.com/future/article/20230119-the-dinosaur-feud-at-the-heart-of-palaeontology',
    },
     {
      title: 'The Dinosaur Rivalry',
      author: 'PBS American Experience',
      year: 2024,
      uses: 'About page, Outcomes page - Historical context and legacy, Marsh Bio Pages',
      url: 'https://www.pbs.org/wgbh/americanexperience/features/dinosaur-rivalry/',
    },
    {
      title: 'Bone Wars: The Marsh-Cope Feud and Its Dinosaur Discoveries',
      author: 'Marcia Wendorf',
      year: 2019,
      uses: 'About hero image, ',
      url: 'https://interestingengineering.com/culture/bone-wars-the-marsh-cope-feud-and-its-dinosaur-discoveries',
    },
    {
      title: 'Edward Drinker Cope',
      author: 'Britannica Editors',
      year: 2019,
      uses: 'Edward Cope page content and image',
      url: 'https://www.britannica.com/biography/Edward-Drinker-Cope',
    },
     {
      title: 'Othniel Charles Marsh',
      author: 'Britannica Editors',
      year: 2019,
      uses: 'Othniel Marsh page content and image',
      url: 'https://www.britannica.com/biography/Othniel-Charles-Marsh',
    },
    {
     title: 'The Bone Wars: A Real Life Battle For Bones',
     author: 'Beyond Bones Authors',
     year: 2019,
     uses: 'Outcome hero image',
     url: 'https://blog.hmns.org/2019/06/the-bone-wars-a-real-life-battle-for-bones/',
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 pt-16">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <BookOpen className="w-16 h-16 text-amber-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-stone-900 mb-6">
            References
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            Sources and citations for the content on The Bone Wars
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <p className="text-lg text-stone-700 leading-relaxed">
            This page contains a comprehensive list of academic sources, primary documents, and historical accounts
            that inform the content presented throughout this site. These references span from original 19th-century
            publications to modern paleontological research and analysis.
          </p>
        </div>

        <div className="space-y-12">
          {/* Primary Books & Publications Section */}
          <div>
            <h2 className="text-3xl font-bold text-stone-900 mb-6">Primary Books & Publications</h2>
            <div className="space-y-6">
              {primaryBooks.map((book, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-amber-500"
                >
                  <h3 className="text-xl font-bold text-stone-900 mb-2">{book.title}</h3>
                  <div className="flex flex-wrap gap-3 items-center mb-3">
                    <span className="text-sm text-stone-600">
                      {book.author} ({book.year})
                    </span>
                  </div>
                  <p className="text-stone-700 leading-relaxed">{book.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Article Sources Section */}
          <div>
            <h2 className="text-3xl font-bold text-stone-900 mb-6">Article Sources</h2>
            <div className="space-y-6">
              {articleSources.map((article, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-amber-500"
                >
                  <h3 className="text-xl font-bold text-stone-900 mb-2">{article.title}</h3>
                  <div className="flex flex-wrap gap-3 items-center mb-3">
                    <span className="text-sm text-stone-600">
                      {article.author} ({article.year})
                    </span>
                  </div>
                  <p className="text-stone-700 leading-relaxed mb-4"><span className="font-semibold">Used in:</span> {article.uses}</p>
                  {article.url && (
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium transition-colors"
                    >
                      <span>View Source</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}
