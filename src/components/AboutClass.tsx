import React from 'react';
import { ShieldCheck, Sparkles, Globe, Server, Check } from 'lucide-react';

export const AboutClass: React.FC = () => {
  const rules = [
    {
      num: 1,
      rule: 'Only edit your own folder (students/<your-name>/) plus your one entry in tools.json.',
      desc: 'Never change or touch another student’s directory or submissions.'
    },
    {
      num: 2,
      rule: 'Do not modify styles/shared.css, index.html or scripts/home.js directly.',
      desc: 'If a shared class or variable change is needed, discuss with the instructor. Put your custom styles in your own style.css.'
    },
    {
      num: 3,
      rule: 'Never edit students/_template/ directly. Copy it instead.',
      desc: 'The template must remain pristine for incoming classmates.'
    },
    {
      num: 4,
      rule: 'Keep the "← Back to all tools" link at the top of your page.',
      desc: 'This ensures visitors and graders can effortlessly navigate back to the main toolbox index.'
    },
    {
      num: 5,
      rule: 'One tool per student, one entry per tool.',
      desc: 'Focus on shipping one well-crafted, bug-free, thoughtful utility.'
    },
    {
      num: 6,
      rule: 'Keep it helpful, friendly, and respectful.',
      desc: 'The Lahore Toolbox is deployed live on the public web for real people to use.'
    }
  ];

  const ideas = [
    { name: 'Rickshaw / Ride Fare Estimator', desc: 'Distance in km & rate per km with day/night rates.' },
    { name: 'Chai Calculator', desc: 'Guests to milk, water, tea leaves and sugar proportions.' },
    { name: 'Zakat Calculator', desc: 'Savings, gold and cash calculation against Silver Nisab at 2.5%.' },
    { name: 'Electricity Bill Estimator', desc: 'Monthly units consumed and tiered residential slab rates.' },
    { name: 'Age Calculator', desc: 'Date of birth converted to exact years, months and days.' },
    { name: 'Unit Converter', desc: 'Between kilometres and miles, or kilograms and tolas/maund.' },
    { name: 'BMI Calculator', desc: 'Height and weight converted to BMI category and healthy targets.' },
    { name: 'Grocery Budget Tracker', desc: 'Add bazaar grocery items and see live running balance.' },
    { name: 'Tip & Discount Calculator', desc: 'Price and percentage discount with net savings breakdown.' },
    { name: 'Countdown to Eid / Any Date', desc: 'Live ticking countdown to holidays and celebrations.' }
  ];

  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Overview */}
      <div className="bg-white border border-stone-200 rounded-2xl p-8 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
          <span>About the Cohort Project</span>
          <span aria-hidden="true">·</span>
          <span>Adult Web Development Class</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] text-stone-900">
          The Philosophy of Lahore Toolbox
        </h2>
        <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed max-w-3xl">
          Modern web development is often weighed down with heavy build chains, giant dependency trees, and fragile configs. <strong>Lahore Toolbox</strong> returns to web fundamentals: clean, semantic HTML5, focused CSS with shared design tokens, and readable vanilla JavaScript.
        </p>
        <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed max-w-3xl">
          By working in a shared Git monorepo where each student owns their folder and contributes a single line to a shared JSON registry, students learn real-world industry git flows: branching, commits, pull requests, CI automation, deploy previews, and collaborative merge conflict resolution.
        </p>
      </div>

      {/* Classroom Rules */}
      <div className="bg-white border border-stone-200 rounded-2xl p-8 shadow-xs">
        <h3 className="text-xl font-bold font-['Outfit'] text-stone-900 flex items-center gap-2 mb-6">
          <ShieldCheck className="w-5 h-5 text-amber-800" />
          <span>Class Collaboration Rules</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rules.map((r) => (
            <div key={r.num} className="p-4 bg-stone-50 rounded-xl border border-stone-200 flex gap-3.5">
              <span className="w-6 h-6 rounded-full bg-amber-800 text-white font-bold text-xs flex items-center justify-center shrink-0">
                {r.num}
              </span>
              <div>
                <strong className="text-sm text-stone-900 block leading-snug">{r.rule}</strong>
                <p className="text-xs text-stone-500 mt-1 leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Project Ideas */}
      <div className="bg-white border border-stone-200 rounded-2xl p-8 shadow-xs">
        <h3 className="text-xl font-bold font-['Outfit'] text-stone-900 flex items-center gap-2 mb-2">
          <Sparkles className="w-5 h-5 text-amber-800" />
          <span>Curated Tool Ideas for Students</span>
        </h3>
        <p className="text-xs text-stone-500 mb-6">
          Pick one of these concepts or propose your own idea to the course instructor.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ideas.map((item, idx) => (
            <div key={idx} className="p-4 bg-stone-50 rounded-xl border border-stone-200/80">
              <div className="font-semibold text-sm text-stone-900">{item.name}</div>
              <div className="text-xs text-stone-500 mt-1">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Netlify Setup for Instructor */}
      <div className="bg-stone-900 text-stone-100 rounded-2xl p-8 shadow-md">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
          <Server className="w-4 h-4" />
          <span>INSTRUCTOR SETUP GUIDE</span>
        </div>
        <h3 className="text-xl font-bold font-['Outfit'] text-white">
          Netlify Deploy Architecture
        </h3>
        <p className="text-xs text-stone-400 mt-1 max-w-2xl">
          How the production website and student pull request previews are deployed without build steps.
        </p>

        <div className="mt-6 space-y-3 text-xs sm:text-sm font-mono text-stone-300">
          <div className="p-3 bg-stone-950 rounded-lg border border-stone-800">
            <span className="text-amber-400 font-semibold">1. Connect Repo:</span> In Netlify, click <strong>Add new site &rarr; Import an existing project</strong> and connect the GitHub repository.
          </div>
          <div className="p-3 bg-stone-950 rounded-lg border border-stone-800">
            <span className="text-amber-400 font-semibold">2. Build Settings:</span> Leave <strong>Build command</strong> completely EMPTY. Set <strong>Publish directory</strong> to <code className="text-white">.</code> (the repo root).
          </div>
          <div className="p-3 bg-stone-950 rounded-lg border border-stone-800">
            <span className="text-amber-400 font-semibold">3. PR Previews:</span> Deploy previews for pull requests are enabled by default under Site configuration &rarr; Build &amp; deploy.
          </div>
          <div className="p-3 bg-stone-950 rounded-lg border border-stone-800">
            <span className="text-amber-400 font-semibold">4. Branch Protection:</span> In GitHub under Settings &rarr; Branches, require the <strong>Check tools.json</strong> status check before merging to main.
          </div>
        </div>
      </div>
    </section>
  );
};
