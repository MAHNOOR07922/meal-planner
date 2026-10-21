import React, { useState } from 'react';
import { GitMerge, Check, AlertTriangle, ArrowRight, RefreshCw } from 'lucide-react';

export const ConflictSolver: React.FC = () => {
  const [conflictResolved, setConflictResolved] = useState(false);

  const rawConflict = `[
  { "name": "Bill Splitter", "description": "Split a bill and tip between friends.", "student": "Instructor", "path": "students/instructor/" },
<<<<<<< HEAD
  { "name": "Chai Calculator", "description": "Work out how much chai to make for any number of guests.", "student": "Ayesha Khan", "path": "students/ayesha-khan/" }
=======
  { "name": "Rickshaw Fare Estimator", "description": "Estimate a rickshaw fare by distance.", "student": "Bilal Ahmed", "path": "students/bilal-ahmed/" }
>>>>>>> main
]`;

  const resolvedCode = `[
  { "name": "Bill Splitter", "description": "Split a bill and tip between friends.", "student": "Instructor", "path": "students/instructor/" },
  { "name": "Chai Calculator", "description": "Work out how much chai to make for any number of guests.", "student": "Ayesha Khan", "path": "students/ayesha-khan/" },
  { "name": "Rickshaw Fare Estimator", "description": "Estimate a rickshaw fare by distance.", "student": "Bilal Ahmed", "path": "students/bilal-ahmed/" }
]`;

  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
          <span>Git Collaboration Skill</span>
          <span aria-hidden="true">·</span>
          <span>Resolving tools.json Conflicts</span>
        </div>
        <h2 className="text-3xl font-extrabold font-['Outfit'] text-stone-900">
          Fixing a Merge Conflict in tools.json
        </h2>
        <p className="mt-2 text-stone-600 text-sm max-w-2xl">
          Because every student in the course adds a line to the exact same file (<code className="font-mono text-amber-900 bg-amber-50 px-1 py-0.5 rounded">tools.json</code>), Git will occasionally ask you to resolve a conflict. It is completely normal and easy to fix!
        </p>
      </div>

      {/* 3 Step Rule Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-xs">
          <div className="text-xs font-bold text-amber-800 uppercase tracking-wider">Step 1</div>
          <h4 className="text-base font-bold font-['Outfit'] text-stone-900 mt-1">Pull Latest main</h4>
          <p className="text-xs text-stone-600 mt-2">
            Update your local branch with recent merges from the class:
          </p>
          <pre className="mt-3 p-2.5 bg-stone-950 text-amber-300 font-mono text-xs rounded-lg select-all">
git pull origin main
          </pre>
        </div>

        <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-xs">
          <div className="text-xs font-bold text-amber-800 uppercase tracking-wider">Step 2</div>
          <h4 className="text-base font-bold font-['Outfit'] text-stone-900 mt-1">Keep Both Lines</h4>
          <p className="text-xs text-stone-600 mt-2">
            Delete the 3 conflict markers (<code className="font-mono text-red-600">&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>, <code className="font-mono text-stone-600">=======</code>, <code className="font-mono text-blue-600">&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>) and keep both tools.
          </p>
        </div>

        <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-xs">
          <div className="text-xs font-bold text-amber-800 uppercase tracking-wider">Step 3</div>
          <h4 className="text-base font-bold font-['Outfit'] text-stone-900 mt-1">Check the Commas</h4>
          <p className="text-xs text-stone-600 mt-2">
            Every entry except the very last one needs a comma after its closing curly bracket <code className="font-mono">&#125;,</code>.
          </p>
        </div>
      </div>

      {/* Interactive Simulator */}
      <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-200 gap-4">
          <div>
            <h3 className="text-lg font-bold font-['Outfit'] text-stone-900">
              Interactive Conflict Visualizer
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              Toggle between the conflicted file state and the cleanly resolved merge result.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setConflictResolved(!conflictResolved)}
              className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                conflictResolved
                  ? 'bg-emerald-700 text-white hover:bg-emerald-800'
                  : 'bg-amber-800 text-white hover:bg-amber-900'
              }`}
            >
              <GitMerge className="w-3.5 h-3.5" />
              <span>{conflictResolved ? 'Reset to Conflict State' : 'Accept Both Changes (Resolve)'}</span>
            </button>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between text-xs text-stone-500 mb-2 font-mono">
            <span>tools.json</span>
            <span>
              {conflictResolved ? (
                <span className="text-emerald-700 font-semibold font-sans">&check; Conflict Resolved (Valid JSON)</span>
              ) : (
                <span className="text-amber-800 font-semibold font-sans">Conflict Active: 2 Incoming Changes</span>
              )}
            </span>
          </div>

          <pre className={`p-4 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed border transition-colors ${
            conflictResolved
              ? 'bg-stone-950 text-stone-200 border-emerald-900/40'
              : 'bg-stone-950 text-stone-300 border-amber-900/40'
          }`}>
            {conflictResolved ? resolvedCode : rawConflict}
          </pre>
        </div>

        {/* Marker Explanations */}
        {!conflictResolved && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-amber-900">
              <strong className="block font-mono">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD to =======</strong>
              This is <strong>your</strong> newly added tool in your local branch.
            </div>
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 text-blue-900">
              <strong className="block font-mono">======= to &gt;&gt;&gt;&gt;&gt;&gt;&gt; main</strong>
              This is your classmate’s newly merged tool that was recently pushed to main.
            </div>
          </div>
        )}

        {/* Finishing merge terminal command */}
        <div className="mt-6 pt-4 border-t border-stone-100">
          <div className="text-xs font-semibold text-stone-700 mb-1.5">
            After editing tools.json, finish the merge with:
          </div>
          <pre className="p-3 bg-stone-900 text-amber-300 font-mono text-xs rounded-lg select-all">
git add tools.json
git commit -m "Merge main and fix tools.json conflict"
git push
          </pre>
        </div>
      </div>
    </section>
  );
};
