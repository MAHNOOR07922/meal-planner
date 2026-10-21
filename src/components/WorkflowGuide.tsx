import React, { useState } from 'react';
import { WORKFLOW_STEPS } from '../data/toolsData';
import { Terminal, GitPullRequest, GitMerge, AlertCircle, Copy, Check, Lightbulb } from 'lucide-react';

export const WorkflowGuide: React.FC = () => {
  const [platform, setPlatform] = useState<'mac' | 'win'>('mac');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
          <span>Student Course Manual</span>
          <span aria-hidden="true">·</span>
          <span>From Clone to Netlify Preview</span>
        </div>
        <h2 className="text-3xl font-extrabold font-['Outfit'] text-stone-900">
          Student Workflow (Step by Step)
        </h2>
        <p className="mt-2 text-stone-600 text-sm max-w-2xl">
          Follow these 7 steps to build and publish your tool to the shared Lahore Toolbox.
        </p>

        {/* Platform switch */}
        <div className="mt-4 inline-flex items-center gap-1 p-1 bg-stone-100 rounded-lg">
          <button
            onClick={() => setPlatform('mac')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              platform === 'mac'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            macOS / Linux / Git Bash
          </button>
          <button
            onClick={() => setPlatform('win')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              platform === 'win'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Windows PowerShell
          </button>
        </div>
      </div>

      {/* 7 Workflow Cards */}
      <div className="space-y-6">
        {WORKFLOW_STEPS.map((item, idx) => {
          const commandToDisplay: string =
            item.step === 3
              ? (platform === 'win' ? item.cmdWin : item.cmdMac) || ''
              : item.cmd || '';

          return (
            <div
              key={item.step}
              className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs hover:border-amber-700/30 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-sm shrink-0 font-['Outfit']">
                  {item.step}
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold font-['Outfit'] text-stone-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-stone-600">
                    {item.summary}
                  </p>

                  {/* Command box */}
                  <div className="mt-3 relative">
                    <pre className="p-3.5 bg-stone-950 text-amber-300/90 rounded-xl font-mono text-xs overflow-x-auto whitespace-pre leading-relaxed select-all">
                      {commandToDisplay}
                    </pre>
                    <button
                      onClick={() => handleCopy(commandToDisplay, idx)}
                      className="absolute right-2.5 top-2.5 p-1.5 text-stone-400 hover:text-white bg-stone-800 hover:bg-stone-700 rounded-md transition-colors"
                      title="Copy command"
                    >
                      {copiedIndex === idx ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  {/* Instructor Tip */}
                  <div className="mt-3 flex items-center gap-2 text-xs text-stone-500">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                    <span>{item.tip}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Running on your own computer note */}
      <div className="mt-12 bg-amber-50/70 border border-amber-200 rounded-2xl p-6">
        <h3 className="text-base font-bold font-['Outfit'] text-amber-950 flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-amber-800" />
          <span>Why Live Server in VS Code? (Why not just double-click index.html?)</span>
        </h3>
        <p className="mt-2 text-sm text-amber-900 leading-relaxed">
          When a page is opened straight from your disk (the address starts with <code className="font-mono bg-white/60 px-1.5 py-0.5 rounded text-amber-950">file://</code>), browser security rules block JavaScript from loading local data files like <code className="font-mono bg-white/60 px-1.5 py-0.5 rounded text-amber-950">tools.json</code> via <code className="font-mono bg-white/60 px-1.5 py-0.5 rounded text-amber-950">fetch()</code>. The homepage will show a "couldn't load" message.
        </p>
        <p className="mt-2 text-sm text-amber-900 leading-relaxed font-medium">
          VS Code's <strong>Live Server</strong> extension runs a tiny local web server on port 5500, allowing tools.json to load cleanly just like on Netlify!
        </p>
      </div>
    </section>
  );
};
