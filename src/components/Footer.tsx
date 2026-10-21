import React from 'react';

interface FooterProps {
  onSelectTab: (tab: 'meal-planner' | 'tools' | 'workbench' | 'workflow' | 'conflicts' | 'about') => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="border-t border-stone-200 bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-base font-bold font-['Outfit'] text-stone-900">
            Lahore Toolbox
          </div>
          <p className="text-xs text-stone-500 mt-1 max-w-sm">
            A collaborative open source classroom project for adult web development learners. Built with pure HTML, CSS and JavaScript.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs text-stone-600 font-medium font-['Plus_Jakarta_Sans']">
          <button
            onClick={() => onSelectTab('tools')}
            className="hover:text-amber-800 transition-colors"
          >
            All Tools
          </button>
          <button
            onClick={() => onSelectTab('workbench')}
            className="hover:text-amber-800 transition-colors"
          >
            PR Validator
          </button>
          <button
            onClick={() => onSelectTab('workflow')}
            className="hover:text-amber-800 transition-colors"
          >
            Workflow Guide
          </button>
          <button
            onClick={() => onSelectTab('conflicts')}
            className="hover:text-amber-800 transition-colors"
          >
            Conflict Resolver
          </button>
          <button
            onClick={() => onSelectTab('about')}
            className="hover:text-amber-800 transition-colors"
          >
            Course Rules
          </button>
        </div>

        <div className="text-xs text-stone-400">
          Deployed via Netlify · Lahore, Pakistan
        </div>
      </div>
    </footer>
  );
};
