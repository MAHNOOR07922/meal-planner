import React, { useState } from 'react';
import { Droplet, Plus, Minus, RotateCcw, Check, Sparkles, GlassWater } from 'lucide-react';

interface WaterTrackerProps {
  dayName: string;
}

export const WaterTracker: React.FC<WaterTrackerProps> = ({ dayName }) => {
  // Goal in Liters (default 2.5L = 10 glasses of 250ml)
  const [goalLiters, setGoalLiters] = useState<number>(2.5);
  // Logged volume in milliliters
  const [loggedMl, setLoggedMl] = useState<number>(1500);

  const glassSizeMl = 250;
  const totalGlassesGoal = Math.round((goalLiters * 1000) / glassSizeMl);
  const currentGlasses = Math.round(loggedMl / glassSizeMl);
  const currentLiters = (loggedMl / 1000).toFixed(2);
  const progressPercent = Math.min(100, Math.round((loggedMl / (goalLiters * 1000)) * 100));
  const isGoalReached = loggedMl >= goalLiters * 1000;

  const addWater = (amountMl: number) => {
    setLoggedMl((prev) => Math.max(0, Math.min(5000, prev + amountMl)));
  };

  const handleGlassClick = (index: number) => {
    // If clicking on or before current glass, toggle or set to that count
    const targetMl = (index + 1) * glassSizeMl;
    if (loggedMl === targetMl) {
      setLoggedMl(index * glassSizeMl);
    } else {
      setLoggedMl(targetMl);
    }
  };

  const handleReset = () => {
    setLoggedMl(0);
  };

  return (
    <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-100">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-700">
            <Droplet className="w-3.5 h-3.5 fill-sky-600 text-sky-600" />
            <span>Hydration Log · {dayName}</span>
          </div>
          <h3 className="text-xl font-bold font-['Outfit'] text-stone-900 mt-0.5">
            Daily Water Intake Tracker
          </h3>
        </div>

        {/* Goal Selector */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="text-xs text-stone-500 font-medium">Daily Goal:</span>
          <select
            value={goalLiters}
            onChange={(e) => setGoalLiters(parseFloat(e.target.value))}
            className="text-xs bg-stone-50 border border-stone-200 rounded-lg px-2.5 py-1.5 font-semibold text-stone-800 focus:outline-none focus:border-sky-600 cursor-pointer"
          >
            <option value={2.0}>2.0 L (8 glasses)</option>
            <option value={2.5}>2.5 L (10 glasses) - Recommended</option>
            <option value={3.0}>3.0 L (12 glasses)</option>
            <option value={3.5}>3.5 L (14 glasses)</option>
          </select>
        </div>
      </div>

      {/* Main Hydration Stats & Progress */}
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left: Volume & Percentage readout */}
        <div className="lg:col-span-4 flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-2xl bg-sky-50 border border-sky-200 flex flex-col items-center justify-center shrink-0">
            <Droplet className="w-6 h-6 text-sky-600" />
            <span className="text-[10px] font-bold text-sky-800 font-mono mt-0.5">
              {progressPercent}%
            </span>
          </div>
          <div>
            <div className="text-2xl font-extrabold font-['Outfit'] text-stone-900 tabular-nums">
              {currentLiters} <span className="text-sm font-normal text-stone-500">/ {goalLiters} L</span>
            </div>
            <div className="text-xs text-stone-500 font-medium">
              {currentGlasses} of {totalGlassesGoal} glasses (250ml each)
            </div>
          </div>
        </div>

        {/* Center: Progress Bar */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
            <span className="text-stone-600">Daily Intake Progress</span>
            {isGoalReached ? (
              <span className="text-emerald-700 font-semibold inline-flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Goal Reached!
              </span>
            ) : (
              <span className="text-stone-500 font-mono">
                {Math.max(0, goalLiters * 1000 - loggedMl)} ml remaining
              </span>
            )}
          </div>

          <div className="w-full h-3 bg-stone-100 rounded-full overflow-hidden border border-stone-200/80 p-0.5">
            <div
              className={`h-full rounded-full transition-all duration-300 ease-out ${
                isGoalReached
                  ? 'bg-gradient-to-r from-sky-500 to-emerald-500'
                  : 'bg-gradient-to-r from-sky-400 to-sky-600'
              }`}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Visual Glass Tapping Matrix */}
      <div className="mt-6 pt-5 border-t border-stone-100">
        <div className="flex items-center justify-between text-xs text-stone-500 mb-3">
          <span>Tap any glass to quick-log:</span>
          <span className="font-mono text-[11px]">1 glass = 250 ml</span>
        </div>

        <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-10 lg:grid-cols-14 gap-2">
          {Array.from({ length: totalGlassesGoal }).map((_, idx) => {
            const isFilled = idx < currentGlasses;
            return (
              <button
                key={idx}
                onClick={() => handleGlassClick(idx)}
                className={`p-2.5 rounded-xl border flex flex-col items-center justify-center transition-all ${
                  isFilled
                    ? 'bg-sky-50 border-sky-300 text-sky-700 shadow-2xs scale-[1.02]'
                    : 'bg-stone-50/70 border-stone-200 text-stone-400 hover:border-sky-200 hover:bg-stone-100'
                }`}
                title={`Glass #${idx + 1} (250 ml)`}
              >
                <GlassWater
                  className={`w-5 h-5 ${
                    isFilled ? 'text-sky-600 fill-sky-200' : 'text-stone-300'
                  }`}
                />
                <span className="text-[10px] font-mono mt-1 font-semibold">
                  {idx + 1}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Action Buttons & Clinical Note */}
      <div className="mt-6 pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => addWater(250)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 active:scale-[0.98] rounded-lg transition-all shadow-2xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>+1 Glass (250ml)</span>
          </button>

          <button
            onClick={() => addWater(500)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-sky-900 bg-sky-100 hover:bg-sky-200 active:scale-[0.98] rounded-lg transition-all"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>+1 Bottle (500ml)</span>
          </button>

          <button
            onClick={() => addWater(-250)}
            disabled={loggedMl === 0}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 disabled:opacity-40 disabled:cursor-not-allowed rounded-lg transition-colors"
            title="Subtract 1 glass"
          >
            <Minus className="w-3 h-3" />
            <span>250ml</span>
          </button>

          <button
            onClick={handleReset}
            className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-lg transition-colors ml-1"
            title="Reset to 0"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Clinical Note */}
        <div className="text-[11px] text-stone-500 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-sky-600 shrink-0" />
          <span>Supports metabolic rate and optimal renal protein clearance.</span>
        </div>
      </div>
    </div>
  );
};
