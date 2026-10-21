import React, { useState } from 'react';
import {
  SEVEN_DAY_MEAL_PLAN,
  GROCERY_CATEGORIES,
  MEAL_PREP_TIPS,
  DayPlan,
  MealItem,
} from '../data/mealPlanData';
import {
  Utensils,
  ShoppingBag,
  Sparkles,
  Flame,
  Clock,
  Heart,
  ChefHat,
  Check,
  CheckSquare,
  Square,
  Share2,
  ChevronRight,
  Filter,
} from 'lucide-react';
import { WaterTracker } from './WaterTracker';

export const MealPlannerView: React.FC = () => {
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(0);
  const [calorieMultiplier, setCalorieMultiplier] = useState<number>(1.0); // 1.0 = ~1,500 kcal
  const [groceryState, setGroceryState] = useState(GROCERY_CATEGORIES);
  const [activeTab, setActiveTab] = useState<'plan' | 'grocery' | 'prep'>('plan');
  const [selectedMealType, setSelectedMealType] = useState<string>('All');
  const [copiedList, setCopiedList] = useState(false);

  const currentDay: DayPlan = SEVEN_DAY_MEAL_PLAN[selectedDayIndex];

  // Adjust macros according to multiplier
  const adjustedCalories = Math.round(currentDay.targetCalories * calorieMultiplier);
  const adjustedProtein = Math.round(currentDay.totalProtein * calorieMultiplier);
  const adjustedCarbs = Math.round(currentDay.totalCarbs * calorieMultiplier);
  const adjustedFat = Math.round(currentDay.totalFat * calorieMultiplier);

  // Toggle grocery item checkbox
  const toggleGroceryItem = (catIndex: number, itemIndex: number) => {
    setGroceryState((prev) => {
      const next = [...prev];
      next[catIndex] = {
        ...next[catIndex],
        items: [...next[catIndex].items],
      };
      next[catIndex].items[itemIndex] = {
        ...next[catIndex].items[itemIndex],
        checked: !next[catIndex].items[itemIndex].checked,
      };
      return next;
    });
  };

  const totalGroceryItems = groceryState.reduce((acc, cat) => acc + cat.items.length, 0);
  const completedGroceryItems = groceryState.reduce(
    (acc, cat) => acc + cat.items.filter((i) => i.checked).length,
    0
  );

  const handleCopyGroceryList = () => {
    let text = '🛒 7-DAY NUTRITION GROCERY LIST:\n\n';
    groceryState.forEach((cat) => {
      text += `--- ${cat.category.toUpperCase()} ---\n`;
      cat.items.forEach((item) => {
        text += `[${item.checked ? 'x' : ' '}] ${item.name} (${item.quantity})\n`;
      });
      text += '\n';
    });
    navigator.clipboard.writeText(text);
    setCopiedList(true);
    setTimeout(() => setCopiedList(false), 2000);
  };

  const filteredMeals =
    selectedMealType === 'All'
      ? currentDay.meals
      : currentDay.meals.filter((m) => m.type === selectedMealType);

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Minimalist Editorial Header */}
      <div className="mb-8 border-b border-stone-200 pb-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-medium text-amber-800 tracking-wide mb-1.5">
              Pakistani &amp; Mediterranean Protocol
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-stone-900 tracking-tight">
              7-Day Nutrition Plan
            </h1>
            <p className="mt-1.5 text-stone-500 text-sm leading-relaxed">
              1,500 daily calories with a high-protein focus (~115g/day), healthy fats, and low glycemic index.
            </p>
          </div>

          {/* Sub-view Switcher Tabs */}
          <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg shrink-0">
            <button
              onClick={() => setActiveTab('plan')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                activeTab === 'plan'
                  ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Meal Plan
            </button>
            <button
              onClick={() => setActiveTab('grocery')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 ${
                activeTab === 'grocery'
                  ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <span>Grocery List</span>
              <span className="text-[10px] font-mono text-stone-400">
                ({completedGroceryItems}/{totalGroceryItems})
              </span>
            </button>
            <button
              onClick={() => setActiveTab('prep')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                activeTab === 'prep'
                  ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Prep Guide
            </button>
          </div>
        </div>

        {/* Minimalist Macro Strip */}
        <div className="mt-6 pt-5 border-t border-stone-100 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div>
            <div className="text-xs text-stone-400 font-medium">Daily Target</div>
            <div className="text-xl font-bold font-['Outfit'] text-stone-900 mt-0.5 tabular-nums">
              {adjustedCalories} <span className="text-xs text-stone-400 font-normal">kcal</span>
            </div>
          </div>

          <div>
            <div className="text-xs text-stone-400 font-medium">Protein</div>
            <div className="text-xl font-bold font-['Outfit'] text-amber-900 mt-0.5 tabular-nums">
              {adjustedProtein}g <span className="text-xs text-stone-400 font-normal">satiety</span>
            </div>
          </div>

          <div>
            <div className="text-xs text-stone-400 font-medium">Carbohydrates</div>
            <div className="text-xl font-bold font-['Outfit'] text-stone-900 mt-0.5 tabular-nums">
              {adjustedCarbs}g <span className="text-xs text-stone-400 font-normal">complex</span>
            </div>
          </div>

          <div>
            <div className="text-xs text-stone-400 font-medium">Fats</div>
            <div className="text-xl font-bold font-['Outfit'] text-stone-900 mt-0.5 tabular-nums">
              {adjustedFat}g <span className="text-xs text-stone-400 font-normal">healthy</span>
            </div>
          </div>
        </div>
      </div>

      {/* VIEW 1: 7-DAY MEAL PLAN */}
      {activeTab === 'plan' && (
        <div className="space-y-6">
          {/* Day Navigation Tabs */}
          <div className="flex items-center justify-between flex-wrap gap-4 pb-2 border-b border-stone-200">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full scrollbar-none">
              {SEVEN_DAY_MEAL_PLAN.map((plan, idx) => (
                <button
                  key={plan.day}
                  onClick={() => setSelectedDayIndex(idx)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
                    selectedDayIndex === idx
                      ? 'bg-amber-800 text-white shadow-2xs'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
                  }`}
                >
                  {plan.dayName}
                </button>
              ))}
            </div>

            {/* Meal Type Quick Filter */}
            <div className="flex items-center gap-1 text-xs">
              <span className="text-stone-400 mr-1 hidden sm:inline">Filter:</span>
              {['All', 'Breakfast', 'Lunch', 'Dinner', 'Snack'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedMealType(type)}
                  className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                    selectedMealType === type
                      ? 'bg-stone-900 text-white'
                      : 'text-stone-500 hover:text-stone-900 hover:bg-stone-100'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Current Day Header */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-1">
            <h2 className="text-base font-bold font-['Outfit'] text-stone-900">
              {currentDay.dayName} <span className="text-stone-300 font-normal">·</span> <span className="text-xs font-normal text-stone-500">{currentDay.theme}</span>
            </h2>
            <div className="flex items-center gap-3 text-xs text-stone-500 font-mono">
              <span>{Math.round(currentDay.targetCalories * calorieMultiplier)} kcal</span>
              <span className="text-stone-300">·</span>
              <span className="text-amber-900 font-medium">{Math.round(currentDay.totalProtein * calorieMultiplier)}g protein</span>
            </div>
          </div>

          {/* Water Intake Tracker Component */}
          <WaterTracker dayName={currentDay.dayName} />

          {/* Meals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredMeals.map((meal, idx) => (
              <article
                key={idx}
                className="bg-white border border-stone-200/90 rounded-2xl shadow-xs hover:border-stone-300 hover:shadow-sm transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Recipe Photography if available */}
                  {meal.imageUrl && (
                    <div className="relative w-full h-52 sm:h-56 bg-stone-100 overflow-hidden">
                      <img
                        src={meal.imageUrl}
                        alt={meal.title}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent pointer-events-none" />
                      
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                        <span className="font-semibold text-white/95 text-[11px] uppercase tracking-wider bg-stone-950/60 backdrop-blur-xs px-2.5 py-1 rounded-md">
                          {meal.type}
                        </span>
                        <span className="text-stone-200 text-xs font-mono bg-stone-950/60 backdrop-blur-xs px-2 py-0.5 rounded-md flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {meal.prepTimeMins}m
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    {/* Top unboxed metadata if no image */}
                    {!meal.imageUrl && (
                      <div className="flex items-center justify-between text-xs text-stone-400 mb-2.5">
                        <div className="flex items-center gap-1.5 font-medium text-amber-900">
                          <span>{meal.type}</span>
                          <span aria-hidden="true" className="text-stone-300">·</span>
                          <span className="text-stone-500 font-normal">{meal.cuisine}</span>
                        </div>
                        <div className="flex items-center gap-1 text-stone-400 text-xs">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{meal.prepTimeMins} mins</span>
                        </div>
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="text-lg font-bold font-['Outfit'] text-stone-900 leading-snug group-hover:text-amber-800 transition-colors">
                      {meal.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-sm text-stone-600 leading-relaxed font-['Plus_Jakarta_Sans']">
                      {meal.description}
                    </p>

                    {/* Ingredients Minimalist Row */}
                    <div className="mt-4 pt-3 border-t border-stone-100">
                      <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider block mb-2">
                        Key Ingredients
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {meal.ingredients.map((ing, iIdx) => (
                          <span
                            key={iIdx}
                            className="text-xs bg-stone-50 border border-stone-200/60 text-stone-700 px-2.5 py-1 rounded-md"
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Chef Tip */}
                    {meal.chefTip && (
                      <div className="mt-4 p-3.5 bg-stone-50/80 border border-stone-200/60 rounded-xl text-xs text-stone-700 flex gap-2.5">
                        <ChefHat className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                        <div>
                          <strong className="block font-semibold text-stone-900 mb-0.5">Chef's Method:</strong>
                          <span className="text-stone-600 leading-relaxed">{meal.chefTip}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Macro Footer */}
                <div className="px-6 py-3 bg-stone-50/90 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-stone-500">
                  <div>
                    <span className="text-stone-400">Calories: </span>
                    <strong className="text-stone-900 font-bold">{Math.round(meal.calories * calorieMultiplier)}</strong>
                  </div>
                  <div>
                    <span className="text-stone-400">Protein: </span>
                    <strong className="text-amber-900 font-bold">{Math.round(meal.proteinG * calorieMultiplier)}g</strong>
                  </div>
                  <div>
                    <span className="text-stone-400">Carbs: </span>
                    <strong className="text-stone-700">{Math.round(meal.carbsG * calorieMultiplier)}g</strong>
                  </div>
                  <div>
                    <span className="text-stone-400">Fat: </span>
                    <strong className="text-stone-700">{Math.round(meal.fatG * calorieMultiplier)}g</strong>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* VIEW 2: CATEGORIZED GROCERY SHOPPING LIST */}
      {activeTab === 'grocery' && (
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-white border border-stone-200 rounded-2xl shadow-xs">
            <div>
              <h2 className="text-xl font-bold font-['Outfit'] text-stone-900">
                Weekly Grocery Shopping List
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                Aisle-by-aisle organization for quick in-store shopping or online delivery basket.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleCopyGroceryList}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
              >
                {copiedList ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copiedList ? 'Copied to Clipboard' : 'Export / Copy List'}</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {groceryState.map((cat, catIdx) => (
              <div
                key={catIdx}
                className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-stone-100 pb-3 mb-4">
                    <h3 className="text-base font-bold font-['Outfit'] text-stone-900">
                      {cat.category}
                    </h3>
                    <span className="text-xs text-stone-400 font-mono">
                      {cat.items.filter((i) => i.checked).length}/{cat.items.length}
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {cat.items.map((item, itemIdx) => (
                      <label
                        key={itemIdx}
                        onClick={() => toggleGroceryItem(catIdx, itemIdx)}
                        className={`flex items-start gap-3 p-2 rounded-lg cursor-pointer transition-colors text-xs select-none ${
                          item.checked
                            ? 'bg-stone-50 text-stone-400 line-through'
                            : 'hover:bg-stone-50 text-stone-800'
                        }`}
                      >
                        <div className="mt-0.5 text-amber-800">
                          {item.checked ? (
                            <CheckSquare className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <Square className="w-4 h-4 text-stone-300" />
                          )}
                        </div>
                        <div className="flex-1 flex items-baseline justify-between gap-2">
                          <span className={item.checked ? 'text-stone-400' : 'font-medium text-stone-900'}>
                            {item.name}
                          </span>
                          <span className="font-mono text-stone-400 text-[11px] shrink-0">
                            {item.quantity}
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW 3: CHEF MEAL PREP TIPS */}
      {activeTab === 'prep' && (
        <div className="space-y-6">
          <div className="p-6 bg-white border border-stone-200 rounded-2xl shadow-xs">
            <h2 className="text-xl font-bold font-['Outfit'] text-stone-900 mb-1">
              Private Chef Meal-Prep Protocol
            </h2>
            <p className="text-xs text-stone-500 max-w-2xl">
              Professional kitchen staging tips to prepare 80% of your weekly nutrition on Sunday afternoon, cutting daily prep down to 10-15 minutes.
            </p>
          </div>

          <div className="space-y-4">
            {MEAL_PREP_TIPS.map((tip, idx) => (
              <div
                key={idx}
                className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs flex flex-col sm:flex-row sm:items-start gap-5"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-base shrink-0 font-['Outfit']">
                  0{idx + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold font-['Outfit'] text-stone-900">
                    {tip.title}
                  </h3>
                  <p className="mt-2 text-sm text-stone-600 leading-relaxed font-['Plus_Jakarta_Sans']">
                    {tip.instruction}
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-emerald-800 font-semibold font-mono">
                    <span>&bull; Estimated Time Saved:</span>
                    <span>{tip.timeSaved}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
