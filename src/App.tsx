import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ToolGrid } from './components/ToolGrid';
import { ToolModal } from './components/ToolModal';
import { CodeViewerModal } from './components/CodeViewerModal';
import { StudentWorkbench } from './components/StudentWorkbench';
import { WorkflowGuide } from './components/WorkflowGuide';
import { ConflictSolver } from './components/ConflictSolver';
import { AboutClass } from './components/AboutClass';
import { MealPlannerView } from './components/MealPlannerView';
import { Footer } from './components/Footer';
import { TOOLS_DATA } from './data/toolsData';
import { ToolEntry } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<'meal-planner' | 'tools' | 'workbench' | 'workflow' | 'conflicts' | 'about'>('meal-planner');
  const [tools, setTools] = useState<ToolEntry[]>(TOOLS_DATA);
  const [selectedTool, setSelectedTool] = useState<ToolEntry | null>(null);
  const [codeTool, setCodeTool] = useState<ToolEntry | null>(null);

  const handleOpenTool = (tool: ToolEntry) => {
    setSelectedTool(tool);
  };

  const handleViewCode = (tool: ToolEntry) => {
    setCodeTool(tool);
  };

  const handleAddNewTool = (newTool: ToolEntry) => {
    setTools((prev) => [newTool, ...prev]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-['Plus_Jakarta_Sans']">
      {/* 3-Zone Top Bar Contract */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenNewTool={() => setActiveTab('workbench')}
      />

      {/* Main Content Area based on Active Navigation Tab */}
      <main className="flex-1">
        {activeTab === 'meal-planner' && (
          <MealPlannerView />
        )}

        {activeTab === 'tools' && (
          <>
            <Hero
              totalTools={tools.length}
              onExploreTools={() => {
                const el = document.getElementById('tools-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onOpenGuide={() => setActiveTab('workflow')}
            />
            <ToolGrid
              tools={tools}
              onOpenTool={handleOpenTool}
              onViewCode={handleViewCode}
            />
          </>
        )}

        {activeTab === 'workbench' && (
          <StudentWorkbench
            initialTools={tools}
            onAddNewTool={handleAddNewTool}
          />
        )}

        {activeTab === 'workflow' && <WorkflowGuide />}

        {activeTab === 'conflicts' && <ConflictSolver />}

        {activeTab === 'about' && <AboutClass />}
      </main>

      {/* Interactive Tool Runner Modal */}
      <ToolModal
        tool={selectedTool}
        onClose={() => setSelectedTool(null)}
        onViewCode={(tool) => {
          setSelectedTool(null);
          setCodeTool(tool);
        }}
      />

      {/* Source Code Inspector Modal */}
      <CodeViewerModal
        tool={codeTool}
        onClose={() => setCodeTool(null)}
        onRunTool={(tool) => {
          setCodeTool(null);
          setSelectedTool(tool);
        }}
      />

      {/* Quiet Footer */}
      <Footer onSelectTab={setActiveTab} />
    </div>
  );
}
