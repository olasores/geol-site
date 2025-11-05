import { Link } from 'react-router-dom';
import { ArrowRight, Bone } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.pexels.com/photos/8828592/pexels-photo-8828592.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="text-center px-4 max-w-4xl">
          <div className="flex justify-center mb-6">
            <Bone className="w-16 h-16 text-amber-500" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            The Bone Wars
          </h1>
          <p className="text-xl md:text-2xl text-stone-200 mb-8 leading-relaxed">
            The fierce rivalry that transformed paleontology and unearthed America's prehistoric giants
          </p>
          <Link
            to="/about"
            className="inline-flex items-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all transform hover:scale-105 shadow-xl"
          >
            <span>Discover the Story</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
              A Rivalry That Changed Science Forever
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              In the late 1800s, two brilliant but bitter rivals engaged in a ruthless competition
              that would define the field of paleontology and bring dinosaurs into the public imagination.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-amber-600">80+</span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Species Discovered</h3>
              <p className="text-stone-600">
                Together, Cope and Marsh discovered over 80 new dinosaur species, including iconic creatures like Triceratops and Stegosaurus.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-amber-600">30</span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Years of Conflict</h3>
              <p className="text-stone-600">
                Their bitter feud spanned three decades, from the 1870s until their deaths, consuming their fortunes and reputations.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-amber-600">∞</span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Lasting Legacy</h3>
              <p className="text-stone-600">
                Their discoveries laid the foundation for modern paleontology and sparked worldwide fascination with dinosaurs.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/about"
              className="inline-flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-medium text-lg group"
            >
              <span>Learn More About The Bone Wars</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
