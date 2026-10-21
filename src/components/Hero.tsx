import React from 'react';
import { Sparkles, ArrowRight, BookOpen, Layers } from 'lucide-react';

interface HeroProps {
  totalTools: number;
  onExploreTools: () => void;
  onOpenGuide: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  totalTools,
  onExploreTools,
  onOpenGuide
}) => {
  return (
    <section className="border-b border-stone-200 bg-gradient-to-b from-stone-100/60 to-stone-50 pt-8 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-3">
              <span>Adult Web Development Cohort</span>
              <span aria-hidden="true">·</span>
              <span>Open Source Class Project</span>
              <span aria-hidden="true">·</span>
              <span>Netlify Continuous Deploy</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Outfit'] tracking-tight text-stone-900 leading-[1.15] [text-wrap:balance]">
              Handcrafted web tools built by students across Lahore
            </h1>

            <p className="mt-4 text-base sm:text-lg text-stone-600 font-['Plus_Jakarta_Sans'] leading-relaxed max-w-2xl">
              Every student designs, codes, and ships <span className="font-semibold text-stone-900">one</span> focused tool in their own directory. No frameworks, no build step, no npm—pure vanilla HTML, CSS, and modern JavaScript deployed directly to production.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreTools}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-xl transition-all shadow-sm active:scale-[0.98]"
              >
                <span>Browse Student Tools</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenGuide}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-stone-700 hover:text-stone-950 bg-white hover:bg-stone-100 border border-stone-200 rounded-xl transition-all shadow-sm"
              >
                <BookOpen className="w-4 h-4 text-amber-800" />
                <span>Student Workflow Guide</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Container at matching height */}
          <div className="lg:col-span-5 flex items-center">
            <div className="relative w-full h-full min-h-[300px] lg:min-h-[380px] rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm bg-stone-200">
              <img
                src="/src/assets/images/hero_lahore_toolbox_1792596310230.jpg"
                alt="Students collaborating on web development tools in Lahore"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                <div className="font-semibold text-stone-100 text-sm">Classroom Collaborative Studio</div>
                <div className="text-stone-300">Each branch merges into the shared tools.json registry</div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column KPI Strip below split screen */}
        <div className="mt-12 pt-8 border-t border-stone-200 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white/80 backdrop-blur-xs p-4 rounded-xl border border-stone-200/80">
            <div className="text-xs text-stone-500 font-medium">Active Cohort Tools</div>
            <div className="text-2xl font-bold font-['Outfit'] text-stone-900 tabular-nums mt-1">{totalTools} Tools Live</div>
            <div className="text-xs text-stone-400 mt-0.5">Alphabetically organized</div>
          </div>

          <div className="bg-white/80 backdrop-blur-xs p-4 rounded-xl border border-stone-200/80">
            <div className="text-xs text-stone-500 font-medium">Architecture</div>
            <div className="text-2xl font-bold font-['Outfit'] text-stone-900 mt-1">100% Vanilla</div>
            <div className="text-xs text-stone-400 mt-0.5">HTML, CSS & JS only</div>
          </div>

          <div className="bg-white/80 backdrop-blur-xs p-4 rounded-xl border border-stone-200/80">
            <div className="text-xs text-stone-500 font-medium">Build Pipeline</div>
            <div className="text-2xl font-bold font-['Outfit'] text-stone-900 mt-1">Zero Bundler</div>
            <div className="text-xs text-stone-400 mt-0.5">No npm, instant reload</div>
          </div>

          <div className="bg-white/80 backdrop-blur-xs p-4 rounded-xl border border-stone-200/80">
            <div className="text-xs text-stone-500 font-medium">Pull Request Checks</div>
            <div className="text-2xl font-bold font-['Outfit'] text-stone-900 mt-1">Automated CI</div>
            <div className="text-xs text-stone-400 mt-0.5">Live Netlify previews</div>
          </div>
        </div>
      </div>
    </section>
  );
};
