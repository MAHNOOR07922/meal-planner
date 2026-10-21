import React, { useState, useMemo } from 'react';
import { CheckCircle2, AlertTriangle, XCircle, Copy, Check, Terminal, Play, FileJson } from 'lucide-react';
import { ToolEntry, ValidationIssue } from '../types';

interface StudentWorkbenchProps {
  initialTools: ToolEntry[];
  onAddNewTool?: (tool: ToolEntry) => void;
}

export const StudentWorkbench: React.FC<StudentWorkbenchProps> = ({
  initialTools,
  onAddNewTool
}) => {
  // Generator State
  const [studentName, setStudentName] = useState('Zayd Farooq');
  const [toolName, setToolName] = useState('Metro Bus Fare Calculator');
  const [toolDesc, setToolDesc] = useState('Calculate Lahore Metro and Speedo bus token fares based on station count.');
  const [copiedEntry, setCopiedEntry] = useState(false);
  const [copiedCommands, setCopiedCommands] = useState(false);

  // Slug generator
  const slug = useMemo(() => {
    return studentName
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '') || 'your-name';
  }, [studentName]);

  const folderPath = `students/${slug}/`;

  const generatedJsonEntry = useMemo(() => {
    return `{ "name": "${toolName.trim()}", "description": "${toolDesc.trim()}", "student": "${studentName.trim()}", "path": "${folderPath}" }`;
  }, [toolName, toolDesc, studentName, folderPath]);

  // JSON Validator State
  const initialJsonString = useMemo(() => {
    const list = initialTools.map(t => ({
      name: t.name,
      description: t.description,
      student: t.student,
      path: t.path
    }));
    return JSON.stringify(list, null, 2);
  }, [initialTools]);

  const [jsonInput, setJsonInput] = useState<string>(initialJsonString);

  // Validation engine mirroring the GitHub Actions workflow
  const validationResults = useMemo<{
    isValid: boolean;
    issues: ValidationIssue[];
    entriesCount: number;
  }>(() => {
    const issues: ValidationIssue[] = [];
    let parsed: any = null;

    try {
      parsed = JSON.parse(jsonInput);
    } catch (err: any) {
      return {
        isValid: false,
        issues: [{
          type: 'error',
          message: `JSON Syntax Error: ${err.message}. Check missing or misplaced commas.`
        }],
        entriesCount: 0
      };
    }

    if (!Array.isArray(parsed)) {
      return {
        isValid: false,
        issues: [{
          type: 'error',
          message: 'Top-level structure must be an Array [ ... ]'
        }],
        entriesCount: 0
      };
    }

    parsed.forEach((entry, idx) => {
      const num = idx + 1;
      if (typeof entry !== 'object' || entry === null) {
        issues.push({
          type: 'error',
          message: `Entry #${num} is not a valid JSON object.`,
          entryIndex: idx
        });
        return;
      }

      if (!entry.name || typeof entry.name !== 'string' || !entry.name.trim()) {
        issues.push({
          type: 'error',
          message: `Entry #${num} missing or empty "name" property.`,
          entryIndex: idx,
          field: 'name'
        });
      }

      if (!entry.description || typeof entry.description !== 'string' || !entry.description.trim()) {
        issues.push({
          type: 'error',
          message: `Entry #${num} (${entry.name || 'unnamed'}) missing "description" property.`,
          entryIndex: idx,
          field: 'description'
        });
      }

      if (!entry.student || typeof entry.student !== 'string' || !entry.student.trim()) {
        issues.push({
          type: 'error',
          message: `Entry #${num} (${entry.name || 'unnamed'}) missing "student" author property.`,
          entryIndex: idx,
          field: 'student'
        });
      }

      if (!entry.path || typeof entry.path !== 'string') {
        issues.push({
          type: 'error',
          message: `Entry #${num} (${entry.name || 'unnamed'}) missing "path" property.`,
          entryIndex: idx,
          field: 'path'
        });
      } else {
        if (!entry.path.startsWith('students/')) {
          issues.push({
            type: 'error',
            message: `Entry #${num} path must start with "students/". Received: "${entry.path}"`,
            entryIndex: idx,
            field: 'path'
          });
        }
        if (!entry.path.endsWith('/')) {
          issues.push({
            type: 'error',
            message: `Entry #${num} path must end with a trailing slash "/". Received: "${entry.path}"`,
            entryIndex: idx,
            field: 'path'
          });
        }
      }
    });

    const isValid = issues.filter(i => i.type === 'error').length === 0;

    return {
      isValid,
      issues,
      entriesCount: parsed.length
    };
  }, [jsonInput]);

  const handleCopyEntry = () => {
    navigator.clipboard.writeText(generatedJsonEntry);
    setCopiedEntry(true);
    setTimeout(() => setCopiedEntry(false), 2000);
  };

  const gitCommands = `git checkout -b ${slug}
cp -r students/_template ${folderPath.slice(0, -1)}
# (Edit index.html, style.css, script.js inside ${folderPath})
git add ${folderPath} tools.json
git commit -m "Add ${toolName}"
git push -u origin ${slug}`;

  const handleCopyCommands = () => {
    navigator.clipboard.writeText(gitCommands);
    setCopiedCommands(true);
    setTimeout(() => setCopiedCommands(false), 2000);
  };

  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
          <span>Student PR Lab</span>
          <span aria-hidden="true">·</span>
          <span>Automated tools.json Check</span>
        </div>
        <h2 className="text-3xl font-extrabold font-['Outfit'] text-stone-900">
          Student Workbench & PR Linter
        </h2>
        <p className="mt-2 text-stone-600 text-sm max-w-2xl">
          Simulate the automated GitHub Actions check, validate your <code className="font-mono text-amber-900 bg-amber-50 px-1.5 py-0.5 rounded">tools.json</code> entry before pushing, and generate exact terminal commands.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Tool Entry Generator */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs">
            <h3 className="text-lg font-bold font-['Outfit'] text-stone-900 mb-4 flex items-center gap-2">
              <span>Step 1: Generate Your Tool Entry</span>
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="e.g. Ayesha Khan"
                  className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-amber-700"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Tool Title
                </label>
                <input
                  type="text"
                  value={toolName}
                  onChange={(e) => setToolName(e.target.value)}
                  placeholder="e.g. Chai Calculator"
                  className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-amber-700"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  One-Sentence Description
                </label>
                <textarea
                  rows={2}
                  value={toolDesc}
                  onChange={(e) => setToolDesc(e.target.value)}
                  placeholder="Brief description of what the tool accomplishes..."
                  className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-amber-700 resize-none"
                />
              </div>

              {/* Generated Folder & Single line JSON */}
              <div className="pt-3 border-t border-stone-100">
                <div className="flex items-center justify-between text-xs text-stone-500 mb-1.5">
                  <span className="font-semibold text-stone-700">Single-line tools.json entry:</span>
                  <button
                    onClick={handleCopyEntry}
                    className="inline-flex items-center gap-1 text-amber-800 hover:text-amber-900 font-medium"
                  >
                    {copiedEntry ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedEntry ? 'Copied' : 'Copy line'}</span>
                  </button>
                </div>
                <div className="p-3 bg-stone-900 rounded-lg font-mono text-xs text-amber-300 break-all select-all">
                  {generatedJsonEntry}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Terminal Script tailored to student */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold font-['Outfit'] text-stone-900 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-amber-800" />
                <span>Your Git Terminal Commands</span>
              </h3>
              <button
                onClick={handleCopyCommands}
                className="inline-flex items-center gap-1 text-xs text-amber-800 hover:text-amber-900 font-medium"
              >
                {copiedCommands ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCommands ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="p-3.5 bg-stone-950 text-stone-300 rounded-xl font-mono text-xs overflow-x-auto whitespace-pre leading-relaxed">
              {gitCommands}
            </pre>
          </div>
        </div>

        {/* Right Column: Live tools.json Linter */}
        <div className="lg:col-span-7 flex flex-col space-y-4">
          <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs flex-1 flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100 mb-3">
              <div>
                <h3 className="text-lg font-bold font-['Outfit'] text-stone-900">
                  Step 2: Automated "Check tools.json" Linter
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Replicates the exact GitHub Actions PR test before you push.
                </p>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-2">
                {validationResults.isValid ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-xs font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Check Passed ({validationResults.entriesCount} entries)</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 text-red-700 border border-red-200 rounded-lg text-xs font-semibold">
                    <XCircle className="w-4 h-4" />
                    <span>Check Failed</span>
                  </span>
                )}
              </div>
            </div>

            {/* Error Diagnostics List */}
            {!validationResults.isValid && (
              <div className="mb-4 p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-800 space-y-1">
                <div className="font-semibold flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 shrink-0 text-red-600" />
                  <span>Pull request check would fail with following errors:</span>
                </div>
                <ul className="list-disc pl-5 mt-1 space-y-0.5">
                  {validationResults.issues.map((issue, idx) => (
                    <li key={idx} className="font-mono">
                      {issue.message}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Editor Area */}
            <div className="flex-1 flex flex-col">
              <div className="flex items-center justify-between text-xs text-stone-500 mb-1.5">
                <span>Edit tools.json below to test your entry:</span>
                <button
                  onClick={() => {
                    try {
                      const arr = JSON.parse(jsonInput);
                      arr.push(JSON.parse(generatedJsonEntry));
                      setJsonInput(JSON.stringify(arr, null, 2));
                    } catch (e) {
                      alert('Fix existing JSON syntax first before appending.');
                    }
                  }}
                  className="text-xs font-semibold text-amber-800 hover:text-amber-900 bg-amber-50 hover:bg-amber-100 px-2 py-1 rounded"
                >
                  + Append My Generated Entry
                </button>
              </div>

              <textarea
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                rows={16}
                spellCheck={false}
                className="w-full flex-1 p-3.5 font-mono text-xs bg-stone-950 text-stone-200 rounded-xl border border-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-700/20 resize-none selection:bg-amber-900 selection:text-white"
              />
            </div>

            {/* Linter Rule Checklist */}
            <div className="mt-4 pt-3 border-t border-stone-100 text-xs text-stone-500 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-600 font-bold">&check;</span>
                <span>Valid JSON Array structure</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-600 font-bold">&check;</span>
                <span>Paths must start with <code className="text-stone-800 font-mono">students/</code></span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-600 font-bold">&check;</span>
                <span>Paths must end with trailing <code className="text-stone-800 font-mono">/</code></span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-600 font-bold">&check;</span>
                <span>Alphabetical sorting is handled automatically</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
