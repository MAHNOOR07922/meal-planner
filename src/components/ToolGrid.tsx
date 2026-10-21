import React, { useState, useMemo } from 'react';
import { ToolEntry } from '../types';
import { Search, ExternalLink, Code2, Play, SlidersHorizontal, Check } from 'lucide-react';

interface ToolGridProps {
  tools: ToolEntry[];
  onOpenTool: (tool: ToolEntry) => void;
  onViewCode: (tool: ToolEntry) => void;
}

export const ToolGrid: React.FC<ToolGridProps> = ({
  tools,
  onOpenTool,
  onViewCode,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'alpha' | 'student' | 'category'>('alpha');

  const categories = ['All', 'Finance', 'Daily Life', 'Food & Life', 'Utility', 'Health & Math'];

  const filteredTools = useMemo(() => {
    let result = tools.filter((tool) => {
      const matchesSearch =
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.student.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'All' || tool.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    if (sortBy === 'alpha') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'student') {
      result.sort((a, b) => a.student.localeCompare(b.student));
    } else if (sortBy === 'category') {
      result.sort((a, b) => a.category.localeCompare(b.category));
    }

    return result;
  }, [tools, searchQuery, selectedCategory, sortBy]);

  return (
    <section id="tools-section" className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Search and Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-200">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tools, students (e.g. chai, bill, zakat)..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-stone-200 rounded-xl text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-700/10 shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Filter Tabs (Interactive Functional Segmented Buttons) */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-amber-800 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort Select */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs text-stone-500 whitespace-nowrap">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="text-xs bg-white border border-stone-200 rounded-lg px-2.5 py-1.5 text-stone-700 focus:outline-none focus:border-amber-700"
          >
            <option value="alpha">Tool Name (A–Z)</option>
            <option value="student">Student Name</option>
            <option value="category">Category</option>
          </select>
        </div>
      </div>

      {/* Counter and Results header */}
      <div className="flex items-center justify-between text-xs text-stone-500 py-4">
        <span>
          Showing <strong className="text-stone-900 font-semibold">{filteredTools.length}</strong> {filteredTools.length === 1 ? 'tool' : 'tools'} in registry
        </span>
        <span className="font-mono text-stone-400">tools.json</span>
      </div>

      {/* Grid of Tools: 3-column desktop layout */}
      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <article
              key={tool.id}
              className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs hover:border-amber-700/40 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Zero-Pill Unboxed Metadata with Typographic Separator */}
                <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                  <span className="font-medium text-amber-900">
                    Built by {tool.student}
                  </span>
                  <span aria-hidden="true" className="text-stone-300">·</span>
                  <span>{tool.category}</span>
                </div>

                {/* Primary Card Title */}
                <h3 className="text-xl font-bold font-['Outfit'] text-stone-900 group-hover:text-amber-800 transition-colors">
                  {tool.name}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-stone-600 font-['Plus_Jakarta_Sans'] leading-relaxed line-clamp-3">
                  {tool.description}
                </p>

                {/* Path indicator */}
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-stone-400">
                  <span className="truncate">{tool.path}</span>
                  <span className="text-stone-500 font-sans font-medium text-[11px]">Vanilla JS</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2.5">
                <button
                  onClick={() => onOpenTool(tool)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-amber-800 hover:bg-amber-900 active:scale-[0.98] rounded-lg transition-colors shadow-xs"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Open Tool</span>
                </button>

                <button
                  onClick={() => onViewCode(tool)}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-stone-700 hover:text-stone-950 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
                  title="View HTML, CSS & JS Code"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Code</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="bg-white border border-stone-200 rounded-2xl p-12 text-center max-w-md mx-auto my-8">
          <p className="text-base font-semibold text-stone-900">No matching tools found</p>
          <p className="text-xs text-stone-500 mt-1">
            Try adjusting your search query or reset category filter.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="mt-4 px-4 py-2 text-xs font-semibold text-amber-800 bg-amber-50 hover:bg-amber-100 rounded-lg transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
};
