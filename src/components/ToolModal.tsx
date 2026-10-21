import React, { useState } from 'react';
import { ToolEntry } from '../types';
import { X, ExternalLink, RefreshCw, Smartphone, Monitor, Code2, ArrowLeft } from 'lucide-react';

interface ToolModalProps {
  tool: ToolEntry | null;
  onClose: () => void;
  onViewCode: (tool: ToolEntry) => void;
}

export const ToolModal: React.FC<ToolModalProps> = ({
  tool,
  onClose,
  onViewCode,
}) => {
  if (!tool) return null;

  const [viewport, setViewport] = useState<'desktop' | 'mobile'>('desktop');
  const [key, setKey] = useState(0);

  // iframe URL points to the static student directory in /students/...
  const toolUrl = `/${tool.path}index.html`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/60 backdrop-blur-xs">
      <div className="bg-stone-50 border border-stone-200 rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Modal Topbar */}
        <div className="px-5 py-3.5 bg-white border-b border-stone-200 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors"
              title="Back to All Tools"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div>
              <div className="flex items-center gap-2 text-xs text-stone-500">
                <span className="font-semibold text-amber-900">Student: {tool.student}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono">{tool.path}</span>
              </div>
              <h2 className="text-base font-bold font-['Outfit'] text-stone-900 leading-tight">
                {tool.name}
              </h2>
            </div>
          </div>

          {/* Controls: Viewport toggle, refresh, view code, external link, close */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center bg-stone-100 p-0.5 rounded-lg border border-stone-200/60">
              <button
                onClick={() => setViewport('desktop')}
                className={`p-1.5 rounded-md text-xs font-medium transition-colors ${
                  viewport === 'desktop'
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-500 hover:text-stone-800'
                }`}
                title="Desktop View"
              >
                <Monitor className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewport('mobile')}
                className={`p-1.5 rounded-md text-xs font-medium transition-colors ${
                  viewport === 'mobile'
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-500 hover:text-stone-800'
                }`}
                title="Mobile Viewport"
              >
                <Smartphone className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={() => setKey((k) => k + 1)}
              className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors"
              title="Reset / Reload Tool"
            >
              <RefreshCw className="w-4 h-4" />
            </button>

            <button
              onClick={() => onViewCode(tool)}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-stone-700 hover:text-stone-950 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
              title="Inspect Source Code"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Inspect Code</span>
            </button>

            <a
              href={toolUrl}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors"
              title="Open Standalone in New Tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors ml-1"
              title="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sandboxed Interactive Frame */}
        <div className="flex-1 bg-stone-200/50 p-4 sm:p-6 overflow-y-auto flex justify-center items-start">
          <div
            className={`w-full transition-all duration-200 bg-white shadow-md rounded-xl overflow-hidden border border-stone-200 ${
              viewport === 'mobile' ? 'max-w-[390px] h-[650px]' : 'max-w-[720px] min-h-[520px]'
            }`}
          >
            <iframe
              key={key}
              src={toolUrl}
              title={tool.name}
              className="w-full h-full min-h-[520px] border-none"
              sandbox="allow-scripts allow-forms allow-same-origin"
            />
          </div>
        </div>

        {/* Modal Footer Note */}
        <div className="px-5 py-2.5 bg-white border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
          <span className="truncate">
            Running standalone client script at <code className="font-mono text-stone-700">{tool.path}</code>
          </span>
          <span className="shrink-0 font-medium text-stone-600">Pure HTML + CSS + JS</span>
        </div>
      </div>
    </div>
  );
};
