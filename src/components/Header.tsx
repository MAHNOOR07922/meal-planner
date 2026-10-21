import React from 'react';
import { PlusCircle } from 'lucide-react';

interface HeaderProps {
  activeTab: 'meal-planner' | 'tools' | 'workbench' | 'workflow' | 'conflicts' | 'about';
  setActiveTab: (tab: 'meal-planner' | 'tools' | 'workbench' | 'workflow' | 'conflicts' | 'about') => void;
  onOpenNewTool: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenNewTool,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-stone-50/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element in display face) */}
        <button
          onClick={() => setActiveTab('meal-planner')}
          className="text-xl font-bold font-['Outfit'] tracking-tight text-stone-900 whitespace-nowrap shrink-0 hover:text-amber-800 transition-colors text-left"
        >
          Lahore Toolbox
        </button>

        {/* Zone 2: 4–5 single-line clean text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600 font-['Plus_Jakarta_Sans']">
          <button
            onClick={() => setActiveTab('meal-planner')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'meal-planner'
                ? 'text-amber-800 border-b-2 border-amber-800 font-semibold'
                : 'hover:text-stone-950'
            }`}
          >
            7-Day Meal Plan
          </button>
          <button
            onClick={() => setActiveTab('tools')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'tools'
                ? 'text-amber-800 border-b-2 border-amber-800 font-semibold'
                : 'hover:text-stone-950'
            }`}
          >
            All Web Tools
          </button>
          <button
            onClick={() => setActiveTab('workbench')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'workbench'
                ? 'text-amber-800 border-b-2 border-amber-800 font-semibold'
                : 'hover:text-stone-950'
            }`}
          >
            PR Validator
          </button>
          <button
            onClick={() => setActiveTab('workflow')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'workflow'
                ? 'text-amber-800 border-b-2 border-amber-800 font-semibold'
                : 'hover:text-stone-950'
            }`}
          >
            Student Guide
          </button>
          <button
            onClick={() => setActiveTab('conflicts')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'conflicts'
                ? 'text-amber-800 border-b-2 border-amber-800 font-semibold'
                : 'hover:text-stone-950'
            }`}
          >
            Git Conflicts
          </button>
        </nav>

        {/* Zone 3: Exactly 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenNewTool}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-amber-800 rounded-lg hover:bg-amber-900 active:scale-[0.98] transition-all whitespace-nowrap shrink-0 shadow-sm"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Submit Tool PR</span>
          </button>
        </div>
      </div>
    </header>
  );
};
