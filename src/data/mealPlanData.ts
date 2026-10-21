export interface MealItem {
  type: 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack';
  title: string;
  description: string;
  calories: number;
  proteinG: number;
  carbsG: number;
  fatG: number;
  prepTimeMins: number;
  cuisine: 'Pakistani Fusion' | 'Mediterranean' | 'Fresh Everyday';
  ingredients: string[];
  chefTip?: string;
  imageUrl?: string;
}

export interface DayPlan {
  day: number;
  dayName: string;
  theme: string;
  targetCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
  meals: MealItem[];
}

export interface GroceryCategory {
  category: string;
  items: { name: string; quantity: string; checked: boolean }[];
}

export const SEVEN_DAY_MEAL_PLAN: DayPlan[] = [
  {
    day: 1,
    dayName: 'Monday',
    theme: 'Energy Kickoff · High Protein',
    targetCalories: 1510,
    totalProtein: 114,
    totalCarbs: 132,
    totalFat: 52,
    meals: [
      {
        type: 'Breakfast',
        title: 'Desi Herb & Scallion Anda Ghotala with Whole Wheat Sourdough',
        description: '2 pasture-raised eggs scrambled with minced green chillies, red onions, tomatoes, fresh coriander, and a pinch of turmeric, served on 1 slice of toasted whole wheat sourdough with a drizzle of extra virgin olive oil.',
        calories: 360,
        proteinG: 22,
        carbsG: 28,
        fatG: 16,
        prepTimeMins: 12,
        cuisine: 'Pakistani Fusion',
        ingredients: ['2 eggs', '1/4 cup diced onion', '1/2 diced tomato', 'fresh coriander', '1 slice sourdough', '1 tsp extra virgin olive oil', 'turmeric & cumin'],
        chefTip: 'Cook eggs gently on low heat with 1 tsp olive oil instead of excessive ghee to maintain a creamy curd without oxidation.',
        imageUrl: '/src/assets/images/recipe_anda_ghotala_1792598143190.jpg'
      },
      {
        type: 'Lunch',
        title: 'Spiced Chicken Seekh Kebab Bowl with Mint-Cucumbers Raita',
        description: 'Grilled lean chicken mince kebabs (seasoned with roasted cumin, coriander seeds, and ginger-garlic) served over 1/2 cup brown basmati rice, charred bell peppers, and a refreshing Greek yogurt mint raita.',
        calories: 440,
        proteinG: 40,
        carbsG: 38,
        fatG: 14,
        prepTimeMins: 20,
        cuisine: 'Pakistani Fusion',
        ingredients: ['160g lean chicken breast mince', '1/2 cup cooked brown basmati rice', '1 cup sliced bell peppers', '1/3 cup low-fat Greek yogurt', 'fresh mint', 'cucumber', 'lemon juice'],
        chefTip: 'Skewer and bake or air-fry kebabs at 200°C for 14 minutes to seal juices with zero added cooking oils.',
        imageUrl: '/src/assets/images/recipe_chicken_seekh_bowl_1792598142764.jpg'
      },
      {
        type: 'Snack',
        title: 'Tangy Kala Chana (Black Chickpea) Chaat',
        description: 'Steamed black chickpeas tossed with chopped cucumber, cherry tomatoes, red onion, chaat masala, toasted cumin, and freshly squeezed lemon juice.',
        calories: 190,
        proteinG: 10,
        carbsG: 30,
        fatG: 3,
        prepTimeMins: 5,
        cuisine: 'Pakistani Fusion',
        ingredients: ['1/2 cup boiled black chickpeas', 'cucumber', 'cherry tomatoes', 'lemon juice', 'chaat masala', 'fresh mint'],
        chefTip: 'High-fiber slow-burning snack that prevents late-afternoon blood sugar crashes and insulin spikes.'
      },
      {
        type: 'Dinner',
        title: 'Mediterranean Herb Grilled Fish with Tawa Garlic Saag',
        description: 'Fresh white fish fillet (Red Snapper or Pomfret) seared with garlic, oregano, sumac, and lemon zest, accompanied by tender baby spinach wilted with garlic slices and crushed coriander.',
        calories: 520,
        proteinG: 42,
        carbsG: 36,
        fatG: 19,
        prepTimeMins: 22,
        cuisine: 'Mediterranean',
        ingredients: ['180g white fish fillet', '3 cups baby spinach', '2 cloves sliced garlic', '1 small boiled potato or 1 small multigrain phulka roti', '1 tbsp cold-pressed olive oil', 'lemon', 'oregano & sumac'],
        chefTip: 'Sear the fish on skin-side first until crisp, then finish with a quick squeeze of lemon over the greens.',
        imageUrl: '/src/assets/images/recipe_mediterranean_fish_1792598143751.jpg'
      }
    ]
  },
  {
    day: 2,
    dayName: 'Tuesday',
    theme: 'Anti-Inflammatory & Steady Energy',
    targetCalories: 1490,
    totalProtein: 108,
    totalCarbs: 138,
    totalFat: 50,
    meals: [
      {
        type: 'Breakfast',
        title: 'Cardamom & Cinnamon Chia Pudding with Roasted Almonds',
        description: 'Overnight chia pudding made with unsweetened almond milk, ground green cardamom, Ceylon cinnamon, topped with half a sliced ripe mango (or seasonal berries) and 10 crushed almonds.',
        calories: 340,
        proteinG: 14,
        carbsG: 34,
        fatG: 17,
        prepTimeMins: 5,
        cuisine: 'Fresh Everyday',
        ingredients: ['3 tbsp chia seeds', '1 cup unsweetened almond milk', '1/4 tsp green cardamom powder', '1/2 scoop plant protein or Greek yogurt', '10 raw almonds', 'seasonal fruit'],
        chefTip: 'Cardamom pairs naturally with cinnamon to blunt glycemic response while adding an authentic Lahore aroma.'
      },
      {
        type: 'Lunch',
        title: 'Daal Palak (Spinach Lentil Medley) with Zesty Kachumber',
        description: 'Yellow Moong and Masoor daal gently simmered with chopped spinach, tempered with cumin seeds, garlic, and dried whole red chilli in 1 tsp olive oil. Served with 1 medium 100% whole wheat roti and a crunchy lime kachumber salad.',
        calories: 430,
        proteinG: 22,
        carbsG: 62,
        fatG: 10,
        prepTimeMins: 25,
        cuisine: 'Pakistani Fusion',
        ingredients: ['1/2 cup mixed yellow moong & red masoor lentils', '2 cups chopped spinach', '1 whole wheat roti (35g)', 'cucumber, onion, radish', '1 tsp olive oil for tadka', 'garlic & cumin'],
        chefTip: 'Moong daal is the easiest pulse to digest and packed with bioactive polyphenols.'
      },
      {
        type: 'Snack',
        title: 'Greek Yogurt Dip with Walnut halves & Pomegranate Arils',
        description: 'Thick plain probiotic Greek yogurt drizzled with a half-teaspoon of raw honey, 6 walnut halves, and 2 tbsp ruby pomegranate seeds.',
        calories: 210,
        proteinG: 17,
        carbsG: 16,
        fatG: 9,
        prepTimeMins: 3,
        cuisine: 'Mediterranean',
        ingredients: ['150g plain 0-2% Greek yogurt', '6 raw walnut halves', '2 tbsp pomegranate arils', 'pinch of sea salt'],
        chefTip: 'Provides gut-microbiome support with diverse polyphenol antioxidants.'
      },
      {
        type: 'Dinner',
        title: 'Lemon Herb Grilled Chicken Tikka with Quinoa Tabbouleh',
        description: 'Chicken breast cubes marinated in hung curd, lemon juice, roasted coriander, smoked paprika, and kasuri methi (fenugreek), paired with a parsley-rich quinoa and cucumber tabbouleh salad.',
        calories: 510,
        proteinG: 45,
        carbsG: 26,
        fatG: 14,
        prepTimeMins: 25,
        cuisine: 'Pakistani Fusion',
        ingredients: ['170g chicken breast', '2 tbsp plain yogurt', '1 tsp kasuri methi', '1/2 cup cooked quinoa', '1 cup chopped fresh flat-leaf parsley', 'diced tomato & cucumber', 'olive oil & lemon'],
        chefTip: 'Kasuri methi elevates restaurant-style chicken tikka flavor while adding beneficial herbal compounds.'
      }
    ]
  },
  {
    day: 3,
    dayName: 'Wednesday',
    theme: 'Metabolic Balance & Lean Muscle',
    targetCalories: 1530,
    totalProtein: 118,
    totalCarbs: 126,
    totalFat: 54,
    meals: [
      {
        type: 'Breakfast',
        title: 'Mediterranean Shakshuka with Poached Eggs & Crumbled Feta',
        description: 'Two eggs gently poached in a rich simmer of crushed san marzano tomatoes, roasted cumin, smoked paprika, sweet red peppers, and topped with 20g sheep milk feta and fresh cilantro.',
        calories: 380,
        proteinG: 22,
        carbsG: 24,
        fatG: 21,
        prepTimeMins: 15,
        cuisine: 'Mediterranean',
        ingredients: ['2 large eggs', '1 cup crushed tomatoes', '1/2 red bell pepper', '20g crumbled feta', '1 slice whole grain sourdough', 'cumin, coriander, paprika'],
        chefTip: 'Cover the skillet with a lid for 3 minutes for perfectly runny yolks that coat the tomato sauce.',
        imageUrl: '/src/assets/images/recipe_shakshuka_skillet_1792598142934.jpg'
      },
      {
        type: 'Lunch',
        title: 'Tawa Bhindi (Spiced Okra) with Grilled Herb Paneer or Tofu',
        description: 'Crisp seared okra sautéed with sliced red onions, tomatoes, and amchur (dry mango powder), accompanied by 80g seared low-fat paneer (or firm tofu) and 1 small multigrain flatbread.',
        calories: 450,
        proteinG: 28,
        carbsG: 42,
        fatG: 16,
        prepTimeMins: 20,
        cuisine: 'Pakistani Fusion',
        ingredients: ['200g sliced fresh okra (bhindi)', '80g light paneer or firm organic tofu', '1 small onion & tomato', '1/2 tsp amchur powder', '1 small whole wheat phulka', '1 tsp olive oil'],
        chefTip: 'Dry okra thoroughly before slicing to prevent sliminess, and sear on high heat before adding spices.'
      },
      {
        type: 'Snack',
        title: 'Roasted Makhana (Foxnuts) with Turmeric & Chaat Masala',
        description: 'Crispy popped lotus seeds dry-roasted in 1/2 tsp extra virgin olive oil with sea salt, turmeric, and tangy chat masala.',
        calories: 160,
        proteinG: 5,
        carbsG: 26,
        fatG: 3,
        prepTimeMins: 6,
        cuisine: 'Pakistani Fusion',
        ingredients: ['1.5 cups lotus seeds (makhana)', '1/2 tsp olive oil', 'turmeric, chaat masala, pink Himalayan salt'],
        chefTip: 'Makhana is low in glycemic index, high in magnesium, and satisfies the desire for savory crunch.'
      },
      {
        type: 'Dinner',
        title: 'Braised Beef/Chicken Keema with Peas & Cauliflower "Rice"',
        description: 'Extra-lean minced meat cooked with sweet green peas, ginger batons, whole spices (black cardamom, cinnamon stick), served over a base of light cauliflower rice sautéed with coriander.',
        calories: 540,
        proteinG: 49,
        carbsG: 34,
        fatG: 14,
        prepTimeMins: 25,
        cuisine: 'Pakistani Fusion',
        ingredients: ['170g extra lean minced chicken or beef (95% lean)', '1/3 cup green peas', '2 cups riced cauliflower', 'fresh ginger slivers', 'whole garam masala spices', '1 tsp olive oil'],
        chefTip: 'Blending cauliflower rice with real whole spices mimics the comfort of biryani/pulao with 75% fewer carbs.'
      }
    ]
  },
  {
    day: 4,
    dayName: 'Thursday',
    theme: 'Gut Health & Digestive Wellness',
    targetCalories: 1480,
    totalProtein: 112,
    totalCarbs: 130,
    totalFat: 48,
    meals: [
      {
        type: 'Breakfast',
        title: 'Golden Turmeric Whey / Plant Protein Oats Bowl',
        description: 'Rolled steel-cut oats simmered with turmeric, a grind of black pepper, and almond milk, stirred with 1 scoop vanilla protein powder and topped with 1 tbsp chia seeds and fresh kiwi slices.',
        calories: 370,
        proteinG: 32,
        carbsG: 44,
        fatG: 8,
        prepTimeMins: 8,
        cuisine: 'Fresh Everyday',
        ingredients: ['1/2 cup rolled oats', '1 scoop protein powder (25g protein)', '1 cup almond milk', '1/4 tsp turmeric', 'pinch black pepper (for curcumin absorption)', '1 fresh kiwi', '1 tbsp chia'],
        chefTip: 'Piperine in black pepper increases curcumin bioavailability from turmeric by up to 2,000%.'
      },
      {
        type: 'Lunch',
        title: 'Mediterranean Herb Tuna or Chickpea Niçoise Salad',
        description: 'Wild tuna in water (or seasoned chickpeas) tossed with baby greens, steamed green beans, boiled egg quartered, kalamata olives, and a zesty Dijon lemon vinaigrette.',
        calories: 420,
        proteinG: 38,
        carbsG: 22,
        fatG: 18,
        prepTimeMins: 15,
        cuisine: 'Mediterranean',
        ingredients: ['1 can (130g) skipjack tuna or 3/4 cup chickpeas', '1 boiled egg', '1.5 cups mixed salad greens', '1/2 cup steamed French green beans', '5 kalamata olives', 'lemon mustard dressing'],
        chefTip: 'Excellent source of brain-healthy omega-3 fatty acids and bioavailable choline.'
      },
      {
        type: 'Snack',
        title: 'Spiced Cucumber Spears with Hummus & Mint',
        description: 'Crispy Persian cucumber batons and rainbow carrots dipped into 3 tbsp traditional garlic hummus dusted with sumac.',
        calories: 170,
        proteinG: 6,
        carbsG: 18,
        fatG: 8,
        prepTimeMins: 4,
        cuisine: 'Mediterranean',
        ingredients: ['2 Persian cucumbers', '2 rainbow carrots', '3 tbsp olive oil garlic hummus', 'sumac & mint'],
        chefTip: 'Hydrating, high-volume snack packed with dietary fiber and healthy sesame tahini fats.'
      },
      {
        type: 'Dinner',
        title: 'Slow-Cooked Boneless Lamb/Chicken Rogan Josh with Steamed Veggies',
        description: 'Tender lean cuts braised in Kashmiri chilli, yogurt, fennel seeds, and ginger gravy with zero heavy oil floating. Served alongside 1/2 cup steamed cumin brown rice and roasted zucchini.',
        calories: 520,
        proteinG: 46,
        carbsG: 46,
        fatG: 14,
        prepTimeMins: 30,
        cuisine: 'Pakistani Fusion',
        ingredients: ['160g trimmed lean chicken breast or lean lamb fillet', '1/3 cup low-fat curd', 'fennel powder & dry ginger powder (sonth)', '1/2 cup brown rice', '1 medium zucchini roasted with oregano'],
        chefTip: 'Using authentic Kashmiri chilli delivers deep crimson color and aroma with gentle warmth, avoiding stomach irritation.'
      }
    ]
  },
  {
    day: 5,
    dayName: 'Friday',
    theme: 'Cellular Vitality & Clean Greens',
    targetCalories: 1520,
    totalProtein: 115,
    totalCarbs: 135,
    totalFat: 51,
    meals: [
      {
        type: 'Breakfast',
        title: 'Herb & Feta Frittata with Sun-Dried Tomatoes & Rocket',
        description: 'Fluffy 2-egg and 1 egg white frittata baked with baby spinach, finely chopped dill, sun-dried tomatoes, and crumbled goat feta. Accompanied by a slice of toasted rye or sourdough.',
        calories: 360,
        proteinG: 26,
        carbsG: 22,
        fatG: 17,
        prepTimeMins: 15,
        cuisine: 'Mediterranean',
        ingredients: ['2 whole eggs + 1 egg white', '1 cup baby spinach', '1 tbsp chopped fresh dill', '1 tbsp sun-dried tomatoes (in oil, drained)', '15g feta', '1 slice rye bread'],
        chefTip: 'Whisking a splash of cold water into eggs before cooking creates micro-steam pockets for an ultra-tender texture.'
      },
      {
        type: 'Lunch',
        title: 'Chana Daal with Lauki (Bottle Gourd) & Roasted Jeera Rice',
        description: 'Hearty split Bengal gram lentils simmered with cooling tender bottle gourd cubes, seasoned with ginger, turmeric, and a coriander leaf garnish. Served with 1/2 cup aromatic roasted cumin basmati rice.',
        calories: 440,
        proteinG: 21,
        carbsG: 68,
        fatG: 8,
        prepTimeMins: 25,
        cuisine: 'Pakistani Fusion',
        ingredients: ['1/2 cup chana daal', '1 cup diced lauki (bottle gourd)', '1/2 cup cooked basmati rice with toasted jeera', 'fresh green chilies', 'tomato & garlic'],
        chefTip: 'Lauki is exceptionally light, diuretic, and provides soothing digestive alkaline balance.'
      },
      {
        type: 'Snack',
        title: 'Spiced Protein Golden Lassi',
        description: 'Chilled lassi blended from kefir/Greek yogurt, cold water, a pinch of roasted cumin, fresh mint, pink salt, and a splash of unflavored collagen or whey.',
        calories: 180,
        proteinG: 20,
        carbsG: 10,
        fatG: 4,
        prepTimeMins: 3,
        cuisine: 'Pakistani Fusion',
        ingredients: ['1 cup kefir or low-fat yogurt', '1/2 cup chilled water', 'fresh mint leaves', 'roasted jeera powder', 'black salt (kala namak)', '10g collagen or protein'],
        chefTip: 'A refreshing savory Lahori probiotic drink that cools the core and curtails hunger.'
      },
      {
        type: 'Dinner',
        title: 'Za’atar Grilled Chicken Thighs with Roasted Cauliflower & Tahini',
        description: 'Skinless boneless chicken thighs seasoned with middle-eastern za’atar herbs, lemon juice, and grilled tender, served over caramelized spiced cauliflower florets with a 1 tbsp lemon-tahini drizzle.',
        calories: 540,
        proteinG: 48,
        carbsG: 15,
        fatG: 22,
        prepTimeMins: 25,
        cuisine: 'Mediterranean',
        ingredients: ['180g skinless chicken thigh', '1 tbsp za’atar (thyme, sumac, sesame)', '2 cups cauliflower florets', '1 tbsp raw tahini', 'lemon juice & garlic', 'olive oil spray'],
        chefTip: 'Roasting cauliflower at 210°C until the edges brown caramelizes natural sugars without needing added sweetness.'
      }
    ]
  },
  {
    day: 6,
    dayName: 'Saturday',
    theme: 'Weekend Feast · Clean Flavor Fusion',
    targetCalories: 1540,
    totalProtein: 116,
    totalCarbs: 140,
    totalFat: 52,
    meals: [
      {
        type: 'Breakfast',
        title: 'Lahori Halwa-Puri Reimagined: Spiced Chana with Baked Whole Wheat Puri',
        description: 'A clinical chef adaptation: fragrant slow-cooked Punjabi white cholay cooked in amla and tea liquor for dark richness, paired with 1 baked whole-wheat crisp puri (or whole wheat roti) and pickled carrots.',
        calories: 390,
        proteinG: 18,
        carbsG: 58,
        fatG: 10,
        prepTimeMins: 20,
        cuisine: 'Pakistani Fusion',
        ingredients: ['3/4 cup boiled chickpeas', 'whole garam masala', 'amla/black tea infusion for color', '1 whole wheat baked flatbread', 'shredded ginger', 'pickled carrot slices'],
        chefTip: 'All the deep nostalgia of iconic Lahore Sunday breakfast, but 100% baked with zero trans-fats.'
      },
      {
        type: 'Lunch',
        title: 'Sumac & Herb Prawn Skewers with Mediterranean Bulgur Pilaf',
        description: 'Juicy tiger prawns skewered with red onion and cherry tomatoes, grilled with crushed garlic and dried sumac, served over 1/2 cup fiber-rich steamed coarse bulgur wheat with fresh herbs.',
        calories: 430,
        proteinG: 38,
        carbsG: 44,
        fatG: 10,
        prepTimeMins: 18,
        cuisine: 'Mediterranean',
        ingredients: ['180g peeled tiger prawns', '1/2 cup cooked coarse bulgur', 'cherry tomatoes', 'red onion wedges', 'chopped parsley', '1 tbsp lemon vinaigrette', 'sumac'],
        chefTip: 'Prawns cook in under 4 minutes total. When they turn pink and form a C-shape, remove immediately from heat.'
      },
      {
        type: 'Snack',
        title: 'Dark Chocolate (85%) with Pistachios & Cardamom Tea',
        description: '2 squares of 85% single-origin dark chocolate enjoyed with 10 roasted unsalted Pakistani pistachios and a hot cup of unsweetened green cardamom tea (Kehwa).',
        calories: 180,
        proteinG: 5,
        carbsG: 12,
        fatG: 13,
        prepTimeMins: 5,
        cuisine: 'Pakistani Fusion',
        ingredients: ['20g 85% dark chocolate', '10 raw pistachios', 'fresh brewed green tea with green cardamom pod'],
        chefTip: 'Flavanol-rich dark chocolate stimulates nitric oxide for vascular elasticity and mood elevation.'
      },
      {
        type: 'Dinner',
        title: 'Grilled Salmon/Mackerel with Spiced Eggplant (Baingan Bharta)',
        description: 'Heart-healthy wild salmon seared in olive oil, served alongside smoky fire-roasted eggplant mashed with caramelized onions, tomatoes, and green chillies.',
        calories: 540,
        proteinG: 45,
        carbsG: 26,
        fatG: 29,
        prepTimeMins: 30,
        cuisine: 'Pakistani Fusion',
        ingredients: ['160g salmon or mackerel fillet', '1 large whole roasted eggplant (baingan)', '1 small onion & tomato', 'fresh coriander', '1 tsp cold-pressed olive oil'],
        chefTip: 'Roast the eggplant directly over an open flame until charred black to impart authentic Punjabi smokiness.'
      }
    ]
  },
  {
    day: 7,
    dayName: 'Sunday',
    theme: 'Rest, Recovery & Weekly Reset',
    targetCalories: 1500,
    totalProtein: 110,
    totalCarbs: 134,
    totalFat: 50,
    meals: [
      {
        type: 'Breakfast',
        title: 'Avocado, Poached Egg & Labneh Toast with Dukkah Spices',
        description: 'Toasted seeded artisan sourdough spread with 1 tbsp creamy strained labneh, 1/3 smashed Haas avocado, a soft poached egg, and 1 tsp Egyptian Dukkah seed crunch.',
        calories: 370,
        proteinG: 18,
        carbsG: 26,
        fatG: 22,
        prepTimeMins: 12,
        cuisine: 'Mediterranean',
        ingredients: ['1 slice seeded sourdough', '1 egg poached', '35g ripe avocado', '1 tbsp labneh / Greek yogurt', 'dukkah spice mix (sesame, coriander, hazelnut)'],
        chefTip: 'Dukkah brings crunch, monounsaturated fats, and warm aromatics without excess sodium.'
      },
      {
        type: 'Lunch',
        title: 'Clean Chicken Yakhni Pulao with Crunchy Mint Salad',
        description: 'Traditional bone-broth infused chicken pulao made with extra-lean chicken breast and brown basmati rice, slow-cooked in aromatic yakhni (coriander, fennel, black peppercorns). Served with a cucumber lime salad.',
        calories: 460,
        proteinG: 42,
        carbsG: 48,
        fatG: 10,
        prepTimeMins: 35,
        cuisine: 'Pakistani Fusion',
        ingredients: ['160g chicken breast', '1/2 cup brown basmati rice', 'chicken bone broth infused with fennel & coriander seeds', 'cucumber & radish salad'],
        chefTip: 'Simmering rice in homemade yakhni infuses natural gelatin and deep flavor so no heavy oil is needed.'
      },
      {
        type: 'Snack',
        title: 'Spiced Edamame with Chaat Masala & Lime',
        description: 'Steamed green edamame pods tossed with coarse pink sea salt, lime zest, and a pinch of Kashmiri red chilli powder.',
        calories: 160,
        proteinG: 14,
        carbsG: 11,
        fatG: 6,
        prepTimeMins: 5,
        cuisine: 'Fresh Everyday',
        ingredients: ['1 cup edamame pods in shell', 'lime juice', 'chaat masala', 'pink salt'],
        chefTip: 'Edamame is a complete plant protein containing all 9 essential amino acids in optimal ratios.'
      },
      {
        type: 'Dinner',
        title: 'Spiced Lentil Shepherd’s Skillet with Sweet Potato Mash',
        description: 'Brown pardina lentils cooked with mirepoix vegetables, crushed tomatoes, and warm cumin, crowned with a golden crust of whipped sweet potato and olive oil.',
        calories: 510,
        proteinG: 26,
        carbsG: 79,
        fatG: 12,
        prepTimeMins: 30,
        cuisine: 'Fresh Everyday',
        ingredients: ['3/4 cup cooked brown lentils', '1 medium roasted sweet potato whipped with 1 tsp olive oil', 'diced carrots, celery, onion', 'fresh thyme & rosemary'],
        chefTip: 'A comforting, glycogen-replenishing vegetarian finish to the week that promotes deep restful sleep.'
      }
    ]
  }
];

export const GROCERY_CATEGORIES: GroceryCategory[] = [
  {
    category: 'Fresh Produce (Vegetables & Fruits)',
    items: [
      { name: 'Baby Spinach & Rocket leaves', quantity: '2 large bunches / 400g', checked: false },
      { name: 'Fresh Coriander (Dhania) & Mint (Pudina)', quantity: '3 bunches each', checked: false },
      { name: 'English Cucumbers & Persian salad cucumbers', quantity: '8-10 count', checked: false },
      { name: 'Roma Tomatoes & Cherry Tomatoes', quantity: '1.5 kg / 1 punnet', checked: false },
      { name: 'Red Onions & Spring Onions / Scallions', quantity: '1 kg + 1 bunch', checked: false },
      { name: 'Fresh Okra (Bhindi)', quantity: '400g tender pods', checked: false },
      { name: 'Bottle Gourd (Lauki)', quantity: '1 medium', checked: false },
      { name: 'Large Purple Eggplant (Baingan)', quantity: '1 large', checked: false },
      { name: 'Zucchini & French Green Beans', quantity: '2 medium + 250g beans', checked: false },
      { name: 'Cauliflower (for florets and ricing)', quantity: '1 large head', checked: false },
      { name: 'Lemons / Limes & Fresh Ginger & Garlic', quantity: '10 lemons, 200g ginger, 2 heads garlic', checked: false },
      { name: 'Sweet Potatoes & Ripe Avocados', quantity: '2 medium sweet potatoes, 2 avocados', checked: false },
      { name: 'Fresh Kiwi & Seasonal Berries / Pomegranate', quantity: '4 kiwis, 1 pomegranate', checked: false }
    ]
  },
  {
    category: 'Lean Proteins & Seafood',
    items: [
      { name: 'Pasture-Raised Eggs', quantity: '18-24 eggs', checked: false },
      { name: 'Boneless Skinless Chicken Breast', quantity: '1.2 kg', checked: false },
      { name: 'Lean Chicken Breast Mince (Keema)', quantity: '500g', checked: false },
      { name: 'Fresh White Fish Fillets (Red Snapper / Pomfret)', quantity: '350g (2 fillets)', checked: false },
      { name: 'Wild Salmon Fillets or Mackerel', quantity: '320g (2 portions)', checked: false },
      { name: 'Tiger Prawns (peeled and deveined)', quantity: '250g', checked: false },
      { name: 'Wild Skipjack Tuna in Water', quantity: '2 cans (130g each)', checked: false },
      { name: 'Frozen Edamame Pods', quantity: '1 bag (400g)', checked: false }
    ]
  },
  {
    category: 'Dairy & Plant-Based Alternatives',
    items: [
      { name: 'Plain Greek Yogurt (0% to 2% fat, unsweetened)', quantity: '1 kg tub', checked: false },
      { name: 'Unsweetened Almond Milk or Oat Milk', quantity: '2 liters', checked: false },
      { name: 'Authentic Sheep / Goat Milk Feta Cheese', quantity: '150g block', checked: false },
      { name: 'Light Paneer or Extra-Firm Organic Tofu', quantity: '200g pack', checked: false },
      { name: 'Traditional Strained Labneh or Kefir', quantity: '250g tub', checked: false },
      { name: 'Whey Isolate or Plant Protein Powder (Vanilla / Unflavored)', quantity: '1 tub', checked: false }
    ]
  },
  {
    category: 'Pantry Grains, Pulses & Healthy Fats',
    items: [
      { name: 'Brown Basmati Rice & Coarse Bulgur Wheat', quantity: '1 kg each', checked: false },
      { name: 'Whole Wheat Flour (Chakki Atta) or Multigrain Phulkas', quantity: '1 kg', checked: false },
      { name: 'Artisan Seeded Whole Wheat Sourdough Bread', quantity: '1 loaf', checked: false },
      { name: 'Rolled Steel-Cut Oats', quantity: '500g', checked: false },
      { name: 'Black Chickpeas (Kala Chana) & White Kabuli Chickpeas', quantity: '500g each (dried or canned)', checked: false },
      { name: 'Yellow Moong & Red Masoor Lentils', quantity: '500g each', checked: false },
      { name: 'Split Bengal Gram (Chana Daal)', quantity: '500g', checked: false },
      { name: 'Popped Lotus Seeds (Phool Makhana)', quantity: '100g bag', checked: false },
      { name: 'Cold-Pressed Extra Virgin Olive Oil', quantity: '1 bottle (750ml)', checked: false },
      { name: 'Raw Walnuts, Almonds & Pistachios', quantity: '150g each', checked: false },
      { name: 'Black Chia Seeds & Sesame Seeds', quantity: '200g bag', checked: false },
      { name: 'Dark Chocolate (85% cocoa)', quantity: '1 bar (100g)', checked: false }
    ]
  },
  {
    category: 'Spices & Culinary Aromatics',
    items: [
      { name: 'Kasuri Methi (Dried Fenugreek Leaves)', quantity: '1 box', checked: false },
      { name: 'Kashmiri Red Chilli Powder & Chaat Masala', quantity: 'Standard pantry', checked: false },
      { name: 'Whole Cumin Seeds (Zeera) & Coriander Seeds', quantity: 'Standard pantry', checked: false },
      { name: 'Green Cardamom (Ilaichi) & Cinnamon Sticks', quantity: 'Standard pantry', checked: false },
      { name: 'Middle Eastern Za’atar & Sumac', quantity: '1 jar each', checked: false },
      { name: 'Dijon Mustard & Apple Cider Vinegar / Wine Vinegar', quantity: '1 jar / bottle', checked: false }
    ]
  }
];

export const MEAL_PREP_TIPS = [
  {
    title: 'Sunday Batch-Lentil & Grain Boiling (The Base Foundation)',
    instruction: 'Simmer a 2-cup batch of mixed Moong/Masoor daal and a batch of black chickpeas (Kala Chana). Store in glass airtight containers. Having pre-cooked legumes turns 40-minute cooking times into 8-minute sauté sessions on weeknights.',
    timeSaved: '2.5 hours across the week'
  },
  {
    title: 'The Clean Tikka & Herb Marinade Station',
    instruction: 'Portion chicken breast and lean mince into two glass containers. Coat with Greek yogurt, lemon, ginger-garlic paste, kasuri methi, and roasted cumin. Raw chicken holds safely in acidic yogurt marinade for up to 72 hours, breaking down fibers for tender texture.',
    timeSaved: '40 minutes daily'
  },
  {
    title: 'Vegetable Wash & Spinning Protocol',
    instruction: 'Wash and thoroughly spin-dry your baby spinach, rocket, cilantro, and mint on Sunday afternoon. Wrap in dry unbleached kitchen paper inside a sealable container. This preserves crispness for 7 full days with zero wilting or bacterial slime.',
    timeSaved: '15 minutes per meal'
  }
];
