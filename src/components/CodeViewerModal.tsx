import React, { useState } from 'react';
import { ToolEntry } from '../types';
import { X, Copy, Check, FileCode, ArrowLeft } from 'lucide-react';

interface CodeViewerModalProps {
  tool: ToolEntry | null;
  onClose: () => void;
  onRunTool: (tool: ToolEntry) => void;
}

export const CodeViewerModal: React.FC<CodeViewerModalProps> = ({
  tool,
  onClose,
  onRunTool,
}) => {
  if (!tool) return null;

  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js'>('html');
  const [copied, setCopied] = useState(false);

  const getCodeContent = () => {
    switch (activeTab) {
      case 'html':
        return tool.htmlCode || `<!-- ${tool.path}index.html -->\n<!DOCTYPE html>\n<html>...</html>`;
      case 'css':
        return tool.cssCode || `/* ${tool.path}style.css */\n/* Custom styles */`;
      case 'js':
        return tool.jsCode || `// ${tool.path}script.js\n// JavaScript logic`;
    }
  };

  const getFileName = () => {
    switch (activeTab) {
      case 'html':
        return 'index.html';
      case 'css':
        return 'style.css';
      case 'js':
        return 'script.js';
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getCodeContent());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/60 backdrop-blur-xs">
      <div className="bg-stone-900 text-stone-100 border border-stone-800 rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="px-5 py-3.5 bg-stone-950 border-b border-stone-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-stone-100 hover:bg-stone-900 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div>
              <div className="text-xs text-stone-400">
                Code Inspector · <span className="font-mono">{tool.path}</span>
              </div>
              <h2 className="text-base font-bold font-['Outfit'] text-white">
                {tool.name} — <span className="text-stone-400 font-normal">{tool.student}</span>
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onRunTool(tool)}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-amber-700 hover:bg-amber-600 rounded-lg transition-colors"
            >
              Run Tool
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-white hover:bg-stone-900 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Selector & Copy button */}
        <div className="px-5 py-2.5 bg-stone-900/90 border-b border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveTab('html')}
              className={`px-3 py-1.5 text-xs font-mono rounded-md transition-colors ${
                activeTab === 'html'
                  ? 'bg-amber-800/40 text-amber-200 border border-amber-700/50'
                  : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800'
              }`}
            >
              index.html
            </button>
            <button
              onClick={() => setActiveTab('css')}
              className={`px-3 py-1.5 text-xs font-mono rounded-md transition-colors ${
                activeTab === 'css'
                  ? 'bg-amber-800/40 text-amber-200 border border-amber-700/50'
                  : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800'
              }`}
            >
              style.css
            </button>
            <button
              onClick={() => setActiveTab('js')}
              className={`px-3 py-1.5 text-xs font-mono rounded-md transition-colors ${
                activeTab === 'js'
                  ? 'bg-amber-800/40 text-amber-200 border border-amber-700/50'
                  : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800'
              }`}
            >
              script.js
            </button>
          </div>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs text-stone-300 hover:text-white bg-stone-800 hover:bg-stone-700 rounded-md transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied {getFileName()}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Code</span>
              </>
            )}
          </button>
        </div>

        {/* Code Content */}
        <div className="flex-1 p-5 overflow-auto bg-stone-950 font-mono text-xs sm:text-sm text-stone-200 leading-relaxed selection:bg-amber-900 selection:text-white">
          <pre className="overflow-x-auto whitespace-pre">
            <code>{getCodeContent()}</code>
          </pre>
        </div>

        {/* Footer */}
        <div className="px-5 py-2.5 bg-stone-950 border-t border-stone-800 flex items-center justify-between text-xs text-stone-500 font-mono">
          <span>{tool.path}{getFileName()}</span>
          <span>Plain vanilla stack</span>
        </div>
      </div>
    </div>
  );
};
