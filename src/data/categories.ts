export const categorySlugs = [
  'urban-gardening',
  'hydroponics',
  'grow-lights',
  'containers-planters',
  'soil-fertilizers',
  'plant-problems',
] as const;

export type CategorySlug = (typeof categorySlugs)[number];

export type CategoryDefinition = {
  slug: CategorySlug;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  intro: string;
  accent: string;
};

export const categories: CategoryDefinition[] = [
  {
    slug: 'urban-gardening',
    title: 'Urban Gardening',
    shortTitle: 'Urban Gardening',
    summary: 'Balcony, patio, and windowsill growing systems designed for city life.',
    description:
      'Practical strategies for growing herbs, vegetables, and flowers in compact city spaces with reliable yields and manageable upkeep.',
    intro:
      'Urban gardening works best when layout, light, airflow, and container volume are treated as one system. This section focuses on repeatable methods for balconies, rooftops, and tight outdoor spaces.',
    accent: '#6f8763',
  },
  {
    slug: 'hydroponics',
    title: 'Hydroponics',
    shortTitle: 'Hydroponics',
    summary: 'Simple hydro systems, nutrient basics, and troubleshooting for indoor growers.',
    description:
      'Clear, science-based hydroponic guides for herbs and leafy greens, from countertop kits to dialed-in nutrient management.',
    intro:
      'Hydroponics rewards consistency. These guides focus on simple, stable setups, how to avoid nutrient mistakes, and how to read what your plants are telling you before problems escalate.',
    accent: '#5f857e',
  },
  {
    slug: 'grow-lights',
    title: 'Grow Lights',
    shortTitle: 'Grow Lights',
    summary: 'Light duration, distance, intensity, and fixture selection for indoor crops.',
    description:
      'Evidence-driven recommendations on LED grow lights, coverage, hanging height, photoperiod, and what matters for herbs and vegetables.',
    intro:
      'Most indoor growing issues trace back to light quantity, distance, or schedule. This section translates lighting concepts into practical setup decisions for shelves, tents, and kitchen corners.',
    accent: '#b48e54',
  },
  {
    slug: 'containers-planters',
    title: 'Containers & Planters',
    shortTitle: 'Containers',
    summary: 'Choosing the right pot size, drainage strategy, and planter style for edible crops.',
    description:
      'Container sizing, self-watering planters, drainage, and layout advice for vegetables, herbs, and compact edible gardens.',
    intro:
      'Good container choices reduce stress on both plants and growers. These guides cover root volume, drainage, material tradeoffs, and how planter choices affect watering frequency and crop performance.',
    accent: '#8b7656',
  },
  {
    slug: 'soil-fertilizers',
    title: 'Soil & Fertilizers',
    shortTitle: 'Soil & Fertilizers',
    summary: 'Potting mixes, compost, feeding schedules, and nutrient management for containers.',
    description:
      'Plain-English guidance on potting mix structure, fertilizer timing, organic amendments, and how to feed container plants without guesswork.',
    intro:
      'Healthy container growing depends on media structure and measured feeding, not heavy-handed fertilizer use. This section explains how air, water retention, and nutrients interact in real container setups.',
    accent: '#7a6b59',
  },
  {
    slug: 'plant-problems',
    title: 'Plant Problems',
    shortTitle: 'Plant Problems',
    summary: 'Diagnosis-first help for yellow leaves, pests, stretch, rot, and stalled growth.',
    description:
      'A calm troubleshooting library for common urban gardening problems, focused on root causes instead of quick fixes.',
    intro:
      'Plant problems usually come from an environmental mismatch, not a mysterious failure. These guides help you diagnose the system first, then apply the smallest fix that solves the issue.',
    accent: '#8c685f',
  },
];

export const categoryMap = new Map(categories.map((category) => [category.slug, category]));
